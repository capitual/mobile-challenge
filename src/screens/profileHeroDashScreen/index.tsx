import { FlashList } from '@shopify/flash-list';
import React, { useState } from 'react';

import { mock } from '../../assets/mock';

import EmptyList from '../../components/emptyList';
import HeroCard from '../../components/heroCard';
import Search from '../../components/input/search';

import { Container, Separator, Subtitle, Title } from './styles';

function ProfileHeroDashScreen() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Container>
      <Title>ProfileHero</Title>
      <Search onChangeText={setSearchInput} value={searchInput} />
      <Subtitle>Leaderboard</Subtitle>
      <FlashList
        data={mock}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <HeroCard
            name={item.name}
            slug={item.realName}
            imageURI={item.imageURI}
          />
        )}
        estimatedItemSize={70}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default ProfileHeroDashScreen;
