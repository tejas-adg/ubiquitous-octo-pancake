import { useEffect, useRef, useState } from "preact/hooks";
import { JSX } from "preact";

/**
 * DynamicTextContainer
 *
 * A Fresh Island component that automatically adjusts its text size
 * to fill its parent container, with support for multi-line text
 * and customizable line gaps. Includes debug logging for each step.
 */
export interface DynamicTextContainerProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of text strings to render as separate lines or blocks.
   */
  texts: string[];
  /**
   * CSS gap between lines, e.g. "0.5rem" or "8px".
   */
  lineGap?: string;
  /**
   * ID used for DOM element and debug prefix.
   */
  id?: string;

  style?: JSX.CSSProperties;
}

export default function DinamicTextContainer({
  texts,
  lineGap = "0.5rem",
  id: debugId = "dynamic-text",
  style,
  className,
  ...rest
}: DynamicTextContainerProps) {
  // Refs to the container and the text wrapper
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  // State to track current font size in pixels
  const [fontSize, setFontSize] = useState<number>(16);

  // 1) Initial font size guess based on container dimensions and text length
  useEffect(() => {
    const cont = containerRef.current;
    if (!cont) return;

    const contWidth = cont.clientWidth;
    const contHeight = cont.clientHeight;
    // Rough estimate: assume average character width is 0.6 * fontSize
    const totalChars = texts.join(" ").length || 1;
    const estByWidth = contWidth / (totalChars * 0.6);
    const estByHeight = contHeight / texts.length;
    const initial = Math.min(estByWidth, estByHeight);

    console.log(
      `[${debugId}] Initial font size guess:`,
      initial,
      { estByWidth, estByHeight },
    );
    setFontSize(initial);
  }, [texts, debugId]);

  // 2) Iterative correction to refine font size using exponential convergence
  useEffect(() => {
    const cont = containerRef.current;
    const txt = textRef.current;
    if (!cont || !txt) return;

    let currentSize = fontSize;
    let iteration = 0;
    const maxIter = 10;

    const adjust = () => {
      // Apply current size
      txt.style.fontSize = `${currentSize}px`;
      txt.style.lineHeight = `1`;

      // Measure overflow
      const overflowX = txt.scrollWidth - cont.clientWidth;
      const overflowY = txt.scrollHeight - cont.clientHeight;
      console.log(
        `[${debugId}] Iteration ${iteration}`,
        { currentSize, overflowX, overflowY },
      );

      // Stop if fits or reached iteration limit
      if ((overflowX <= 0 && overflowY <= 0) || iteration >= maxIter) {
        console.log(`[${debugId}] Final font size:`, currentSize);
        return;
      }

      // Compute scale factor: how much to grow/shrink by
      const scaleW = cont.clientWidth / txt.scrollWidth;
      const scaleH = cont.clientHeight / txt.scrollHeight;
      const targetScale = Math.min(scaleW, scaleH);
      // Exponential convergence: move halfway towards target
      currentSize = currentSize * (1 + targetScale) / 2;
      iteration++;
      requestAnimationFrame(adjust);
    };

    adjust();
  }, [fontSize, texts, debugId]);

  return (
    <div
      ref={containerRef}
      id={debugId}
      className={className}
      style={{
        ...style,
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      {...rest}
    >
      {/* Wrapper for text lines */}
      <div
        ref={textRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: lineGap,
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {texts.map((line, idx) => <span key={idx}>{line}</span>)}
      </div>
    </div>
  );
}
