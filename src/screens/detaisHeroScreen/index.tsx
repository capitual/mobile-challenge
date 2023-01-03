/* eslint-disable react/jsx-one-expression-per-line */
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../../assets/colors';

import BackButton from '../../components/backButton';
import HeroCaracteristicsDetails from '../../components/heroCaracteristicsDetails';
import HeroDetails from '../../components/heroDetails';
import ProgressCircular from '../../components/progressCircular';

import useHero from '../../hooks/useHero';

import {
  BackButtonWrapper,
  BackgroundImageContainer,
  Container,
  DescriptionText,
  HeaderSubtitle,
  HeaderTitle,
  HeaderWrapper,
  LinearGradientWrapper,
  ListProgressContainer,
} from './styles';

function DetailsHeroScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params;

  const { data, error, loading } = useHero(id);

  return loading ? (
    <Container>
      <ActivityIndicator size="large" color={Colors.WHITE_100} />
    </Container>
  ) : (
    <Container>
      <BackgroundImageContainer source={{ uri: data?.images.lg }}>
        <LinearGradientWrapper colors={['rgba(24, 26, 32, 0)', '#181A20']}>
          <BackButtonWrapper>
            <BackButton onPress={() => navigation.goBack()} />
          </BackButtonWrapper>
          <HeaderWrapper>
            <HeaderSubtitle>{data?.biography.fullName}</HeaderSubtitle>
            <HeaderTitle>{data?.name}</HeaderTitle>
          </HeaderWrapper>
        </LinearGradientWrapper>
      </BackgroundImageContainer>

      <HeroCaracteristicsDetails
        height={data?.appearance.height[1]}
        weight={data?.appearance.weight[1]}
        alignment={data?.biography.alignment}
        race={data?.appearance.race}
      />

      <DescriptionText>
        {data?.name}({data?.biography.fullName}) is a{' '}
        {data?.biography.publisher} character who first appeared in
        {data?.biography.firstAppearance}. Is based on {data?.work.base}.
      </DescriptionText>

      <DescriptionText>
        Among his connections, {data?.name} has affiliation in the group(s):
        {data?.connections.groupAffiliation}.
      </DescriptionText>

      <ListProgressContainer horizontal showsHorizontalScrollIndicator={false}>
        <ProgressCircular
          value={data?.powerstats.intelligence}
          title="Intelligence"
        />
        <ProgressCircular value={data?.powerstats.strength} title="Strength" />
        <ProgressCircular value={data?.powerstats.speed} title="Speed" />
        <ProgressCircular
          value={data?.powerstats.durability}
          title="Durability"
        />
        <ProgressCircular value={data?.powerstats.power} title="Power" />
        <ProgressCircular value={data?.powerstats.combat} title="Combat" />
      </ListProgressContainer>

      <HeroDetails
        aliases={data?.biography.aliases}
        alterEgos={data?.biography.alterEgos}
        relatives={data?.connections.relatives}
      />
    </Container>
  );
}

export default DetailsHeroScreen;
