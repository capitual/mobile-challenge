import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

import { ContainerActivityIndicator , ActivityIndicatorLoading} from './styles'

import StatusBarPage from "../../component/StatusBarPage";
import RenderCards from "../../component/RenderCards";
import SearchBar from "../../component/SearchBar";

import { theme } from "../../styles/Theme/theme";
import { useHeroContext } from "../../context/HeroContext";


function HomeScreen({ navigation }) {
  const {
    loading,
    fetchHeros,
    heros,
  } = useHeroContext();
  
  // Fetch ten heros ramdom and spread in heros for RenderCard component

  useEffect(() => {
    fetchHeros();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.homeBackgroundColor }}>
      <StatusBarPage barStyle="light-content" />

      {loading ? (
        <>
        <SearchBar navigation={navigation} />
        <ContainerActivityIndicator>
          <ActivityIndicatorLoading color="#FFF" />
        </ContainerActivityIndicator>
        </>
      ) : (
        <>
          <SearchBar navigation={navigation} />
          <RenderCards heros={heros} navigation={navigation} />
        </>
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;
