import React, { useState, useCallback } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AllHeroes, Hero, ProfileHeroRenderItem } from '../../../@types';
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
  HeroesList,
  ListEmptyWrapper,
} from './styles';

export function ProfileHero() {
  const { data, error, loading } = useQuery<AllHeroes>(ALL_HEROES);

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState<string>('');

  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);

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

  if (loading) return <Container />;

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <HeaderContainer>
            <Text fontSize={30} fontFamily={Typography.INTER_BOLD} lineHeight={36}>
              ProfileHero
            </Text>
          </HeaderContainer>

          <InputSearch
            value={searchText}
            onClose={() => setSearchText('')}
            onSearch={() => {
              Keyboard.dismiss();
              setInputIsFocused(false);
            }}
            onFocus={() => setInputIsFocused(true)}
            onBlur={() => setInputIsFocused(false)}
            isFocused={inputIsFocused}
            onChangeText={(text) => setSearchText(text)}
            keyboardType="web-search"
            placeholder="Search a Super Hero"
            returnKeyType="go"
            textContentType="nickname"
          />

          {data && data.all.length !== 0 && (
            <Text
              marginTop={42}
              marginBottom={24}
              fontSize={24}
              fontFamily={Typography.INTER_MEDIUM}
              lineHeight={32}
            >
              Leaderboard
            </Text>
          )}

          <HeroesList
            data={data?.all}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={(
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
            ListFooterComponent={data && data.all.length > 10 ? (
              <Button>
                <Text
                  fontSize={12}
                  fontFamily={Typography.INTER_MEDIUM}
                  lineHeight={16}
                >
                  See more
                </Text>
              </Button>
            ) : null}
          />
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
}
