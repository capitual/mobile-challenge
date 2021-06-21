import React, { useState } from "react";
import { ScrollView, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import {
  ContainerContent,
  ContainerBackIcon,
  ContainerInfoIcon,
} from "./styles";

import HeroDetailsCard from "../../component/HeroDetailsCard";
import HeroInfoModal from "../../component/HeroInfoModal";
import { theme } from "../../styles/Theme/theme";

//The component HeroDetail receive  the data and render the card

function HeroDetailsScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);

  const { hero } = route.params;

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <ContainerContent>
      <LinearGradient
        colors={theme.homeDetailBackgroundColor}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView>
          <ContainerInfoIcon>
            <Feather
              name="clipboard"
              size={25}
              color="#FFF"
              onPress={showModal}
            />
          </ContainerInfoIcon>
          <HeroDetailsCard hero={hero} />
          <Modal visible={modalVisible} transparent animationType="slide">
            <HeroInfoModal
              hero={hero}
              onClose={hideModal}
            />
          </Modal>
        </ScrollView>
      </LinearGradient>

      <ContainerBackIcon>
        <Feather
          name="arrow-left"
          size={28}
          color="#FFF"
          onPress={() => navigation.goBack()}
        />
      </ContainerBackIcon>
    </ContainerContent>
  );
}

export default HeroDetailsScreen;
