import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const ContainerContent = styled.View`
  flex: 1;
`;

export const ContainerBackIcon = styled.TouchableOpacity`
  top: ${Platform.OS === "ios" ? StatusBar.currentHeight + 6 + "%" : 4 + "%"};
  position: absolute;
  left: 8px;
  justify-content: space-around;
`;

export const ContainerInfoIcon = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  margin-top: 30px;
`;
