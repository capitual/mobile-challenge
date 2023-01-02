import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';
import { Colors } from '../../../assets/colors';
import { Fonts } from '../../../assets/fonts/fonts';

export const Container = styled.View`
  flex-direction: row;

  width: 100%;
  height: ${RFValue(50)}px;
  padding-left: ${RFValue(10)}px;
  padding-right: ${RFValue(10)}px;

  background-color: ${Colors.DARKGRAY_100};

  border-radius: 8px;
  justify-content: space-between;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  flex: 1;

  margin-left: ${RFValue(8)}px;
  margin-right: ${RFValue(8)}px;

  font-size: ${RFValue(14)}px;
  font-family: ${Fonts.INTER_REGULAR};
  color: ${Colors.WHITE_100};
`;

export const CancelIconWrapper = styled.View``;
