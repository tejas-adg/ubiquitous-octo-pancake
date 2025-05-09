// filepath: /home/hahalolxd/GitHub/ubiquitous-octo-pancake/my-fresh-app/components/ScrollableList.tsx
import { JSX } from "preact";

export interface ScrollableListItem {
  title: string;
  desc: string;
}

export interface ScrollableListProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  /** List of items to render (array of objects with title and desc) */
  items: ScrollableListItem[];
  /** Height of the scrollable area (e.g., "300px", "50vh") */
  height: string;
  /** Width of the scrollable area (e.g., "100%", "200px") */
  width: string;
  /** Additional class names for the main div */
  className?: string;
  /** Additional styles for the main div */
  style?: Record<string, string | number>;
}

/**
 * A component that renders a scrollable list of items.
 */
export default function ScrollableList({
  items,
  height,
  width,
  className = "",
  style = {},
  ...props
}: ScrollableListProps) {
  return (
    <div
      className={`p-2 overflow-y-auto border border-transparent ${className} h-[${height}] w-[${width}]`}
      style={style} // Apply user-provided styles directly
      {...props}
    >
      <ul className="list-none p-0 m-0">
        {items.map((item, index) => (
          <li
            key={index}
            className="py-3 px-2 border-b border-gray-700 last:border-b-0 flex flex-col items-center justify-center text-center"
          >
            <span className="text-4xl font-bold">{item.title}</span>
            {item.desc && (
              <span className="text-sm text-gray-400 mt-1">{item.desc}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
