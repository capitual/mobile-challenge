import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Colors } from '../../assets/colors';
import { Fonts } from '../../assets/fonts/fonts';

export const Container = styled.View`
  flex: 1;

  padding-top: ${RFValue(80)}px;
  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;
  padding-bottom: ${RFValue(20)}px;

  background-color: ${Colors.BLACK_100};
`;

export const Title = styled.Text`
  font-family: ${Fonts.INTER_BOLD};
  font-size: ${RFValue(30)}px;

  color: ${Colors.WHITE_100};

  margin-bottom: ${RFValue(24)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${Fonts.INTER_MEDIUM};
  font-size: ${RFValue(24)}px;
  color: ${Colors.WHITE_100};

  margin-top: ${RFValue(42)}px;
  margin-bottom: ${RFValue(24)}px;
`;

export const Separator = styled.View`
  height: ${RFValue(16)}px;
  background-color: transparent;
`;
