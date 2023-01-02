import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Colors } from '../../assets/colors';
import { Fonts } from '../../assets/fonts/fonts';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(67)}px;

  background-color: ${Colors.DARKGRAY_100};
  border-radius: 10px;

  padding: ${RFValue(8)}px ${RFValue(10)}px;
`;

export const ImageWrapper = styled.View`
  background-color: #fff;

  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  border-radius: ${RFValue(10)}px;
  overflow: hidden;

  margin-right: ${RFValue(10)}px;
`;

export const HeroImage = styled.Image`
  flex: 1;
`;

export const InformationWrapper = styled.View`
  flex: 1;

  justify-content: space-evenly;
  align-items: flex-start;
`;

export const HeroName = styled.Text`
  font-family: ${Fonts.INTER_BOLD};
  font-size: ${RFValue(16)}px;

  color: ${Colors.WHITE_100};
`;

export const HeroRealName = styled.Text`
  font-family: ${Fonts.INTER_MEDIUM};
  font-size: ${RFValue(12)}px;

  color: ${Colors.WHITE_100};
`;

export const IconWrapper = styled.View`
  justify-content: center;
`;
