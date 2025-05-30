import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

interface PresentationHeaderProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex items-center justify-between px-3 sm:px-6 py-2 bg-brand-blue text-white">
      <div className="flex items-center flex-shrink-0">
        <Logo type="ldr" className="w-20 h-8 sm:w-full sm:h-full" />
      </div>
      <div className="text-xs sm:text-sm text-white/80 px-2">
        <span className="hidden sm:inline">Slide </span>
        {currentSlide + 1}/{totalSlides}
      </div>
      <div className="flex gap-1 sm:gap-2 flex-shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="text-white hover:bg-white/20 w-8 h-8 sm:w-10 sm:h-10"
        >
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="text-white hover:bg-white/20 w-8 h-8 sm:w-10 sm:h-10"
        >
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PresentationHeader;
