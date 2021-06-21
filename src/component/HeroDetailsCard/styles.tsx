import styled from "styled-components/native";
import { Platform } from "react-native";

import { theme } from "../../styles/Theme/theme";

export const ContainerCard = styled.View`
  margin-top: ${Platform.OS === "ios" ? 25 + "%" : 30 + "%"};
  width: 280px;
  height: 480px;
  background-color: ${theme.cardInfoBackground};
  box-shadow: 5px 10px 5px black;
  align-items: center;
  border-width: 5px;
  border-color: #46758d;
`;
export const CardTitleBox = styled.View`
  background-color: ${theme.cardTitleBoxColor};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  width: 95%;
  box-shadow: 1px 5px 5px black;
`;
export const CardImageContainer = styled.View`
  width: 90%;
  height: 47%;
  border-width: 5px;
  border-radius: 5px;
  border-color: #46758d;
  box-shadow: 1px 5px 5px black;
`;
export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;
export const CardInfo = styled.View`
  background-color: ${theme.cardInfoBoxColor};
  justify-content: center;
  margin-top: 10px;
  padding: 5px;
  width: 90%;
  height: 37%;
  box-shadow: 1px 5px 5px black;
`;

export const CardTitle = styled.Text`
  color: ${theme.cardTitle};
  font-size: 20px;
  font-weight: bold;
`;
