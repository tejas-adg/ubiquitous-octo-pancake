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
      <div class="pointer-events-none fixed bottom-0 left-0 w-full h-142 bg-transparent">
        <div class="pointer-events-none fixed bottom-0 left-0 w-full h-32" />
        <p class="relative whitespace-nowrap font-funnel font-bold text-white text-9xl animate-marquee leading-[20rem]">
          {roll}
        </p>
      </div>
    </>
  );
}