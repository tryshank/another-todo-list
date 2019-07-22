import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoItem = ({ item }) => {
  return (
    <View style={[styles.todoItem]}>
      <Text>{item.todo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10
  }
});

export default TodoItem;
