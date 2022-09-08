import Navigation from "./layout/global/Navigation";
import { LogBox, StyleSheet, SafeAreaView } from "react-native";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
