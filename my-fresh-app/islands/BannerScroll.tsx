//import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

export default function BannerScroll({
  text = "New World Order",
  color = "#fff",
}: {
  text?: string;
  color?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLParagraphElement>(null);
  const [scrollX, setScrollX] = useState(0);

  // Font resizing logic based on "New World O" substring
  useEffect(() => {
    const resize = () => {
      if (!wrapperRef.current || !bannerRef.current) return;

      const targetWidth = wrapperRef.current.clientWidth;

      // Step 1: Set absurd font size for initial measurement
      bannerRef.current.style.fontSize = "400px";

      const span = bannerRef.current.querySelector("span");
      if (!span) return;

      const substringWidth = span.getBoundingClientRect().width;

      const newFontSize = (targetWidth / substringWidth) * 400;
      bannerRef.current.style.fontSize = `${newFontSize}px`;
    };

    resize();
    globalThis.addEventListener("resize", resize);
    return () => globalThis.removeEventListener("resize", resize);
  }, []);

  // Scroll handler for horizontal animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = globalThis.scrollY;
      const maxScroll = document.body.scrollHeight - globalThis.innerHeight;
      const scrollPercent = maxScroll ? scrollTop / maxScroll : 0;

      const xOffset = -scrollPercent * 100;
      setScrollX(xOffset);
    };

    handleScroll(); // Initialize
    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-50"
    >
      <p
        ref={bannerRef}
        className="whitespace-nowrap font-funnel font-medium leading-none m-0 p-0 select-none"
        style={{
          color,
          transform: `translateX(${scrollX}%)`,
          transition: "transform 0.1s linear",
        }}
      >
        <span>New&nbsp;World&nbsp;O</span>
        {text.slice("New World O".length)}
      </p>
    </div>
  );
}