import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { InputSearchProps } from '../../@types';
import { CloseIcon, Colors, SearchIcon } from '../../config';
import { Input, Wrapper, Button } from './styles';

export function InputSearch({
  value,
  onClose,
  onSearch,
  isFocused,
  ...props
}: InputSearchProps) {
  return (
    <Wrapper>
      <Button onPress={onSearch} activeOpacity={0.85}>
        <SearchIcon width={RFValue(14)} height={RFValue(14)} stroke={Colors.GRAY} />
      </Button>

      <Input
        value={value}
        cursorColor={Colors.GRAY}
        placeholderTextColor={Colors.GRAY}
        {...props}
      />

      {((isFocused && value) || value) && (
        <Button onPress={onClose} activeOpacity={0.85}>
          <CloseIcon width={RFValue(16)} height={RFValue(16)} />
        </Button>
      )}
    </Wrapper>
  );
}
