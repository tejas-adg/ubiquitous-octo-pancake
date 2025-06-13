import { useEffect, useRef } from "preact/hooks";

export default function DynamicTitle({
  text = "WallEX",
  targetWidthPercent = 0.8,
  parentSelector = "",
  className = "",
  style = {},
}: {
  text?: string;
  targetWidthPercent?: number;
  parentSelector?: string;
  className?: string;
  style?: Record<string, string>;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Font resizing logic - using viewport width and parent selector
  useEffect(() => {
    const resize = () => {
      if (!titleRef.current) return;

      // Try to find parent element by selector, fallback to viewport width
      let containerWidth = globalThis.innerWidth || 1200;

      if (parentSelector) {
        const parentElement = document.querySelector(parentSelector);
        if (parentElement) {
          containerWidth = parentElement.clientWidth;
        }
      }

      const targetWidth = containerWidth * targetWidthPercent;

      // Step 1: Set large font size for measurement
      titleRef.current.style.fontSize = "400px";

      // Step 2: Find the span inside the h1 for measurement
      const span = titleRef.current.querySelector("span");
      if (!span) return;

      const spanWidth = span.getBoundingClientRect().width;
      if (spanWidth === 0) return; // Skip if no width measured

      // Step 3: Calculate new font size based on span measurement
      const newFontSize = Math.max(12, (targetWidth / spanWidth) * 400); // minimum 12px
      titleRef.current.style.fontSize = `${newFontSize}px`;
    };

    // Initial resize with delay to ensure DOM is ready
    const timeoutId = setTimeout(resize, 100);

    // Add resize listener
    globalThis.addEventListener("resize", resize);

    return () => {
      clearTimeout(timeoutId);
      globalThis.removeEventListener("resize", resize);
    };
  }, [targetWidthPercent, text, parentSelector]);

  return (
    <h1
      ref={titleRef}
      className={`font-bold text-left leading-none tracking-tight whitespace-nowrap ${className}`}
      style={{
        fontFamily: "'Funnel Display', sans-serif",
        fontSize: "12rem", // fallback
        ...style,
      }}
    >
      <span>{text}</span>
    </h1>
  );
}
