import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FlashList } from '@shopify/flash-list';
import EmptyList from '../../components/emptyList';
import HeroCard from '../../components/heroCard';
import Search from '../../components/input/search';
import useHeroes from '../../hooks/useHeroes';

import { Container, Separator, Subtitle, Title } from './styles';
import { HeroProps } from '../../@types';
import { Colors } from '../../assets/colors';

function ProfileHeroDashScreen() {
  const [searchInput, setSearchInput] = useState('');

  const [filteredList, setFilteredlist] = useState<HeroProps[]>([]);

  const navigation = useNavigation();

  const { data, loading } = useHeroes();

  function filterHeroByName(name: string) {
    const herolist = data.filter((hero) =>
      hero.name.toLowerCase().includes(name.toLowerCase()),
    );
    setFilteredlist(herolist);
  }

  function handleOnPress(id: number) {
    navigation.navigate('detaisHeroScreen', { id });
  }

  function stateController() {
    if (filteredList.length > 0) {
      return filteredList;
    }

    if (filteredList.length <= 0 && searchInput.length > 0) {
      return filteredList;
    }

    return data;
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
        placeholder="Search a Super Hero"
        placeholderTextColor={Colors.GRAY_100}
      />
      {loading ? (
        <></>
      ) : (
        <>
          <Subtitle>Leaderboard</Subtitle>
          <FlashList
            data={stateController()}
            ListEmptyComponent={EmptyList}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => (
              <HeroCard
                name={item.name}
                slug={item.biography.fullName}
                imageURI={item.images.sm}
                onPress={() => handleOnPress(item.id)}
              />
            )}
            estimatedItemSize={70}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Container>
  );
}

export default ProfileHeroDashScreen;
