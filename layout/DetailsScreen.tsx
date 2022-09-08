import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import get from "../api/get";

var width = Dimensions.get("window").width; //full width

function DetailsScreen({ navigation: { goBack }, route }) {
  const repo = route.params.repo;
  const avatar = route.params.avatar;
  const [subscribers, setSubscribers] = useState(0);

  const getSubscribers = async () => {
    const res = await get(`https://api.github.com/repositories/${repo.id}`);
    res?.subscribers_count && setSubscribers(res?.subscribers_count);
  };

  React.useEffect(() => {
    //  In search api there is no info about subscribers /star
    getSubscribers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            style={styles.back}
            source={require("../assets/icons/leading-icon.png")}
          />
        </TouchableOpacity>

        <Text style={styles.title}>{repo.name}</Text>
      </View>
      <ScrollView>
        <Image style={styles.img} source={avatar} />

        <View style={styles.info}>
          {repo.description && (
            <View style={styles.description}>
              <Text style={styles.label}>About</Text>
              <Text>{repo.description}</Text>
            </View>
          )}
          <View style={styles.stats}>
            <Text style={styles.label}>Forks</Text>
            <View style={styles.stats.count}>
              <Text style={styles.stats.count.number}>{repo.forks_count}</Text>
              <View
                style={{
                  ...styles.stats.count.icon,
                  position: "relative",
                  left: 5,
                }}
              >
                <Image source={require("../assets/icons/forks-icon.png")} />
              </View>
            </View>
          </View>
          <View style={styles.line} />

          <View style={styles.stats}>
            <Text style={styles.label}>Stars</Text>
            <View style={styles.stats.count}>
              <Text style={styles.stats.count.number}>
                {repo.stargazers_count}
              </Text>
              <View style={styles.stats.count.icon}>
                <Image source={require("../assets/icons/star-icon.png")} />
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.stats}>
            <Text style={styles.label}>Watchers</Text>
            <View style={styles.stats.count}>
              <Text style={styles.stats.count.number}>{subscribers}</Text>
              <View style={styles.stats.count.icon}>
                <Image source={require("../assets/icons/watchers-icon.png")} />
              </View>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create<any>({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  back: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  title: {
    fontSize: 18,
    marginLeft: "auto",
    alignItems: "center",
    marginRight: "auto",
  },
  img: {
    alignSelf: "center",
    width: width,
    height: 250,
    marginBottom: 20,
  },
  info: {},
  label: {
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "gray",
    marginVertical: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  description: {
    marginBottom: 3,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
    alignItems: "center",
    count: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      number: {
        marginRight: 10,
        alignSelf: "center",
        color: "gray",
      },
      icon: {
        width: 24,
        alignSelf: "center",
      },
    },
  },
});

export default DetailsScreen;
