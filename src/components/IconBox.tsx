
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  className = '',
  iconClassName = ''
}) => {
  return (
    <div className={cn("flex flex-col items-center text-center p-4 animate-fade-in", className)}>
      <div className={cn("w-16 h-16 rounded-lg bg-brand-blue bg-opacity-10 flex items-center justify-center mb-3", iconClassName)}>
        <Icon className="w-8 h-8 text-brand-blue" />
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm">{description}</p>
      )}
    </div>
  );
};

export default IconBox;
