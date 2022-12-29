import styled from 'styled-components/native';
import { Platform, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../../config/colors';
import { Hero } from '../../../@types';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;

  width: 100%;

  
  padding: ${RFValue(0)}px ${RFValue(20)}px ${RFValue(24)}px;
  
  background-color: ${Colors.BLACK};
  `;

export const Content = styled.View`
  flex: 1;
  
  margin-bottom: ${RFValue(16)}px;
`;

export const HeaderContainer = styled.View`
  width: 100%;

  padding: ${RFValue(40)}px 0 ${RFValue(20)}px;
`;

export const HeroesList = styled(FlatList as new () => FlatList<Hero>).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
  ListFooterComponentStyle: {
    marginTop: RFValue(6),
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const ListEmptyWrapper = styled.View`
  width: 100%;

  align-items: center;

  margin-top: ${RFValue(42)}px;

  padding: 0 ${RFValue(20)}px;
`;
