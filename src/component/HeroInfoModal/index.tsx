import React from "react";
import { TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  ModalContainer,
  Container,
  Header,
  InfoArea,
  Title,
  BioText,
} from "./styles";
import {
  Hero
} from "../../shared/types";

interface Props {
  onClose(): void,
  hero: Hero,
}

//the api doesn't have the Js pattern, place-of-birth is an exemple.
//The api send data unfinished , that is way i use verications.

const HeroInfoModal: React.FC<Props> = ({ onClose, hero }) => {
  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30}></Feather>
          </TouchableOpacity>
        </Header>
        <Title>Biography</Title>
        <InfoArea>
          <BioText>Name: {hero.name || 'No information'}</BioText>
          <BioText>
            Place of birth: {hero.biography["place-of-birth"] || 'No information'}
          </BioText>
          <BioText>First appearance: {hero.biography["first-appearance"]|| 'No information'}</BioText>
          <BioText>Publisher: {hero.biography.publisher || 'No information'}</BioText>
        </InfoArea>
      </Container>
    </ModalContainer>
  );
}

export default HeroInfoModal;