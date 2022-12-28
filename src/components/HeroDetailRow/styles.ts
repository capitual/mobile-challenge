import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { DetailsTextWrapperStyles } from '../../@types';

export const Row = styled.View`
  flex-direction: row;

  width: 100%;
`;

export const DetailTextWrapper = styled.View<DetailsTextWrapperStyles>`
  width: ${({ width }) => width};

  margin-top: ${RFValue(24)}px;
`;
