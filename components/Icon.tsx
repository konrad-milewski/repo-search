import { Image } from "react-native";
import React from "react";

const Icon = ({ style, iconName }) => {
  return (
    <>
      <Image
        style={style}
        source={require(`../assets/icons/${iconName}.png`)}
      />
    </>
  );
};

export default Icon;
