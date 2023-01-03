import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Colors } from '../../assets/colors';
import { Fonts } from '../../assets/fonts/fonts';

export const Container = styled.View`
  margin-top: ${RFValue(46)}px;
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${Fonts.INTER_MEDIUM};
  font-size: ${RFValue(24)}px;

  margin-bottom: ${RFValue(24)}px;

  color: ${Colors.WHITE_100};
`;

export const Subtitle = styled.Text`
  font-family: ${Fonts.INTER_MEDIUM};
  font-size: ${RFValue(14)}px;

  width: ${RFValue(90)}px;

  color: ${Colors.GRAY_100};
`;

export const SubtitleResult = styled.Text`
  flex: 1;

  font-family: ${Fonts.INTER_MEDIUM};
  font-size: ${RFValue(14)}px;

  color: ${Colors.WHITE_100};
`;

export const InformationWrapper = styled.View`
  flex-direction: row;

  margin-bottom: ${RFValue(16)}px;
`;
