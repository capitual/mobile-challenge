import React, { useState } from 'react';
import Search from '../../components/input/search';
import { Container, Title } from './styles';

function ProfileHeroDashScreen() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Container>
      <Title>ProfileHero</Title>
      <Search onChangeText={setSearchInput} value={searchInput} />
    </Container>
  );
}

export default ProfileHeroDashScreen;
