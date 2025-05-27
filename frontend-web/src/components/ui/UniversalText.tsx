
import React from 'react';

interface UniversalTextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'body' | 'caption' | 'subtitle';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'success' | 'error';
  align?: 'left' | 'center' | 'right';
  testID?: string;
  style?: string;
}

const UniversalText = ({
  children,
  variant = 'body',
  weight = 'normal',
  color = 'default',
  align = 'left',
  testID,
  style = ''
}: UniversalTextProps) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'heading':
        return 'text-xl';
      case 'caption':
        return 'text-sm';
      case 'subtitle':
        return 'text-sm';
      default:
        return 'text-base';
    }
  };

  const getWeightClass = () => {
    switch (weight) {
      case 'medium':
        return 'font-medium';
      case 'semibold':
        return 'font-semibold';
      case 'bold':
        return 'font-bold';
      default:
        return 'font-normal';
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'muted':
        return 'text-gray-500';
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-800';
    }
  };

  const getAlignClass = () => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  const Element = variant === 'heading' ? 'h2' : 'p';

  return (
    <Element
      data-testid={testID}
      className={`${getVariantClass()} ${getWeightClass()} ${getColorClass()} ${getAlignClass()} ${style}`}
    >
      {children}
    </Element>
  );
};

export default UniversalText;
