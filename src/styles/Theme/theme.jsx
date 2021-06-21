export const theme = {
  cardInfoBackground: "#808080",
  cardTitleBoxColor: "#008080",
  cardInfoBoxColor: "#008080",
  cardTitle: "black",
  homeBackgroundColor: "#132742",
  homeDetailBackgroundColor: ["#132742", "#132742"],
};

export const animConfig = {
  animation:'spring',
  config: {
    stiffness: 1000,
    damping: 200,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const screenOptions = {
  title: null,
  headerShown: false,
  gestureEnabled: false,
};
