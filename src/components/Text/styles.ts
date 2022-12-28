import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextProps } from '../../@types';
import { Colors, Typography } from '../../config';

export const Component = styled.Text<TextProps>`
  margin-top: ${({ marginTop }) => RFValue(marginTop || 0)}px;
  margin-bottom: ${({ marginBottom }) => RFValue(marginBottom || 0)}px;

  font-size: ${({ fontSize }) => RFValue(fontSize || 16)}px;
  font-family: ${({ fontFamily }) => fontFamily || Typography.INTER_REGULAR};

  ${({ lineHeight }) => lineHeight && css`
    line-height: ${RFValue(lineHeight)}px;
  `};

  text-align: ${({ textAlign }) => textAlign || 'left'};

  color: ${({ color }) => color || Colors.WHITE};
`;
