import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { CardHeroProps } from '../../@types';
import { Colors, SimpleArrowRightIcon, Typography } from '../../config';
import { Text } from '../Text';
import {
  ArrowRightWrapper,
  Wrapper,
  Image,
  ImageContainer,
  InformationContainer,
  NameHeroWrapper,
} from './styles';

export function CardHero({
  fullName,
  image,
  name,
  ...props
}: CardHeroProps) {
  return (
    <Wrapper {...props} activeOpacity={0.75}>
      <InformationContainer>
        <ImageContainer>
          <Image source={{ uri: image }} />
        </ImageContainer>

        <NameHeroWrapper>
          <Text
            fontSize={16}
            fontFamily={Typography.INTER_BOLD}
            lineHeight={19}
            color={Colors.WHITE}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name}
          </Text>

          <Text
            marginTop={4}
            fontSize={12}
            fontFamily={Typography.INTER_MEDIUM}
            lineHeight={16}
            color={Colors.GRAY}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {fullName}
          </Text>
        </NameHeroWrapper>
      </InformationContainer>

      <ArrowRightWrapper>
        <SimpleArrowRightIcon
          width={RFValue(16)}
          height={RFValue(16)}
          fill={Colors.WHITE_10}
        />
      </ArrowRightWrapper>
    </Wrapper>
  );
}
