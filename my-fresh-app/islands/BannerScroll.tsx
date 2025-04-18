import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

export default function BannerScroll() {
  const bannerRef = useRef<HTMLParagraphElement>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / maxScroll;

      // Translate from -100% to 0% based on scroll
      const xOffset = -scrollPercent * 100;
      setScrollX(xOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div class="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-50">
      <p
        ref={bannerRef}
        class="whitespace-nowrap font-funnel font-bold text-white text-[300px] leading-none m-0 p-0"
        style={{
          transform: `translateX(${scrollX}%)`,
          transition: "transform 0.1s linear",
        }}
      >
        New World Order
      </p>
    </div>
  );
}