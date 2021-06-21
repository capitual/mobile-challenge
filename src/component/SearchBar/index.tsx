import React from "react";
import { TouchableOpacity} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import {
  SearchContainerBack,
  SearchContainer,
  SearchInput,
  IconContainer,
} from "./styles";
import { useHeroContext } from "../../context/HeroContext";

export default function SearchBar({navigation}) {

  const {
    heroname,
    setHeroName,
    searchHero
  } = useHeroContext();

  return (
     <SearchContainerBack>
      <SearchContainer>
        <SearchInput
          value ={heroname}
          onChangeText={text => setHeroName(text)}
          autoCorrect={false}
          placeholderTextColor="#FFF"
          placeholder="Search for heros..."
        ></SearchInput>
        <IconContainer>
          <TouchableOpacity onPress={() => searchHero(navigation)}>
            <EvilIcons name="search" size={35} color="white" />
          </TouchableOpacity>
        </IconContainer>
      </SearchContainer>
    </SearchContainerBack>
  );
}
