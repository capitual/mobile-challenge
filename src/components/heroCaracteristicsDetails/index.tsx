import React from 'react';
import { Container, IconContainer, Title } from './styles';

import HeightIcon from '../../assets/icons/Height.svg';
import WeightIcon from '../../assets/icons/Weight.svg';
import GoodbadIcon from '../../assets/icons/Goodbad.svg';
import RaceIcon from '../../assets/icons/Race.svg';

interface HeroCaracDetailsProp {
  height: string;
  weight: string;
  alignment: string;
  race: string;
}

function HeroCaracteristicsDetails({
  height,
  weight,
  alignment,
  race,
}: HeroCaracDetailsProp) {
  return (
    <Container>
      <IconContainer>
        <HeightIcon fill="#FFF" />
        <Title>{height}</Title>
      </IconContainer>
      <IconContainer>
        <WeightIcon fill="#FFF" />
        <Title>{weight}</Title>
      </IconContainer>
      <IconContainer>
        <GoodbadIcon fill="#FFF" />
        <Title>{alignment}</Title>
      </IconContainer>
      <IconContainer>
        <RaceIcon fill="#FFF" />
        <Title>{race}</Title>
      </IconContainer>
    </Container>
  );
}

export default HeroCaracteristicsDetails;
