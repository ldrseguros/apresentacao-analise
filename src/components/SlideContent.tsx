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
        "h-full flex flex-col justify-center p-2 xs:p-4 sm:p-8 md:p-12 mx-1 xs:mx-2 sm:mx-6 md:mx-10",
        animated && "animate-fade-in",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SlideContent;
