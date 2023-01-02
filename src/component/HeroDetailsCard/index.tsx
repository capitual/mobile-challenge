import React from "react";
import {
  ContainerCard,
  CardTitle,
  CardTitleBox,
  CardImageContainer,
  CardImage,
  CardInfo,
} from "./styles";
import HeroStats from "../HeroStats";
import {
  Hero
} from "../../shared/types";

interface Props {
  hero: Hero
}

const HeroDetailsCard: React.FC<Props> = ({ hero }) => {
  return (
    <ContainerCard>
      <CardTitleBox>
        <CardTitle numberOfLines={1} ellipsizeMode="tail">
          {hero?.name || 'No Data'}
        </CardTitle>
      </CardTitleBox>
      <CardImageContainer>
        <CardImage
        resizeMode={'stretch'}
        defaultSource= {require('../../assets/missing.png')}
          source={
            { uri: hero.image.url  }  
          }
        />
      </CardImageContainer>
      <CardInfo>
        <HeroStats 
          hero={hero} 
        />
      </CardInfo>
    </ContainerCard>
  );
}

export default HeroDetailsCard;
