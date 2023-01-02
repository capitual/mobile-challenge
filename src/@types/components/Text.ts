import React from 'react';
import { TextProps as IText } from 'react-native';
import { Colors, Typography } from '../../config';

export interface TextProps extends IText {
  children: React.ReactNode;
  fontFamily?: Typography;
  color?: Colors;
  fontSize?: number;
  lineHeight?: number;
  marginTop?: number;
  marginBottom?: number;
  textAlign?: string;
}
