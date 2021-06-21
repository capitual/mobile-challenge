import React from "react";
import { BarChart } from "react-native-chart-kit";
import { Dimensions, Platform } from "react-native";
import {
  Hero
} from "../../shared/types";
import 
  BarChartProps
 from "../../shared/types/BarChart";



interface Props {
  hero: Hero
}

const HeroStats: React.FC<Props> = ({ hero }) => {
  const data: BarChartProps = {
    labels: ["Strength", "Intelligence", "Speed", "Durability", "Power"],
    datasets: [
      {
        data: [
          hero.powerstats.strength === "null" ? 0 : hero.powerstats.strength ,
          hero.powerstats.intelligence === "null" ? 0 : hero.powerstats.intelligence,
          hero.powerstats.speed === "null" ? 0 : hero.powerstats.speed,
          hero.powerstats.durability === "null" ? 0 : hero.powerstats.durability,
          hero.powerstats.power == "null" ? 0 : hero.powerstats.power,
        ],
        colors: [
          (opacity = 1) => `#1359FF`,
          (opacity = 1) => `#78A9FF`,
          (opacity = 1) => `#58488A`,
          (opacity = 1) => `#123125`,
          (opacity = 1) => `#743123`,
        ],
      },
    ],
  };

  return (
    <BarChart
      style={{ right: 30 }}
      data={data}
      width={
        Platform.OS == "ios"
          ? Dimensions.get("window").width - 50
          : Dimensions.get("window").width - 150
      }
      height={165}
      chartConfig={{
        backgroundColor: "transparent",
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `#FFFFFF`,
        barPercentage: 0.5,
        decimalPlaces: 0,
        barRadius: 5,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForLabels: {
          fontSize: 7,
          fontWeight: "bold",
        },
      }}
      withHorizontalLabels={true}
      fromZero={true}
      withCustomBarColorFromData={true}
      flatColor={true}
      withInnerLines={false}
      showBarTops={false}
      showValuesOnTopOfBars={true}
      yAxisLabel={''}
      yAxisSuffix={''}
    />
  );
}

export default HeroStats;