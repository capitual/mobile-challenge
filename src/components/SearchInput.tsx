import React, { useState } from 'react';

import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../styles/colors';

interface SearchInputProps {
  setSearchName: React.Dispatch<React.SetStateAction<string>>
}

export function SearchInput({ setSearchName }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setSearchName(value);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          (isFocused || isFilled) && { borderColor: colors.teal },
        ]}
        placeholder="Search a SuperHero"
        placeholderTextColor={colors.input_placeholder}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChangeText={handleInputChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.input_border,
    fontSize: 16,
    color: colors.input_text,
    backgroundColor: colors.surface,
    padding: 10,
  },
});
