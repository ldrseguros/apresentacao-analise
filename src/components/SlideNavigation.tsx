
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === 'left' ? 'left-2' : 'right-2'
      } z-20 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition`}
    >
      <Icon className="w-6 h-6 text-brand-blue" />
    </button>
  );
};

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({ 
  currentSlide, 
  totalSlides, 
  onPrev, 
  onNext 
}) => {
  return (
    <>
      {currentSlide > 0 && (
        <Arrow direction="left" onClick={onPrev} />
      )}
      {currentSlide < totalSlides - 1 && (
        <Arrow direction="right" onClick={onNext} />
      )}
    </>
  );
};

export default SlideNavigation;
