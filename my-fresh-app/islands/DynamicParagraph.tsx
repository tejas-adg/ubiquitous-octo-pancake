import { useEffect, useRef } from "preact/hooks";

export default function DynamicParagraph({
  text = "",
  targetWidthPercent = 1,
  parentSelector = "",
  className = "",
  style = {},
}: {
  text: string;
  targetWidthPercent?: number;
  parentSelector?: string;
  className?: string;
  style?: Record<string, string>;
}) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const resize = () => {
      if (!paragraphRef.current) return;

      // Get the parent container width
      let containerWidth = 1200; // fallback

      if (parentSelector) {
        const parentElement = document.querySelector(parentSelector);
        if (parentElement) {
          containerWidth = parentElement.clientWidth;
        }
      } else {
        // If no parent selector, use the paragraph's direct parent
        const parent = paragraphRef.current.parentElement;
        if (parent) {
          containerWidth = parent.clientWidth;
        } else {
          // Fallback to viewport width, but with a reasonable max
          containerWidth = Math.min(globalThis.innerWidth || 1200, 1200);
        }
      }

      const targetWidth = containerWidth * targetWidthPercent;

      // Start with a reasonable base font size instead of 400px
      const baseFontSize = 16;
      paragraphRef.current.style.fontSize = `${baseFontSize}px`;

      const span = paragraphRef.current.querySelector("span");
      if (!span) return;

      const spanWidth = span.getBoundingClientRect().width;
      if (!spanWidth || spanWidth === 0) return;

      // Calculate the scaling factor based on the base font size
      const scaleFactor = targetWidth / spanWidth;
      const newFontSize = Math.max(
        baseFontSize,
        Math.min(baseFontSize * scaleFactor, containerWidth * 0.1),
      );

      paragraphRef.current.style.fontSize = `${newFontSize}px`;
    };

    const timeoutId = setTimeout(resize, 100);
    globalThis.addEventListener("resize", resize);

    return () => {
      clearTimeout(timeoutId);
      globalThis.removeEventListener("resize", resize);
    };
  }, [text, targetWidthPercent, parentSelector]);

  return (
    <p
      ref={paragraphRef}
      className={className}
      style={{
        fontSize: "16px",
        maxWidth: "100%",
        overflow: "hidden",
        ...style,
      }}
    >
      <span>{text}</span>
    </p>
  );
}
