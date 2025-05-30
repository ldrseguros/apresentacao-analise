import React from "react";
import { cn } from "@/lib/utils";

interface SlideConnectorProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  style?: "solid" | "dashed" | "dotted" | "arrow";
}

const SlideConnector: React.FC<SlideConnectorProps> = ({
  className = "",
  direction = "horizontal",
  style = "solid",
}) => {
  const baseClasses = "bg-brand-blue";

  if (direction === "horizontal") {
    if (style === "arrow") {
      return (
        <div
          className={cn(
            "relative h-0.5 w-full my-3 sm:my-6 flex items-center",
            className
          )}
        >
          <div className="absolute w-full h-0.5 bg-brand-blue"></div>
          <div className="absolute right-0 border-t-6 sm:border-t-8 border-r-0 border-b-6 sm:border-b-8 border-l-8 sm:border-l-12 border-t-transparent border-b-transparent border-l-brand-blue"></div>
        </div>
      );
    }

    return (
      <div
        className={cn(
          "h-0.5 w-full my-3 sm:my-6",
          baseClasses,
          style === "dashed" && "border-dashed",
          style === "dotted" && "border-dotted",
          className
        )}
      />
    );
  }

  if (style === "arrow") {
    return (
      <div
        className={cn(
          "relative w-0.5 h-full mx-auto my-1 sm:my-2 flex flex-col items-center",
          className
        )}
      >
        <div className="absolute h-full w-0.5 bg-brand-blue"></div>
        <div className="absolute bottom-0 border-l-6 sm:border-l-8 border-r-6 sm:border-r-8 border-t-8 sm:border-t-12 border-l-transparent border-r-transparent border-t-brand-blue"></div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-0.5 h-full mx-auto my-1 sm:my-2",
        baseClasses,
        style === "dashed" && "border-dashed",
        style === "dotted" && "border-dotted",
        className
      )}
    />
  );
};

export default SlideConnector;
