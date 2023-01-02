import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Colors } from '../../assets/colors';
import { Fonts } from '../../assets/fonts/fonts';

export const Container = styled.View`
  flex: 1;

  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${Fonts.INTER_MEDIUM};
  font-size: ${RFValue(24)}px;

  color: ${Colors.WHITE_100};

  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${Fonts.INTER_REGULAR};
  font-size: ${RFValue(16)}px;

  color: ${Colors.WHITE_100};

  text-align: center;
`;

export const IconWrapper = styled.View``;
