import { useEffect, useRef } from "preact/hooks";

export default function DynamicSubtitle({
  text = "Fast. Familiar. Reliable.",
  targetWidthPercent = 0.3,
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
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  // Font resizing logic - improved timing and fallback
  useEffect(() => {
    const resize = () => {
      if (!subtitleRef.current) return;

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
      subtitleRef.current.style.fontSize = "400px";

      // Step 2: Find the span inside the h3 for measurement
      const span = subtitleRef.current.querySelector("span");
      if (!span) return;

      const spanWidth = span.getBoundingClientRect().width;
      if (spanWidth === 0) return; // Skip if no width measured

      // Step 3: Calculate new font size based on span measurement
      const newFontSize = Math.max(12, (targetWidth / spanWidth) * 400); // minimum 12px
      subtitleRef.current.style.fontSize = `${newFontSize}px`;
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
    <h3
      ref={subtitleRef}
      className={`font-light text-left opacity-90 whitespace-nowrap ${className}`}
      style={{
        fontFamily: "'Funnel Sans', sans-serif",
        fontSize: "1.5rem", // fallback
        ...style,
      }}
    >
      <span>{text}</span>
    </h3>
  );
}
