
import React from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  content: React.ReactNode;
  background?: string;
  className?: string;
  status: 'enter' | 'current' | 'exit';
}

const Slide: React.FC<SlideProps> = ({ 
  content, 
  background = 'bg-white', 
  className = '',
  status
}) => {
  // Class for slide transitions
  const slideClass = cn(
    "slide-transition w-full h-full",
    status === 'exit' && "slide-exit",
    status === 'enter' && "slide-enter",
    status === 'current' && "slide-current",
    className
  );

  return (
    <div className={cn("absolute inset-0", background)}>
      <div className={slideClass}>
        {content}
      </div>
    </div>
  );
};

export default Slide;
