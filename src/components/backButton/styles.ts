import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Colors } from '../../assets/colors';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  justify-content: center;
  align-items: center;

  border-radius: 28px;
  border-width: 4px;
  border-color: ${Colors.WHITE_100};

  background-color: transparent;
`;
