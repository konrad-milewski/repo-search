import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchInput = ({ func, emptyInput}) => {
  const [key, setKey] = useState(Math.random())

  async function clearSearch(){
    setKey(Math.random())
    await func('')
  }
  return (
    <View key={key} style={styles.searchSection}>
      <Image
        style={styles.icon}
        source={require("../assets/icons/search-icon.png")}
      />
      <TextInput
        style={styles.input}
        placeholder="Search for valuable resources"
        onChangeText={async (value) => await func(value)}
        underlineColorAndroid="transparent"
      />
      {!emptyInput && <TouchableOpacity onPress={clearSearch}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/delete-icon.png")}
        />
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
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
