
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  className = '',
  animated = true
}) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className={cn("w-full bg-gray-200 h-1 rounded-full overflow-hidden", className)}>
      <div 
        className={cn(
          "bg-brand-yellow h-full rounded-full",
          animated && "progress-animation"
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
