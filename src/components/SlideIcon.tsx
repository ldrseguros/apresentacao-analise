
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideIconProps {
  icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const SlideIcon: React.FC<SlideIconProps> = ({ 
  icon: Icon, 
  className = '',
  size = 'md',
  color = 'text-brand-blue'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  
  return (
    <div className={cn("animate-fade-in", className)}>
      <Icon className={cn(sizeClasses[size], color)} />
    </div>
  );
};

export default SlideIcon;
