import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useQuery } from '@apollo/client';
import {
  CircularProgress,
  HeroDetailRow,
  HeroTrait,
  Text,
} from '../../../components';
import {
  AlienIcon,
  ArrowLeftIcon,
  Colors,
  ScaleIcon,
  TwoFaceIcon,
  Typography,
  WeightIcon,
} from '../../../config';
import {
  CircularProgressWrapper,
  Container,
  GoBackButton,
  Gradient,
  HeroBackgroundImage,
  HeroCharacteristicsWrapper,
  HeroNameWrapper,
  HeroTraitWrapper,
  Loading,
  LoadingWrapper,
} from './styles';
import { GetHero, Hero, Heroes } from '../../../@types';
import { GET_HERO } from '../../../graphql/queries';

export function ProfileHeroDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const [hero, setHero] = useState<Hero>({} as Hero);

  const params = route.params as Heroes;

  const { data, error, loading } = useQuery<GetHero>(GET_HERO, {
    variables: { heroId: params.id.toString() },
  });

  useEffect(() => {
    const existsData = (data && data?.getHero) && !loading && !error;

    if (existsData) {
      setHero(data.getHero);
      return;
    }

    setHero({} as Hero);
  }, [data, loading, error]);

  if (error) {
    navigation.goBack();
    Alert.alert('Super Hero', 'Ops! Parece que não conseguimos buscar esse herói para você :(');
  }

  return (
    <Container>
      {hero?.id && !loading ? (
        <>
          <HeroBackgroundImage
            source={{ uri: hero.images.lg }}
          >
            <Gradient>
              <GoBackButton onPress={navigation.goBack} activeOpacity={0.75}>
                <ArrowLeftIcon
                  width={RFValue(20)}
                  height={RFValue(12)}
                  fill={Colors.WHITE}
                />
              </GoBackButton>

              <HeroNameWrapper>
                {hero.biography.fullName && (
                <Text
                  marginBottom={8}
                  fontSize={16}
                  fontFamily={Typography.INTER_REGULAR}
                  lineHeight={21}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {hero.biography.fullName}
                </Text>
                )}

                <Text
                  fontSize={48}
                  fontFamily={Typography.INTER_BOLD}
                  lineHeight={57}
                >
                  {hero.name}
                </Text>
              </HeroNameWrapper>
            </Gradient>
          </HeroBackgroundImage>

          <HeroCharacteristicsWrapper>
            <HeroTraitWrapper>
              <HeroTrait icon={ScaleIcon} value={hero.appearance.height[1]} />

              <HeroTrait icon={WeightIcon} value={hero.appearance.weight[1]} />

              <HeroTrait icon={TwoFaceIcon} value={hero.biography.alignment} />

              <HeroTrait icon={AlienIcon} value={hero.appearance.race || '-'} />
            </HeroTraitWrapper>

            <Text
              fontSize={16}
              fontFamily={Typography.INTER_REGULAR}
              lineHeight={21}
              color={Colors.GRAY}
              textAlign="justify"
            >
              {hero.name}
              {' '}
              {hero.biography.fullName ? `(${hero.biography.fullName}) ` : ' '}
              is a
              {' '}
              {hero.biography.publisher}
              {hero.biography.firstAppearance !== '-'
                ? ` character who first appeared in "${hero.biography.firstAppearance}".`
                : '.'}
              {hero.work.base !== '-' && ` Is based on ${hero.work.base}.`}
            </Text>

            {hero.connections.groupAffiliation !== '-' && (
            <Text
              marginTop={32}
              fontSize={16}
              fontFamily={Typography.INTER_REGULAR}
              lineHeight={21}
              color={Colors.GRAY}
              textAlign="justify"
            >
              Among his connections,
              {' '}
              {hero.name}
              {' '}
              has affiliation in the group(s):
              {' '}
              {hero.connections.groupAffiliation}
              .
            </Text>
            )}

            <CircularProgressWrapper>
              <CircularProgress title="Intelligence" value={hero.powerstats.intelligence} />

              <CircularProgress title="Strength" value={hero.powerstats.strength} />

              <CircularProgress title="Speed" value={hero.powerstats.speed} />

              <CircularProgress title="Durability" value={hero.powerstats.durability} />

              <CircularProgress title="Power" value={hero.powerstats.power} />

              <CircularProgress title="Combat" value={hero.powerstats.combat} />
            </CircularProgressWrapper>

            <Text
              marginTop={48}
              fontSize={24}
              fontFamily={Typography.INTER_MEDIUM}
            >
              Details
            </Text>

            <HeroDetailRow title="Aliases" detail={hero.biography.aliases.join(', ')} />

            <HeroDetailRow title="Alter Egos" detail={hero.biography.alterEgos} />

            <HeroDetailRow title="Relatives" detail={hero.connections.relatives} />
          </HeroCharacteristicsWrapper>
        </>
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </Container>
  );
}
