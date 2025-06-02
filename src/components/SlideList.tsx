import React from "react";
import { CheckCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideListProps {
  items: string[];
  iconType?: "check" | "number" | "bullet";
  className?: string;
}

const SlideList: React.FC<SlideListProps> = ({
  items,
  iconType = "check",
  className = "",
}) => {
  const renderIcon = (index: number) => {
    switch (iconType) {
      case "check":
        return (
          <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-brand-yellow flex-shrink-0" />
        );
      case "number":
        return (
          <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs xs:text-sm font-bold flex-shrink-0">
            {index + 1}
          </div>
        );
      case "bullet":
        return (
          <Circle className="w-3 h-3 xs:w-4 xs:h-4 text-brand-blue flex-shrink-0" />
        );
      default:
        return (
          <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-brand-yellow flex-shrink-0" />
        );
    }
  };

  return (
    <div className={cn("space-y-2 xs:space-y-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-2 xs:gap-3 animate-slide-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {renderIcon(index)}
          <span className="text-gray-700 text-xs xs:text-sm sm:text-base">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SlideList;
