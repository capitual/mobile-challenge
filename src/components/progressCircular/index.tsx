import React, { useEffect, useState } from 'react';

import CircularProgress from 'react-native-circular-progress-indicator';

import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../assets/colors';

import { ProgressContainer, ProgressTitle } from './styles';

interface ProgressCircularProps {
  value: number;
  title: string;
}

function ProgressCircular({ value, title }: ProgressCircularProps) {
  const [actualColor, setActualColor] = useState('');

  function handleColor() {
    if (value <= 15) {
      setActualColor(Colors.RED_100);
    }

    if (value >= 16 && value <= 49) {
      setActualColor(Colors.YELLOW_100);
    }

    if (value >= 50 && value <= 100) {
      setActualColor(Colors.GRENN_100);
    }
  }

  useEffect(() => {
    handleColor();
  }, []);

  return (
    <ProgressContainer>
      <CircularProgress
        value={value}
        radius={RFValue(26)}
        progressValueColor={Colors.WHITE_100}
        maxValue={100}
        titleColor={Colors.WHITE_100}
        inActiveStrokeOpacity={0.4}
        inActiveStrokeWidth={RFValue(2)}
        activeStrokeColor={actualColor}
        inActiveStrokeColor={actualColor}
        activeStrokeWidth={RFValue(2)}
      />
      <ProgressTitle>{title}</ProgressTitle>
    </ProgressContainer>
  );
}

export default ProgressCircular;
