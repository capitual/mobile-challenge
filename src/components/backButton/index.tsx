import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import ArrowBackIcon from '../../assets/icons/ArrowBack.svg';
import { Container } from './styles';

type BackButtonProps = TouchableOpacityProps;

function BackButton({ ...rest }: BackButtonProps) {
  return (
    <Container {...rest}>
      <ArrowBackIcon width={24} height={24} />
    </Container>
  );
}

export default BackButton;
