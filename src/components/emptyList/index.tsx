import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import SearchIcon from '../../assets/icons/Search.svg';
import { Container, IconWrapper, Subtitle, Title } from './styles';

function EmptyList() {
  return (
    <Container>
      <IconWrapper>
        <SearchIcon width={RFValue(64)} height={RFValue(64)} />
      </IconWrapper>
      <Title>No results Found</Title>
      <Subtitle>We could not find you searched for. Try search again</Subtitle>
    </Container>
  );
}

export default EmptyList;
