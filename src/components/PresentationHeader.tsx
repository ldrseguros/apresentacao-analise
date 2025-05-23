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
    <div className="flex items-center justify-between px-6 py-2 bg-brand-blue text-white">
      <div className="flex items-center">
        <Logo type="ldr" className="w-full h-full" />
      </div>
      <div className="text-sm text-white/80">
        Slide {currentSlide + 1} de {totalSlides}
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="text-white hover:bg-white/20"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PresentationHeader;
