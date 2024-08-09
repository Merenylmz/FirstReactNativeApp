import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ deleteTodo, item }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: "#23048e"}}
        onPress={deleteTodo.bind(this, item.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.title}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalText: { 
    color: "#fff",
    padding: 10,
  },
  pressedItem: {
    color: "#23048e"
  }
});
