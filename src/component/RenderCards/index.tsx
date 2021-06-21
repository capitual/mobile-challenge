import React from "react";
import { FlatList , RefreshControl} from "react-native";
import {
  MiniCard,
  TitleContainer,
  TitleCard,
  DesContainer,
  TextDesc,
  CardImageContainer,
  CardImage,
} from "./styles";
import {
  Hero
} from "../../shared/types";
import { useHeroContext } from "../../context/HeroContext";

export default function RenderCards({ navigation, heros }) {
  const {
    loading,
    fetchHeros
  } = useHeroContext();

  // Display the data in ten minicards using flatlist, verification is needed cause api send multiplus types of data... handleClick function drive to Details screen , sending the data.

  function handleClick(data: Hero) {
    navigation.push("Details", {
      hero: data,
    });
  }

  return (
    <FlatList
      data={heros}
      keyExtractor={(heros) => heros.data.id}
      numColumns={2}
      refreshControl={
        <RefreshControl
         refreshing={loading}
         onRefresh={fetchHeros}
         title="Pull to refresh"
         tintColor="#fff"
         titleColor="#fff"
      />}
      renderItem={({ item }) => {
        return (
          <MiniCard
            style={
              item?.data.biography.alignment === "good"
                ? { borderColor: "rgba(0,101,80,0.62)" }
                : { borderColor: "rgba(255,101,80,0.8)" }
            }
            key={item?.data.id}
            onPress={() => handleClick(item?.data)}
          >
            <TitleContainer>
              <TitleCard numberOfLines={1} ellipsizeMode="tail">
                {item?.data.name}{" "}
              </TitleCard>
            </TitleContainer>
            <CardImageContainer>
              <CardImage
                resizeMode={'cover'}
                source={{uri: item?.data.image.url}}
                defaultSource= {require('../../assets/missing.png')}
              />
            </CardImageContainer>
            <DesContainer>
              <TextDesc numberOfLines={1}>
                Race:{" "}
                {item?.data.appearance.race !== "null"
                  ? item?.data.appearance.race
                  : "not assigned"}
              </TextDesc>
              <TextDesc numberOfLines={1}>
                Gender:{" "}
                {item.data.appearance?.gender !== "-"
                  ? item?.data.appearance.gender
                  : "not assigned"}
              </TextDesc>
              <TextDesc numberOfLines={1} style={{ fontSize: 12 }}>
                Alignment:{" "}
                {item?.data.biography.alignment !== "null" || "-"
                  ? item?.data.biography.alignment
                  : "not assigned"}
              </TextDesc>
            </DesContainer>
          </MiniCard>
        );
      }}
    />
  );
}
