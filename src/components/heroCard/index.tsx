import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import ArrowRightIcon from '../../assets/icons/ArrowRight.svg';

import {
  Container,
  HeroImage,
  HeroName,
  HeroRealName,
  IconWrapper,
  ImageWrapper,
  InformationWrapper,
} from './styles';

interface HeroCardProps extends TouchableOpacityProps {
  name: string;
  realName: string;
  imageURI: string;
}

function HeroCard({ name, realName, imageURI, ...rest }: HeroCardProps) {
  return (
    <Container {...rest}>
      <ImageWrapper>
        <HeroImage source={{ uri: imageURI }} />
      </ImageWrapper>
      <InformationWrapper>
        <HeroName>{name}</HeroName>
        <HeroRealName>{realName}</HeroRealName>
      </InformationWrapper>
      <IconWrapper>
        <ArrowRightIcon width={RFValue(16)} height={RFValue(16)} />
      </IconWrapper>
    </Container>
  );
}

export default HeroCard;
