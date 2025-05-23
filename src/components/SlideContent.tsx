import React from "react";
import { cn } from "@/lib/utils";

interface SlideContentProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

const SlideContent: React.FC<SlideContentProps> = ({
  children,
  className = "",
  animated = true,
}) => {
  return (
    <div
      className={cn(
        "h-full flex flex-col justify-center p-12 ml-10 mr-10",
        animated && "animate-fade-in",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SlideContent;
