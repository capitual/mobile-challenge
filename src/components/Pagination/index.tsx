import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { PaginationButton } from './PaginationButton';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface PaginationProps {
  totalCountRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export default function Pagination({
  totalCountRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  // Calculate last page
  const lastPage = Math.ceil(totalCountRegisters / registersPerPage);

  // Calculate previous pages to show
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  // Calculate next pages to show
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];

  return (
    <View style={styles.container}>
      <Text style={styles.paginationInfo}>
        {((currentPage - 1) * (registersPerPage)) + 1}
        {' '}
        -
        {' '}
        {((currentPage) * registersPerPage) < totalCountRegisters
          ? ((currentPage) * registersPerPage)
          : totalCountRegisters}
        {' '}
        of
        {' '}
        {totalCountRegisters}
      </Text>

      <View style={styles.paginationButtons}>
        {currentPage > (1 + siblingsCount) && (
        <>
          <PaginationButton pageNumber={1} onPress={() => onPageChange(1)} />

          {currentPage > (2 + siblingsCount) && (
            <Text style={styles.dots}>...</Text>
          ) }
        </>
        )}

        {previousPages.length > 0
          && previousPages.map((page) => (
            <PaginationButton
              key={page}
              pageNumber={page}
              onPress={() => onPageChange(page)}
            />
          ))}

        <PaginationButton
          pageNumber={currentPage}
          isCurrent
          onPress={() => onPageChange(currentPage)}
        />

        {nextPages.length > 0
          && nextPages.map((page) => (
            <PaginationButton
              key={page}
              pageNumber={page}
              onPress={() => onPageChange(page)}
            />
          ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text style={styles.dots}>...</Text>
            ) }

            <PaginationButton
              pageNumber={lastPage}
              onPress={() => onPageChange(lastPage)}
            />
          </>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  paginationInfo: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: colors.text_secondary,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  paginationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dots: {
    color: colors.text_secondary,
    textAlign: 'center',
    marginHorizontal: 4,
  },
});
