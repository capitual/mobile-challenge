import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Colors } from '../../assets/colors';
import { Fonts } from '../../assets/fonts/fonts';

export const Container = styled.View`
  flex-direction: row;

  width: 100%;
  height: ${RFValue(52)}px;

  background-color: ${Colors.BLACK_100};
`;

export const IconContainer = styled.View`
  flex: 1;

  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${Fonts.INTER_MEDIUM};

  color: ${Colors.WHITE_100};
`;
