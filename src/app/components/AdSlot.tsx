import { cn } from "./ui/utils";

interface AdSlotProps {
  slot: string;
  width?: number;
  height?: number;
  className?: string;
  label?: string;
}

export default function AdSlot({ slot, width, height, className, label }: AdSlotProps) {
  return (
    <div
      className={cn(
        "bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded",
        className
      )}
      style={{
        minHeight: height ? `${height}px` : "250px",
        width: width ? `${width}px` : "100%",
      }}
    >
      <div className="text-center text-gray-400">
        <div className="font-lexend font-semibold text-sm mb-1">
          {label || "Advertisement"}
        </div>
        <div className="text-xs">
          {width && height ? `${width} × ${height}` : slot}
        </div>
      </div>
    </div>
  );
}
