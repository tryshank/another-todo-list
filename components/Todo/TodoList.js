import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import TodoItem from "./TodoItem";

const TodoList = ({ items }) => (
  <View style={styles.todoList}>
    <Text style={styles.heading}>Todos:</Text>
    <ScrollView contentContainerStyle={styles.innerContainer}>
      <View style={{ flex: 1 }}>
        {items.map((item, index) => (
          <TodoItem key={item.createdAt} item={item} index={index} />
        ))}
        {!items.length && <Text>No todos</Text>}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  todoList: {
    padding: 20,
    flex: 1
  },
  heading: {
    fontSize: 24
  },
  innerContainer: {
    paddingTop: 20,
    flexGrow: 1
  }
});

export default TodoList;
