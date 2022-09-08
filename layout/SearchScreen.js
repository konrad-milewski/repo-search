import { Image, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults/SearchResults";
import get from "../api/get";
import NoResults from "../components/NoResults";

const SearchPage = ({ navigation }) => {
  const [emptyInput, setEmptyInput] = useState(true);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("")

  const fetchController = useRef(null);

  async function fetchRepos(value) {
    if (fetchController.current) {
      fetchController.current.abort();
      fetchController.current = null;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    fetchController.current = controller;

    setRepos(false);

    if (value) {
      emptyInput && setEmptyInput(false);

      let res = await get(
        `https://api.github.com/search/repositories?q=${value}&type=repository`,
        signal
      );
      res?.message ? setError(res.message) : setError("");
      if (res?.items !== undefined) {
        setRepos(res.items);
        res?.items.length === 0 && setInputValue(value);
      }
    } else {
      setEmptyInput(true);
    }
  }

  return (
    <View style={styles.container}>
      {error.length !== 0 && <Text style={styles.error}>{error}</Text>}
      <SearchInput emptyInput={emptyInput}  func={fetchRepos} />
      {!emptyInput &&
        (repos ? (
          repos.length !== 0 ? (
            <SearchResults navigation={navigation} repos={repos} />
          ) : (
            <NoResults inputValue={inputValue} />
          )
        ) : (
          <View style={styles.spinner.container}>
            <Image
              style={styles.spinner.img}
              source={require("../assets/spinner.gif")}
            />
          </View>
        ))}
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "white",
  },
  error: {
    marginTop: 10,
    color: "red",
  },
  spinner: {
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
    img: { width: 32, height: 32, alignSelf: "center" },
  },
});
