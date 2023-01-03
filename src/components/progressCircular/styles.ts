import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Colors } from '../../assets/colors';
import { Fonts } from '../../assets/fonts/fonts';

export const ProgressContainer = styled.View`
  justify-content: center;
  align-items: center;

  margin-right: ${RFValue(26)}px;
`;

export const ProgressTitle = styled.Text`
  font-family: ${Fonts.INTER_MEDIUM};
  font-size: ${RFValue(12)}px;

  color: ${Colors.WHITE_100};

  margin-top: ${RFValue(16)}px;
`;
