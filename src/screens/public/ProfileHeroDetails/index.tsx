import React from 'react';
import { useNavigation } from '@react-navigation/native';
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

export function ProfileHeroDetails() {
  const navigation = useNavigation();

  return (
    <Container>
      <HeroBackgroundImage
        source={{ uri: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/731-zoom.jpg' }}
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
            <Text
              marginBottom={8}
              fontSize={16}
              fontFamily={Typography.INTER_REGULAR}
              lineHeight={21}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Hunter Zolomon
            </Text>

            <Text
              fontSize={48}
              fontFamily={Typography.INTER_BOLD}
              lineHeight={57}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Zoom
            </Text>
          </HeroNameWrapper>
        </Gradient>
      </HeroBackgroundImage>

      <HeroCharacteristicsWrapper>
        <HeroTraitWrapper>
          <HeroTrait icon={ScaleIcon} value="1,85m" />

          <HeroTrait icon={WeightIcon} value="81 kg" />

          <HeroTrait icon={TwoFaceIcon} value="Bad" />

          <HeroTrait icon={AlienIcon} value="Human" />
        </HeroTraitWrapper>

        <Text
          fontSize={16}
          fontFamily={Typography.INTER_REGULAR}
          lineHeight={21}
          color={Colors.GRAY}
          textAlign="justify"
        >
          Zoom (Hunter Zolomon) is a DC Comics character who first appeared in
          &quot;Flash Secret Files #3&quot;. Is based on Keystone City, Kansas.

          Among his connections, Zoom has affiliation in the group(s): Secret
          Society of Super Villains, formerly Keystone Police Department, F.B.I..
        </Text>

        <CircularProgressWrapper>
          <CircularProgress title="Intelligence" value={50} />

          <CircularProgress title="Strength" value={10} />

          <CircularProgress title="Speed" value={100} />

          <CircularProgress title="Durability" value={28} />

          <CircularProgress title="Power" value={100} />

          <CircularProgress title="Combat" value={28} />
        </CircularProgressWrapper>

        <Text
          marginTop={48}
          fontSize={24}
          fontFamily={Typography.INTER_MEDIUM}
        >
          Details
        </Text>

        <HeroDetailRow title="Aliases" detail="-" />

        <HeroDetailRow title="Alter Egos" detail="No alter egos found." />

        <HeroDetailRow title="Relatives" detail="Ashley Zolomon (ex-wife)" />
      </HeroCharacteristicsWrapper>
    </Container>
  );
}
