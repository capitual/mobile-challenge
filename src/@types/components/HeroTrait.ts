import React from 'react';
import { SvgProps } from 'react-native-svg';

export interface HeroTraitProps {
  value: string;
  icon: React.FC<SvgProps>;
}
