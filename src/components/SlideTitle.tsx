import React from "react";
import { cn } from "@/lib/utils";

interface SlideTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  animated?: boolean;
}

const SlideTitle: React.FC<SlideTitleProps> = ({
  children,
  className = "",
  as = "h2",
  animated = true,
}) => {
  const baseClasses = "font-bold mb-3 xs:mb-4 text-brand-blue";
  const Component = as;

  const sizeClasses = {
    h1: "text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    h2: "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    h3: "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl",
  };

  const animationClasses = animated ? "animate-slide-in" : "";

  return (
    <Component
      className={cn(baseClasses, sizeClasses[as], animationClasses, className)}
    >
      {children}
    </Component>
  );
};

export default SlideTitle;
