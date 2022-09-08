import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchItem from "./SeachItem";

const SearchResults = ({ navigation, repos }) => {
  return (
    <View>
      <FlatList
        style={styles.container}
        data={repos}
        renderItem={({ item }) => (
          <SearchItem navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
  },
});

export default SearchResults;
