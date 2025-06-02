import React from "react";
import { cn } from "@/lib/utils";

interface SlideTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SlideText: React.FC<SlideTextProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const style = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div
      className={cn(
        "text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-3 xs:mb-4 animate-slide-in",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default SlideText;
