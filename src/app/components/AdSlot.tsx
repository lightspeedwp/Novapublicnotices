import { cn } from "./ui/utils";
import "./AdSlot.css";

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
      className={cn("wpn-ad-slot", className)}
      style={{
        minHeight: height ? `${height}px` : undefined,
        width: width ? `${width}px` : undefined,
      }}
    >
      <div className="wpn-ad-slot__content">
        <div className="wpn-ad-slot__label">
          {label || "Advertisement"}
        </div>
        <div className="wpn-ad-slot__dimensions">
          {width && height ? `${width} × ${height}` : slot}
        </div>
      </div>
    </div>
  );
}