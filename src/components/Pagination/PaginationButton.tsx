import React from 'react';

import { StyleSheet, Text } from 'react-native';

import {
  RectButton,
  RectButtonProps,
} from 'react-native-gesture-handler';

import colors from '../../styles/colors';

interface PaginationButtonProps extends RectButtonProps {
  pageNumber: number;
  isCurrent?: boolean;
  onPageChange?: (page: number) => void;
}

export function PaginationButton({
  pageNumber,
  isCurrent = false,
  ...rest
}: PaginationButtonProps) {
  if (isCurrent) {
    return (
      <RectButton
        style={styles.currentButton}
        {...rest}
      >
        <Text style={styles.buttonText}>
          {pageNumber}
        </Text>
      </RectButton>
    );
  }

  return (
    <RectButton
      style={styles.button}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {pageNumber}
      </Text>

    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  currentButton: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light_purple,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonText: {
    fontSize: 12,
    color: colors.button_text,
  },
});
