import React, { useEffect, useState } from 'react';

import { FlashList } from '@shopify/flash-list';
import EmptyList from '../../components/emptyList';
import HeroCard from '../../components/heroCard';
import Search from '../../components/input/search';
import useHeroes from '../../hooks/useHeroes';

import { Container, Separator, Subtitle, Title } from './styles';
import { HeroProps } from '../../@types';

function ProfileHeroDashScreen() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredList, setFilteredlist] = useState<HeroProps[]>([]);

  const { data, error, loading } = useHeroes();

  function filterHeroByName(name: string) {
    const herolist = data.filter((hero) =>
      hero.name.toLowerCase().includes(name.toLowerCase()),
    );
    setFilteredlist(herolist);
  }

  useEffect(() => {
    filterHeroByName(searchInput);
  }, [searchInput]);

  return (
    <Container>
      <Title>ProfileHero</Title>
      <Search
        onChangeText={setSearchInput}
        value={searchInput}
        autoCapitalize="none"
      />
      <Subtitle>Leaderboard</Subtitle>
      <FlashList
        data={filteredList}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <HeroCard
            name={item.name}
            slug={item.biography.fullName}
            imageURI={item.images.sm}
          />
        )}
        estimatedItemSize={70}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default ProfileHeroDashScreen;
