
import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';

interface UniversalButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
  testID?: string;
  style?: string;
}

const UniversalButton = ({
  onPress,
  title,
  variant = 'primary',
  size = 'default',
  disabled = false,
  icon,
  testID,
  style = ''
}: UniversalButtonProps) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'ghost':
        return 'opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600';
      case 'outline':
        return 'border border-gray-300 bg-transparent hover:bg-gray-50';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <ShadcnButton
      onClick={onPress}
      disabled={disabled}
      data-testid={testID}
      className={`${getVariantClass()} ${getSizeClass()} font-medium rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${style}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </ShadcnButton>
  );
};

export default UniversalButton;
