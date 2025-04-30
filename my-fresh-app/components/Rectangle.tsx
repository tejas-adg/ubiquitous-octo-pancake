// filepath: /home/hahalolxd/GitHub/ubiquitous-octo-pancake/my-fresh-app/components/Rectangle.tsx
import { JSX } from "preact";

export interface RectangleProps extends JSX.HTMLAttributes<HTMLDivElement> {
  /** Height of the rectangle in pixels (default: 75px) */
  height?: number | string;
  /** Width of the rectangle (default: '100%') */
  width?: number | string;
  /** Background color (default: #4B0082) */
  color?: string;
  /** Background opacity (0-100) (default: 35) */
  opacity?: number;
  /** Additional class names for the rectangle */
  className?: string;

  style?: Record<string, string | number | never>;
  /** Additional styles for the rectangle */
}

/**
 * A customizable rectangular component that can be used throughout the application
 */
export default function Rectangle({
  height = 75,
  width = "100%",
  color = "#4B0082",
  opacity = 35,
  className = "",
  style = {},
  ...props
}: RectangleProps) {
  // Process height and width to ensure they have units if they're numbers
  const processedHeight = typeof height === "number" ? `${height}px` : height;
  const processedWidth = typeof width === "number" ? `${width}px` : width;

  // Convert opacity from 0-100 to 0-1
  const normalizedOpacity = opacity / 100;

  // Combine all styles
  const combinedStyle = {
    height: processedHeight,
    width: processedWidth,
    backgroundColor: color,
    opacity: normalizedOpacity,
    ...style,
  };

  return (
    <div
      className={`rectangle ${className}`}
      style={combinedStyle}
      {...props}
    />
  );
}
