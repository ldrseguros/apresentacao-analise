import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideIconProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
}

const SlideIcon: React.FC<SlideIconProps> = ({
  icon: Icon,
  className = "",
  size = "md",
  color = "text-brand-blue",
}) => {
  const sizeClasses = {
    sm: "w-6 h-6 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-12 sm:h-12",
    lg: "w-12 h-12 sm:w-16 sm:h-16",
    xl: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
  };

  return (
    <div className={cn("animate-fade-in", className)}>
      <Icon className={cn(sizeClasses[size], color)} />
    </div>
  );
};

export default SlideIcon;
