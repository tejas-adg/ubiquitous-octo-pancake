export interface BreakpointTesterProps {
  /** Children to display in all three test rectangles */
  children: preact.ComponentChildren;
  /** Additional class names for the container */
  className?: string;
}

/**
 * A component that displays children in three fixed-size rectangles
 * for testing breakpoint behavior at common screen resolutions
 */
export default function BreakpointTester({
  children,
  className = "",
}: BreakpointTesterProps) {
  const newTestSizes = [
    { width: 640, height: 1138, label: "640×1138 (640p Portrait)" },
    { width: 768, height: 1365, label: "768×1365 (768p Portrait)" },
  ];

  const testSizes = [
    { width: 1024, height: 576, label: "1024×576 (HD)" },
    { width: 1280, height: 720, label: "1280×720 (720p)" },
    { width: 1536, height: 864, label: "1536×864 (1.5K)" },
  ];

  return (
    <div className={`p-8 space-y-8 ${className}`}>
      {/* New test sizes - 640p and 768p portrait only */}
      {newTestSizes.map(({ width, height, label }) => (
        <div key={`${width}x${height}`} className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            {label}
          </h3>
          <div
            className="outline-2 outline-dashed outline-gray-400 overflow-auto"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              minWidth: `${width}px`,
              minHeight: `${height}px`,
            }}
          >
            <div className="w-full h-full">
              {children}
            </div>
          </div>
        </div>
      ))}

      {/* Original test sizes */}
      {testSizes.map(({ width, height, label }) => (
        <div key={`${width}x${height}`} className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            {label}
          </h3>
          <div
            className="outline-2 outline-dashed outline-gray-400 overflow-auto"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              minWidth: `${width}px`,
              minHeight: `${height}px`,
            }}
          >
            <div className="w-full h-full">
              {children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
