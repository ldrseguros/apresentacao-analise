import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBoxProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
  iconClassName?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  title,
  description,
  className = "",
  iconClassName = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-2 xs:p-3 sm:p-4 animate-fade-in",
        className
      )}
    >
      <div
        className={cn(
          "w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-lg bg-brand-blue bg-opacity-10 flex items-center justify-center mb-2 sm:mb-3",
          iconClassName
        )}
      >
        <Icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-brand-blue" />
      </div>
      <h3 className="font-semibold text-sm xs:text-base sm:text-lg mb-1">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      )}
    </div>
  );
};

export default IconBox;
