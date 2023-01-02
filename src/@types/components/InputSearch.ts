import { TextInputProps } from 'react-native';

export interface InputSearchProps extends TextInputProps {
  onSearch(): void;
  onClose(): void;
  isFocused: boolean;
}
