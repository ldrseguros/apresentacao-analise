import React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideListProps {
  items: string[];
  className?: string;
  iconType?: "check" | "bullet" | "number" | "none";
  animated?: boolean;
}

const SlideList: React.FC<SlideListProps> = ({
  items,
  className = "",
  iconType = "check",
  animated = true,
}) => {
  return (
    <ul
      className={cn(
        "space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg",
        className
      )}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            "flex items-start gap-2 sm:gap-3",
            animated && "animate-slide-in"
          )}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {iconType === "check" && (
            <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-yellow flex-shrink-0 mt-0.5" />
          )}
          {iconType === "bullet" && (
            <div className="h-2 w-2 bg-brand-yellow rounded-full mt-2 sm:mt-2.5 flex-shrink-0" />
          )}
          {iconType === "number" && (
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-sm">
              {index + 1}
            </div>
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default SlideList;
