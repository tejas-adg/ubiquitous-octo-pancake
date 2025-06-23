export default function BreakpointIndicator() {
  return (
    <div className="fixed bottom-4 left-4 z-50 p-4 rounded-lg shadow-lg border-2 font-mono text-sm font-bold min-w-[200px] min-h-[50px] flex flex-col items-center justify-center
      bg-red-500 text-white border-red-600
      sm:bg-orange-500 sm:text-white sm:border-orange-600
      md:bg-yellow-500 md:text-black md:border-yellow-600
      lg:bg-green-500 lg:text-white lg:border-green-600
      xl:bg-blue-500 xl:text-white xl:border-blue-600
      2xl:bg-purple-500 2xl:text-white 2xl:border-purple-600">
      {/* Default (xs) - Red */}
      <div className="block sm:hidden">
        <div className="text-lg">📱 XS</div>
        <div className="text-xs">0px - 639px</div>
        <div className="text-xs">Mobile</div>
      </div>

      {/* SM - Orange */}
      <div className="hidden sm:block md:hidden">
        <div className="text-lg">📱 SM</div>
        <div className="text-xs">640px - 767px</div>
        <div className="text-xs">Large Mobile</div>
      </div>

      {/* MD - Yellow */}
      <div className="hidden md:block lg:hidden">
        <div className="text-lg">📱 MD</div>
        <div className="text-xs">768px - 1023px</div>
        <div className="text-xs">Tablet</div>
      </div>

      {/* LG - Green */}
      <div className="hidden lg:block xl:hidden">
        <div className="text-lg">💻 LG</div>
        <div className="text-xs">1024px - 1279px</div>
        <div className="text-xs">Small Desktop</div>
      </div>

      {/* XL - Blue */}
      <div className="hidden xl:block 2xl:hidden">
        <div className="text-lg">🖥️ XL</div>
        <div className="text-xs">1280px - 1535px</div>
        <div className="text-xs">Desktop</div>
      </div>

      {/* 2XL - Purple */}
      <div className="hidden 2xl:block">
        <div className="text-lg">🖥️ 2XL</div>
        <div className="text-xs">1536px+</div>
        <div className="text-xs">Large Desktop</div>
      </div>
    </div>
  );
}
