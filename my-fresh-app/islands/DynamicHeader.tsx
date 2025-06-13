import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

export default function DynamicHeader({
  title = "WallEX",
  onMenuClick,
  onEnterClick,
}: {
  title?: string;
  onMenuClick?: () => void;
  onEnterClick?: () => void;
}) {
  const isScrolled = useSignal(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = globalThis.scrollY;
      const threshold = 80; // 5rem = 80px (assuming 1rem = 16px)

      isScrolled.value = scrollTop > threshold;
    };

    handleScroll(); // Initialize
    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-12 h-12 min-w-12 min-h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  const EnterIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-12 h-12 min-w-12 min-h-12"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
      />
    </svg>
  );

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled.value ? "p-4 md:p-6" : "p-2 md:p-4"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
          isScrolled.value
            ? "bg-white text-black rounded-full h-16 px-6 shadow-lg"
            : "bg-transparent text-white h-12 px-2"
        }`}
      >
        {/* Menu Icon */}
        <button
          type="button"
          onClick={onMenuClick}
          className={`flex items-center justify-center transition-colors duration-300 hover:opacity-70 ${
            isScrolled.value ? "text-black" : "text-white"
          }`}
          aria-label="Menu"
        >
          <MenuIcon />
        </button>

        {/* Title */}
        <div
          className={`flex-1 text-center transition-all duration-300 ${
            isScrolled.value
              ? "opacity-100 text-black font-medium text-lg"
              : "opacity-0 text-transparent"
          }`}
          style={{ fontFamily: "'Funnel Sans', sans-serif" }}
        >
          {title}
        </div>

        {/* Enter Icon */}
        <button
          type="button"
          onClick={onEnterClick}
          className={`flex items-center justify-center transition-colors duration-300 hover:opacity-70 ${
            isScrolled.value ? "text-black" : "text-white"
          }`}
          aria-label="Enter"
        >
          <EnterIcon />
        </button>
      </div>
    </header>
  );
}
