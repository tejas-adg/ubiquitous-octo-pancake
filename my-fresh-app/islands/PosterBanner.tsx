import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

export default function BannerScroll({
  text = "New World Order",
  color = "#fff",
  speed = 100,            // px per second
}: {
  text?: string;
  color?: string;
  speed?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bannerRef  = useRef<HTMLParagraphElement>(null);
  const [duration, setDuration] = useState(20); // seconds

  /** 1️⃣  Keep your existing “make it fit the viewport” logic */
  useEffect(() => {
    const resize = () => {
      if (!wrapperRef.current || !bannerRef.current) return;

      const targetW = wrapperRef.current.clientWidth;
      bannerRef.current.style.fontSize = "400px"; // absurd for measurement

      const span = bannerRef.current.querySelector("span");
      if (!span) return;

      const spanW = span.getBoundingClientRect().width;
      const newSize = (targetW / spanW) * 400;
      bannerRef.current.style.fontSize = `${newSize}px`;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /** 2️⃣  Figure out how long one lap should take */
  useEffect(() => {
    if (!bannerRef.current) return;
    const span = bannerRef.current.querySelector("span");
    if (!span) return;

    const spanW = span.getBoundingClientRect().width; // width of ONE copy
    setDuration(spanW / speed);                       // seconds = px / (px/s)
  }, [text, speed]);

  return (
    <div
      ref={wrapperRef}
      class="absolute bottom-4 left-0 w-full overflow-hidden pointer-events-none z-50 pb-6 pt-2"
    >
      {/* 3️⃣  Inline style block so the component is 100 % self-contained */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .marquee {
            display: inline-flex;
            white-space: nowrap;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>

      <p
        ref={bannerRef}
        class="marquee font-funnel font-normal leading-none m-0 p-0 select-none"
        style={{
          color,
          animationName: "marquee",
          animationDuration: `${duration}s`,
        }}
      >
        {/* Two copies, one lap = -50 % */}
        <span class="mr-8">{text}&nbsp;&nbsp;&nbsp;</span>
        <span class="mr-8" aria-hidden="true">
          {text}&nbsp;&nbsp;&nbsp;
        </span>
      </p>
    </div>
  );
}
