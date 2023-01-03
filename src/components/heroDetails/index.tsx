import React from 'react';
import {
  Container,
  InformationWrapper,
  Subtitle,
  SubtitleResult,
  Title,
} from './styles';

interface HeroDetailsProps {
  aliases: string;
  alterEgos: string;
  relatives: string;
}

function HeroDetails({ aliases, alterEgos, relatives }: HeroDetailsProps) {
  return (
    <Container>
      <Title>Details</Title>
      <InformationWrapper>
        <Subtitle>Aliases</Subtitle>
        <SubtitleResult>{aliases}</SubtitleResult>
      </InformationWrapper>
      <InformationWrapper>
        <Subtitle>Alter Egos</Subtitle>
        <SubtitleResult>{alterEgos}</SubtitleResult>
      </InformationWrapper>
      <InformationWrapper>
        <Subtitle>Relatives</Subtitle>
        <SubtitleResult>{relatives}</SubtitleResult>
      </InformationWrapper>
    </Container>
  );
}

export default HeroDetails;
