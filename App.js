import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  const state = {
    items: {
      "1": {
        id: 1,
        ts: "2018-03-30T13:18:01.000Z",
        uid: 1,
        todo: "Play Segway polo match",
        done: "2018-03-30T13:17:02.000Z"
      },
      "2": {
        id: 2,
        ts: "2018-03-30T13:18:11.000Z",
        uid: 1,
        todo: "Come up with new pranks",
        done: "2018-03-30T16:02:03.000Z"
      },
      "3": {
        id: 3,
        ts: "2018-03-30T13:18:21.000Z",
        uid: 1,
        todo: "Fiddle with laser pointers"
      },
      "4": {
        id: 4,
        ts: "2018-03-30T13:18:31.000Z",
        uid: 2,
        todo: "Go by the Living Computer Museum and add my latest purchase",
        done: "2018-03-01T13:37:00.000Z"
      },
      "5": {
        id: 5,
        ts: "2018-03-30T13:18:41.000Z",
        uid: 2,
        todo: "Fly my new helicopter to the Octopus"
      }
    }
  };

  const [items, setItems] = useState(state.items);

  return (
    <View style={styles.container}>
      <HomeScreen items={Object.values(items)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
