import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { theme } from "../../styles/Theme/theme";

export const MiniCard = styled.TouchableOpacity`
  align-items: center;
  background-color: ${theme.cardInfoBackground};
  flex-grow: 1;
  margin: 4px;
  flex-basis: 0px;
  height: ${Dimensions.get("window").height / 2 + "px"};
  border-color: #46758d;
  border-width: 5px;
  border-radius: 5px;
`;

export const TitleContainer = styled.View`
  background-color: ${theme.cardTitleBoxColor};
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 1px;
  width: 95%;
  box-shadow: 1px 5px 5px black;
`;

export const TitleCard = styled.Text`
  color: ${theme.cardTitle};
  font-size: 12px;
  font-weight: bold;
`;

export const DesContainer = styled.View`
  background-color: ${theme.cardInfoBoxColor};
  width: 90%;
  margin-top: 7%;
  box-shadow: 1px 5px 5px black;
  padding: 5px;
`;

export const TextDesc = styled.Text`
  font-size: 12px;
  text-transform: capitalize;
`;

export const CardImageContainer = styled.View`
  width: 90%;
  height: 60%;
  border-width: 5px;
  border-radius: 5px;
  border-color: #46758d;
  box-shadow: 1px 5px 5px black;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;
