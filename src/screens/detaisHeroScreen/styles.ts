import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Colors } from '../../assets/colors';
import { Fonts } from '../../assets/fonts/fonts';

export const Container = styled.ScrollView`
  flex: 1;

  background-color: ${Colors.BLACK_100};
`;

export const BackgroundImageContainer = styled.ImageBackground`
  width: 100%;
  height: ${RFValue(440)}px;
`;

export const LinearGradientWrapper = styled(LinearGradient)`
  flex: 1;

  padding-bottom: ${RFValue(60)}px;
  justify-content: space-between;
`;

export const BackButtonWrapper = styled.View`
  width: 100%;
  margin-top: ${RFValue(54)}px;
  margin-left: ${RFValue(20)}px;
`;

export const HeaderWrapper = styled.View`
  margin-left: ${RFValue(20)}px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${Fonts.INTER_BOLD};
  font-size: ${RFValue(48)}px;

  color: ${Colors.WHITE_100};
`;

export const HeaderSubtitle = styled.Text`
  font-family: ${Fonts.INTER_REGULAR};
  font-size: ${RFValue(16)}px;

  color: ${Colors.WHITE_100};
`;

export const InformationText = styled.Text`
  font-family: ${Fonts.INTER_REGULAR};
  font-size: ${RFValue(14)}px;

  color: ${Colors.GRAY_100};

  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;

  background-color: ${Colors.BLACK_100};
`;

export const DescriptionText = styled.Text`
  font-family: ${Fonts.INTER_REGULAR};
  font-size: ${RFValue(14)}px;

  color: ${Colors.GRAY_100};

  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;

  margin-top: ${RFValue(30)}px;
`;

export const ListProgressContainer = styled.ScrollView`
  margin-top: ${RFValue(30)}px;

  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
`;
