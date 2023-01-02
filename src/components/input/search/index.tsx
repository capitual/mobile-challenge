/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';

import { Container, IconWrapper, SearchInput } from './styles';

import SearchIcon from '../../../assets/icons/Search.svg';
import CloseIcon from '../../../assets/icons/Close.svg';

function Search({ ...rest }) {
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
