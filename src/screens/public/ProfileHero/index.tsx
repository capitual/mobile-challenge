import React, { useState, useCallback, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Skeleton } from 'native-base';
import {
  Button,
  CardHero,
  InputSearch,
  Text,
} from '../../../components';
import { Colors, SearchIcon, Typography } from '../../../config';
import { ALL_HEROES } from '../../../graphql/queries';
import {
  Container,
  Content,
  HeaderContainer,
  ListEmptyWrapper,
  HeroesList,
} from './styles';
import { AllHeroes, Hero, ProfileHeroRenderItem } from '../../../@types';

export function ProfileHero() {
  const { data, error, loading } = useQuery<AllHeroes>(ALL_HEROES);

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState<string>('');
  const [itemsForViewing, setItemsForViewing] = useState<number>(10);
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);

  const [heroes, setHeroes] = useState<Hero[]>([]);

  function filterHeroes(): Hero[] {
    if (!data || error) return [];
    if (!searchText) return data.all;

    setItemsForViewing(10);

    return data.all
      .filter((hero) => hero.name
        .trim()
        .toLocaleLowerCase()
        .includes(searchText.trim().toLocaleLowerCase()));
  }

  function onCloseInput(): void {
    setSearchText('');

    if (data) {
      setHeroes(data.all);
    } else {
      setHeroes([]);
    }
  }

  function onSearchInput(): void {
    Keyboard.dismiss();
    const allHeroes = filterHeroes();

    setHeroes(allHeroes);
    setInputIsFocused(false);
  }

  function onSubmitEditing(): void {
    const allHeroes = filterHeroes();

    setInputIsFocused(false);
    setHeroes(allHeroes);
  }

  const keyExtractor = useCallback((item: Hero) => item.id.toString(), []);

  const renderItem = useCallback(({ item }: ProfileHeroRenderItem) => (
    <CardHero
      onPress={() => navigation.navigate(
        'ProfileHeroDetails' as never,
        { ...item } as never,
      )}
      fullName={item.biography.fullName}
      name={item.name}
      image={item.images.sm}
    />
  ), [navigation]);

  useEffect(() => {
    if (data && !loading) {
      setHeroes(data.all);
    } else {
      setHeroes([]);
    }
  }, [data, loading]);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <HeaderContainer>
            <Skeleton
              width="full"
              height="10"
              rounded="md"
              startColor={Colors.DARK_GRAY}
              endColor={Colors.GRAY}
              isLoaded={!loading}
            >
              <Text fontSize={30} fontFamily={Typography.INTER_BOLD} lineHeight={36}>
                ProfileHero
              </Text>
            </Skeleton>
          </HeaderContainer>

          <Skeleton
            width="full"
            height="12"
            rounded="md"
            startColor={Colors.DARK_GRAY}
            endColor={Colors.GRAY}
            isLoaded={!loading}
          >
            <InputSearch
              value={searchText}
              onClose={() => onCloseInput()}
              onSearch={() => onSearchInput()}
              onFocus={() => setInputIsFocused(true)}
              onBlur={() => setInputIsFocused(false)}
              onSubmitEditing={() => onSubmitEditing()}
              onChangeText={(text) => setSearchText(text)}
              isFocused={inputIsFocused}
              keyboardType="web-search"
              placeholder="Search a Super Hero"
              returnKeyType="go"
              textContentType="nickname"
            />
          </Skeleton>

          {heroes.length !== 0 && (
            <Text
              marginTop={42}
              marginBottom={24}
              fontSize={24}
              fontFamily={Typography.INTER_MEDIUM}
              lineHeight={32}
            >
              {data && data.all.length !== heroes.length
                ? `Found ${heroes.length} ${heroes.length === 1 ? 'result' : 'results'}`
                : 'Leaderboard'}
            </Text>
          )}

          <Skeleton
            width="full"
            height="full"
            rounded="md"
            startColor={Colors.DARK_GRAY}
            endColor={Colors.GRAY}
            isLoaded={!loading}
            marginTop={RFValue(40)}
          >
            <HeroesList
              data={heroes.slice(0, itemsForViewing)}
              renderItem={renderItem}
              itemHeight={RFValue(80)}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              renderEmpty={() => (
                <ListEmptyWrapper>
                  <SearchIcon
                    width={RFValue(45)}
                    height={RFValue(47)}
                    stroke={Colors.DARK_GRAY}
                  />

                  <Text
                    marginTop={24}
                    marginBottom={24}
                    fontSize={24}
                    fontFamily={Typography.INTER_MEDIUM}
                    lineHeight={32}
                    textAlign="center"
                  >
                    No results Found
                  </Text>

                  <Text
                    marginTop={16}
                    fontSize={16}
                    fontFamily={Typography.INTER_REGULAR}
                    lineHeight={21}
                    textAlign="center"
                  >
                    We couldn&apos;t find you searched for. Try search again.
                  </Text>
                </ListEmptyWrapper>
              )}
              ListFooterComponent={(heroes.length > 10 && itemsForViewing <= heroes.length ? (
                <Button onPress={() => setItemsForViewing(itemsForViewing + 10)}>
                  <Text
                    fontSize={12}
                    fontFamily={Typography.INTER_MEDIUM}
                    lineHeight={16}
                  >
                    See more
                  </Text>
                </Button>
              ) : null
              )}
              footerHeight={RFValue(42)}
            />
          </Skeleton>
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
}
