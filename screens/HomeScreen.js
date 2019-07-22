import React from "react";
import { View } from "react-native";

import TodoList from "../components/Todo/TodoList";

const HomeScreen = ({items}) => (
  <View style={{ flex: 1 }}>
    <TodoList items={items} />
  </View>
);

export default HomeScreen;
