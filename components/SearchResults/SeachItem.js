import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SeachItem = ({ navigation, item }) => {
  const avatar = {
    uri: item.owner.avatar_url,
    width: 64,
    height: 64,
  };

  const description =
    item.description &&
    (item.description.length > 30
      ? item.description.substring(0, 30) + "..."
      : item.description);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", { repo: item, avatar: avatar })
      }
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.avatar}>
          <Image source={avatar} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SeachItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#CACCD0",
    borderRadius: 10,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  description: {
    color: "gray",
    fontSize: 12,
  },
  avatar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
