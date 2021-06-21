import styled from "styled-components/native";

export const SearchContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 50px;
  flex-direction: row;
  margin-top: 5%;
  margin-bottom: 2%;
`;
export const SearchContainerBack = styled.View`
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  background-color: gray;
  width: 80%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  padding-left: 8px;
`;

export const IconContainer = styled.View`
  height: 100%;
  width: 20%;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;
