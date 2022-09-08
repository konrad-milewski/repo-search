import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const NoResults = ({ inputValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        We couldn't find anything for "{inputValue}"
      </Text>
      <Image
        style={styles.image}
        source={require(`../assets/no-results.png`)}
      />
    </View>
  );
};

export default NoResults;

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 40,
    alignItems: "center",
  },
  image: {
    width: 32 * 8,
    height: 32 * 8,
  },
  info: {
    fontSize: 18,
    textAlign: "center",
    width: 32 * 7,
  },
});
