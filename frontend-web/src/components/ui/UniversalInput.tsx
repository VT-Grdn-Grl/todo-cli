
import React from 'react';
import { Input as ShadcnInput } from '@/components/ui/input';

interface UniversalInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
  testID?: string;
  style?: string;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
}

const UniversalInput = ({
  value,
  onChangeText,
  placeholder,
  disabled = false,
  testID,
  style = '',
  autoFocus = false,
  onSubmitEditing
}: UniversalInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmitEditing) {
      onSubmitEditing();
    }
  };

  return (
    <ShadcnInput
      type="text"
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
      disabled={disabled}
      autoFocus={autoFocus}
      data-testid={testID}
      className={`text-lg py-6 px-4 border-2 border-gray-200 focus:border-blue-500 transition-colors ${style}`}
    />
  );
};

export default UniversalInput;
