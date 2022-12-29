import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';
import { Colors } from '../../config';

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;

  width: 100%;
  height: ${RFValue(67)}px;

  justify-content: space-between;

  margin-bottom: ${RFValue(16)}px;

  padding: ${RFValue(8)}px ${RFValue(10)}px;

  background-color: ${Colors.DARK_GRAY};

  border-radius: 10px;
`;

export const InformationContainer = styled.View`
  flex-direction: row;

  width: 90%;

  align-items: center;
`;

export const ArrowRightWrapper = styled.View`
  width: 10%;

  justify-content: center;
  align-items: flex-end;
`;

export const ImageContainer = styled.View`
  width: ${RFValue(50)}px;
  height: 100%;

  margin-right: ${RFValue(10)}px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
})`
  width: 100%;
  height: 100%;
  
  overflow: hidden;
  
  border-radius: 4px;
`;

export const NameHeroWrapper = styled.View``;
