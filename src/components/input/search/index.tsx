/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';

import { Container, IconWrapper, SearchInput } from './styles';

import SearchIcon from '../../../assets/icons/Search.svg';
import CloseIcon from '../../../assets/icons/Close.svg';

type SearchProps = TextInputProps;

function Search({ ...rest }: SearchProps) {
  return (
    <Container>
      <IconWrapper>
        <SearchIcon width={RFValue(24)} height={RFValue(24)} />
      </IconWrapper>
      <SearchInput {...rest} />
      <IconWrapper>
        <CloseIcon width={RFValue(16)} height={RFValue(16)} />
      </IconWrapper>
    </Container>
  );
}

export default Search;
