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
  const baseClasses = "font-bold mb-4 text-brand-blue";
  const Component = as;

  const sizeClasses = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
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
