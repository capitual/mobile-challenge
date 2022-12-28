import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../config';

export const Component = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(36)}px;

  justify-content: center;
  align-items: center;

  background-color: ${Colors.DARK_GRAY};

  border-radius: 8px;
`;
