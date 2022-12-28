import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { HeroTraitProps } from '../../@types/components';
import { Colors, Typography } from '../../config';
import { Text } from '../Text';
import { Wrapper } from './styles';

export function HeroTrait({ icon: Icon, value }: HeroTraitProps) {
  return (
    <Wrapper>
      <Icon
        width={RFValue(22)}
        height={RFValue(22)}
        fill={Colors.WHITE}
      />

      <Text
        marginTop={8}
        fontSize={12}
        fontFamily={Typography.INTER_MEDIUM}
        lineHeight={16}
        textAlign="center"
      >
        {value}
      </Text>
    </Wrapper>
  );
}
