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
        "text-lg md:text-xl text-gray-700 mb-4 animate-slide-in",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default SlideText;
