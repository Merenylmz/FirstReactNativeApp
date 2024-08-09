import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ScrollView,
  Linking,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
// import axios from 'axios';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addTodo = (data) => {
    if (!data) {
      return Alert.alert("Warning", "Please Enter Todo Name");
    }
    setTodos((prevValues) => [
      ...prevValues,
      { title: data, id: todos.length + 1 },
    ]);
  };

  const deleteTodo = (id) => {
    Alert.alert("Permission", "Would you like to delete item", [
      {
        text: "Yes",
        onPress: () => {
          setTodos((prevValues) => {
            return prevValues.filter(t=>t.id != id);
          });
        },
      },
      {
        text: "No",
      },
    ]);
  };

  const changeModalVisible = () =>{setModalIsVisible(!modalIsVisible)};

  return (
    <>
      <StatusBar style="auto"/>
      <View style={styles.container}>
        <Button title="Add New Goal" onPress={changeModalVisible} color={"#5e0acc"} style={{borderRadius: 10}}/>
        <GoalInput addTodo={addTodo} visible={modalIsVisible} setVisible={changeModalVisible}/>
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={todos}
            renderItem={({ item }) => {
              return (
                <GoalItem deleteTodo={deleteTodo} item={item}/>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  goalsContainer: {
    flex: 7,
  },
});
