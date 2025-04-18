import { h } from "preact";

type LayoutProps = {
  children: preact.ComponentChildren;
};

export default function Layout({ children }: LayoutProps) {
  const roll = Array(40).fill("New World Order • ").join("");

  return (
    <>
      {children}

      {/* ---------- SCROLLING BANNER ---------- */}
      <div class="pointer-events-none fixed bottom-0 left-0 w-full bg-transparent z-50">
        <p class="whitespace-nowrap font-funnel font-bold text-white text-8xl animate-marquee leading-[10rem]">
          {roll}
        </p>
      </div>
    </>
  );
}
