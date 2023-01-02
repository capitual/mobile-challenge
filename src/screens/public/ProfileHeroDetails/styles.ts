import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Colors } from '../../../config';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,

    width: '100%',

    paddingBottom: RFValue(44),
  },
})`
  flex-grow: 1;

  background-color: ${Colors.BLACK};
`;

export const HeroBackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: ${RFPercentage(60)}px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', Colors.BLACK],
  locations: [0.2, 1],
  start: {
    x: 0.5,
    y: 0.5,
  },
})`
  flex: 1;

  justify-content: space-between;
`;

export const GoBackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: RFValue(5),
    bottom: RFValue(5),
    left: RFValue(5),
    right: RFValue(5),
  },
})`
  width: ${RFValue(54)}px;
  height: ${RFValue(54)}px;

  justify-content: center;
  align-items: center;

  margin-top: ${RFValue(30)}px;
  margin-left: ${RFValue(20)}px;

  background-color: ${Colors.WHITE_10};

  border-radius: 50px;
`;

export const HeroNameWrapper = styled.View`
  width: 100%;

  padding: 0 ${RFValue(20)}px;
`;

export const HeroCharacteristicsWrapper = styled.View`
  width: 100%;


  margin-top: ${RFValue(48)}px;

  padding: 0 ${RFValue(20)}px;
`;

export const CircularProgressWrapper = styled.ScrollView.attrs({
  horizontal: true,
})`
  margin-top: ${RFValue(48)}px;
`;

export const HeroTraitWrapper = styled.View`
  flex-direction: row;

  width: 100%;

  justify-content: space-between;

  margin-bottom: ${RFValue(40)}px;
`;

export const LoadingWrapper = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: Colors.GRAY,
  size: 'large',
})``;
