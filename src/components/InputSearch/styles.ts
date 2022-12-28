import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors, Typography } from '../../config';

export const InputContainer = styled.View`
  flex-direction: row;

  width: 100%;
  height: ${RFValue(50)}px;

  justify-content: center;
  align-items: center;

  padding: ${RFValue(0)}px ${RFValue(16)}px;

  background-color: ${Colors.DARK_GRAY};

  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: RFValue(15),
    bottom: RFValue(15),
    left: RFValue(15),
    right: RFValue(15),
  },
})`
  width: 5%;

  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 90%;

  padding: 0 ${RFValue(14)}px;

  font-size: ${RFValue(14)}px;
  font-family: ${Typography.INTER_MEDIUM};

  line-height: ${RFValue(19)}px;

  color: ${Colors.GRAY};
`;
