import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

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
} from './styles';
import { Hero } from '../../../@types';

export function ProfileHeroDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as Hero;

  return (
    <Container>
      <HeroBackgroundImage
        source={{ uri: params.images.lg }}
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
            {params.biography.fullName && (
              <Text
                marginBottom={8}
                fontSize={16}
                fontFamily={Typography.INTER_REGULAR}
                lineHeight={21}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {params.biography.fullName}
              </Text>
            )}

            <Text
              fontSize={48}
              fontFamily={Typography.INTER_BOLD}
              lineHeight={57}
            >
              {params.name}
            </Text>
          </HeroNameWrapper>
        </Gradient>
      </HeroBackgroundImage>

      <HeroCharacteristicsWrapper>
        <HeroTraitWrapper>
          <HeroTrait icon={ScaleIcon} value={params.appearance.height[1]} />

          <HeroTrait icon={WeightIcon} value={params.appearance.weight[1]} />

          <HeroTrait icon={TwoFaceIcon} value={params.biography.alignment} />

          <HeroTrait icon={AlienIcon} value={params.appearance.race} />
        </HeroTraitWrapper>

        <Text
          fontSize={16}
          fontFamily={Typography.INTER_REGULAR}
          lineHeight={21}
          color={Colors.GRAY}
          textAlign="justify"
        >
          {params.name}
          {' '}
          {params.biography.fullName ? `(${params.biography.fullName}) ` : ' '}
          is a
          {' '}
          {params.biography.publisher}
          {' '}
          character who first appeared in
          &quot;
          {params.biography.firstAppearance}
          &quot;.
          {params.work.base !== '-' && ` Is based on ${params.work.base}.`}
        </Text>

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
          {params.name}
          {' '}
          has affiliation in the group(s):
          {' '}
          {params.connections.groupAffiliation}
          .
        </Text>

        <CircularProgressWrapper>
          <CircularProgress title="Intelligence" value={params.powerstats.intelligence} />

          <CircularProgress title="Strength" value={params.powerstats.strength} />

          <CircularProgress title="Speed" value={params.powerstats.speed} />

          <CircularProgress title="Durability" value={params.powerstats.durability} />

          <CircularProgress title="Power" value={params.powerstats.power} />

          <CircularProgress title="Combat" value={params.powerstats.combat} />
        </CircularProgressWrapper>

        <Text
          marginTop={48}
          fontSize={24}
          fontFamily={Typography.INTER_MEDIUM}
        >
          Details
        </Text>

        <HeroDetailRow title="Aliases" detail={params.biography.aliases.join(', ')} />

        <HeroDetailRow title="Alter Egos" detail={params.biography.alterEgos} />

        <HeroDetailRow title="Relatives" detail={params.connections.relatives} />
      </HeroCharacteristicsWrapper>
    </Container>
  );
}
