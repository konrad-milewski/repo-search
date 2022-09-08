import React, { useState } from "react";
import {
  StyleSheet, TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "./Icon";

const SearchInput = ({ func, emptyInput }) => {
  const [key, setKey] = useState(Math.random());

  async function clearSearch() {
    setKey(Math.random());
    await func("");
  }

  return (
    <View key={key} style={styles.searchSection}>
      <Icon style={styles.icon} iconName={`search-icon`} />
      <TextInput
        style={styles.input}
        placeholder="Search for valuable resources"
        onChangeText={async (value) => await func(value)}
        underlineColorAndroid="transparent"
      />
      {!emptyInput && (
        <TouchableOpacity onPress={clearSearch}>
          <Icon style={styles.icon} iconName={`delete-icon`} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create<any>({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "#6750A4",
    marginBottom: 12,
    borderRadius: 5,
  },
  icon: {
    width: 16,
    height: 16,
    padding: 10,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});

export default SearchInput;
