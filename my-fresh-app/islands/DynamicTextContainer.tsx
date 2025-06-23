import { useEffect, useRef } from "preact/hooks";

export default function DynamicTextContainer({
  texts = [],
  parentSelector = "",
  className = "",
  style = {},
  paragraphSpacing = 16,
  scalingBuffer = 0.95, // Floor factor to prevent overflow
}: {
  texts: string[];
  parentSelector?: string;
  className?: string;
  style?: Record<string, string>;
  paragraphSpacing?: number;
  scalingBuffer?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current || texts.length === 0) return;

      // Get the parent container dimensions
      let containerWidth = 1200;
      let containerHeight = 600;

      if (parentSelector) {
        const parentElement = document.querySelector(parentSelector);
        if (parentElement) {
          containerWidth = parentElement.clientWidth;
          containerHeight = parentElement.clientHeight;
        }
      } else {
        // Use the container's direct parent
        const parent = containerRef.current.parentElement;
        if (parent) {
          containerWidth = parent.clientWidth;
          containerHeight = parent.clientHeight;
        } else {
          // Fallback to viewport dimensions with reasonable limits
          containerWidth = Math.min(globalThis.innerWidth || 1200, 1200);
          containerHeight = Math.min(globalThis.innerHeight || 600, 600);
        }
      }

      // Calculate spacing area that needs to be reserved
      const totalSpacingHeight = (texts.length - 1) * paragraphSpacing;

      // Find the longest text to use as reference
      const longestText = texts.reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        texts[0],
      );

      // Create a temporary element to measure text dimensions
      const tempP = document.createElement("p");
      tempP.style.position = "absolute";
      tempP.style.visibility = "hidden";
      tempP.style.whiteSpace = "nowrap";
      tempP.style.fontSize = "16px";
      tempP.style.fontFamily =
        getComputedStyle(containerRef.current).fontFamily;
      tempP.style.fontWeight =
        getComputedStyle(containerRef.current).fontWeight;
      tempP.style.margin = "0";
      tempP.style.padding = "0";
      tempP.style.lineHeight = "1.2";
      tempP.innerHTML = `<span>${longestText}</span>`;
      document.body.appendChild(tempP);

      const tempSpan = tempP.querySelector("span");
      const baseRect = tempSpan!.getBoundingClientRect();
      const baseWidth = baseRect.width;
      const baseHeight = baseRect.height;
      const baseArea = baseWidth * baseHeight;

      document.body.removeChild(tempP);
      if (baseArea === 0) return;

      let targetFontSize: number;

      if (texts.length === 1) {
        // Single text: intelligent scaling approach
        const widthScaleFactor = containerWidth / baseWidth;
        const heightScaleFactor = containerHeight / baseHeight;

        // SMART SCALING: Try the larger factor first, then validate
        const maxScaleFactor = Math.max(widthScaleFactor, heightScaleFactor);
        const minScaleFactor = Math.min(widthScaleFactor, heightScaleFactor);

        // Estimate how many lines the text will wrap to at the larger scale
        const estimatedFontSize = 16 * maxScaleFactor;
        const estimatedTextWidth = baseWidth * (estimatedFontSize / 16);
        const estimatedTextHeight = baseHeight * (estimatedFontSize / 16);

        // Calculate how many lines we'd need if we use the full width
        const linesNeeded = Math.ceil(estimatedTextWidth / containerWidth);
        const totalTextHeight = estimatedTextHeight * linesNeeded;

        // If the wrapped text fits in the container height, use the larger factor
        if (totalTextHeight <= containerHeight) {
          targetFontSize = Math.max(12, estimatedFontSize * scalingBuffer);
          console.log(`Single text mode - Using LARGER scale factor:
            - Container: ${containerWidth}x${containerHeight}
            - Base text: ${baseWidth}x${baseHeight}
            - Width scale: ${widthScaleFactor}, Height scale: ${heightScaleFactor}
            - Using max scale: ${maxScaleFactor}
            - Estimated lines needed: ${linesNeeded}
            - Total height needed: ${totalTextHeight}px
            - Target font size: ${targetFontSize}px`);
        } else {
          // Fall back to conservative scaling
          targetFontSize = Math.max(12, 16 * minScaleFactor * scalingBuffer);
          console.log(`Single text mode - Using SMALLER scale factor:
            - Container: ${containerWidth}x${containerHeight}
            - Text would be too tall (${totalTextHeight}px), using conservative scaling
            - Target font size: ${targetFontSize}px`);
        }
      } else {
        // Multiple texts: use line-height based estimation
        const availableHeightPerText = (containerHeight - totalSpacingHeight) /
          texts.length;

        // Estimate optimal font size based on line height
        // Most fonts have a line-height that's roughly 1.2x the font size
        const estimatedFontSizeByHeight = availableHeightPerText / 1.2;
        const estimatedFontSizeByWidth = (containerWidth / baseWidth) * 16;

        // Calculate how many lines each text would need at the width-based size
        const estimatedWidthAtWidthSize =
          (baseWidth * estimatedFontSizeByWidth) / 16;
        const linesNeeded = Math.ceil(
          estimatedWidthAtWidthSize / containerWidth,
        );
        const actualHeightNeeded = (estimatedFontSizeByHeight * 1.2) *
          linesNeeded;

        if (actualHeightNeeded <= availableHeightPerText) {
          // Width-based scaling fits, use it
          targetFontSize = Math.max(
            12,
            estimatedFontSizeByWidth * scalingBuffer,
          );
        } else {
          // Use height-based scaling
          targetFontSize = Math.max(
            12,
            estimatedFontSizeByHeight * scalingBuffer,
          );
        }

        console.log(`Multiple text mode - Line-height estimation:
          - Available height per text: ${availableHeightPerText}px
          - Font size by height: ${estimatedFontSizeByHeight}px
          - Font size by width: ${estimatedFontSizeByWidth}px
          - Lines needed: ${linesNeeded}
          - Actual height needed: ${actualHeightNeeded}px
          - Target font size: ${targetFontSize}px`);
      }

      // Apply the calculated font size to all paragraphs
      const paragraphs = containerRef.current.querySelectorAll("p");
      paragraphs.forEach((p) => {
        p.style.fontSize = `${targetFontSize}px`;
        p.style.lineHeight = "1.2";
      });

      // ===== INTELLIGENT ITERATIVE ADJUSTMENT PHASE =====
      // This phase not only shrinks text when it overflows, but also tries to grow
      // text when there's unused space, maximizing the use of available area.

      let currentFontSize = targetFontSize;
      let iterations = 0;
      const maxIterations = 8; // Increased for grow/shrink cycles
      let lastAction = "initial"; // Track what we did last

      while (iterations < maxIterations) {
        // STEP 1: Measure actual rendered dimensions
        let totalActualHeight = 0;
        let maxActualWidth = 0;

        paragraphs.forEach((p) => {
          const rect = p.getBoundingClientRect();
          totalActualHeight += rect.height;
          maxActualWidth = Math.max(maxActualWidth, rect.width);
        });

        totalActualHeight += totalSpacingHeight;

        // STEP 2: Check current state
        const widthOverflow = maxActualWidth > containerWidth;
        const heightOverflow = totalActualHeight > containerHeight;

        // Calculate utilization percentages
        const widthUtilization = maxActualWidth / containerWidth;
        const heightUtilization = totalActualHeight / containerHeight;
        const minUtilization = Math.min(widthUtilization, heightUtilization);

        console.log(`Iteration ${iterations}: 
          - Current font size: ${currentFontSize}px
          - Width utilization: ${(widthUtilization * 100).toFixed(1)}%
          - Height utilization: ${(heightUtilization * 100).toFixed(1)}%
          - Min utilization: ${(minUtilization * 100).toFixed(1)}%
          - Overflow: width=${widthOverflow}, height=${heightOverflow}`);

        // STEP 3: Decide action based on current state
        if (widthOverflow || heightOverflow) {
          // TEXT IS TOO BIG - Shrink it
          const widthFactor = widthOverflow
            ? (containerWidth / maxActualWidth)
            : 1;
          const heightFactor = heightOverflow
            ? (containerHeight / totalActualHeight)
            : 1;
          const shrinkFactor = Math.min(widthFactor, heightFactor) *
            scalingBuffer;

          currentFontSize = Math.max(12, currentFontSize * shrinkFactor);
          lastAction = "shrink";
        } else if (minUtilization < 0.85 && lastAction !== "shrink") {
          // TEXT IS TOO SMALL - Try to grow it (but not if we just shrunk)
          // Only grow if we're using less than 85% of available space
          const growthTarget = 0.90; // Target 90% utilization
          const growthFactor = growthTarget / minUtilization;

          // Be conservative with growth to avoid overshooting
          const conservativeGrowth = Math.min(growthFactor, 1.1); // Max 10% growth per iteration
          const newFontSize = Math.min(
            currentFontSize * conservativeGrowth,
            currentFontSize * 1.5,
          ); // Cap total growth

          currentFontSize = newFontSize;
          lastAction = "grow";
        } else {
          // TEXT SIZE IS ACCEPTABLE - We're done
          console.log(
            `Converged at ${currentFontSize}px with ${
              (minUtilization * 100).toFixed(1)
            }% utilization`,
          );
          break;
        }

        // STEP 4: Apply the new font size
        paragraphs.forEach((p) => {
          p.style.fontSize = `${currentFontSize}px`;
        });

        iterations++;

        // Safety: if we're alternating between grow/shrink, stop
        if (iterations >= 3 && Math.abs(currentFontSize - targetFontSize) < 2) {
          console.log(
            `Stopped due to minimal changes (${currentFontSize}px vs ${targetFontSize}px)`,
          );
          break;
        }
      }
    };

    const timeoutId = setTimeout(resize, 100);
    globalThis.addEventListener("resize", resize);

    return () => {
      clearTimeout(timeoutId);
      globalThis.removeEventListener("resize", resize);
    };
  }, [texts, parentSelector, paragraphSpacing, scalingBuffer]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `${paragraphSpacing}px`,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...style,
      }}
    >
      {texts.map((text, index) => (
        <p
          key={index}
          style={{
            margin: 0,
            padding: 0,
            fontSize: "16px",
            lineHeight: "1.2",
            textAlign: "center",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{ display: "block", width: "100%", textAlign: "center" }}
          >
            {text}
          </span>
        </p>
      ))}
    </div>
  );
}
