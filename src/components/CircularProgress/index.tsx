import React from 'react';
import Circular from 'react-native-circular-progress-indicator';
import { RFValue } from 'react-native-responsive-fontsize';

import { CircularProgressProps } from '../../@types';
import { Colors, Typography } from '../../config';
import { Text } from '../Text';

import { Wrapper } from './styles';

export function CircularProgress({ title, value }: CircularProgressProps) {
  function handleActiveStrokeColor(): Colors {
    if (value <= 15) return Colors.RED;
    if (value >= 16 && value < 50) return Colors.YELLOW;
    return Colors.GRENN;
  }

  const activeStrokeColor = handleActiveStrokeColor();

  return (
    <Wrapper>
      <Circular
        value={value}
        radius={RFValue(40)}
        duration={2000}
        delay={250}
        progressValueColor={Colors.WHITE}
        maxValue={100}
        titleColor={Colors.WHITE}
        activeStrokeColor={activeStrokeColor}
        inActiveStrokeColor={activeStrokeColor}
        inActiveStrokeOpacity={0.2}
        progressValueFontSize={RFValue(14)}
        titleStyle={{
          fontFamily: Typography.INTER_MEDIUM,
          lineHeight: RFValue(16),
        }}
        inActiveStrokeWidth={RFValue(2.5)}
        activeStrokeWidth={RFValue(2.5)}
      />

      <Text
        marginTop={16}
        fontSize={12}
        fontFamily={Typography.INTER_MEDIUM}
        lineHeight={16}
        textAlign="center"
      >
        {title}
      </Text>
    </Wrapper>
  );
}
