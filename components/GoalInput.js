import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({addTodo, visible, setVisible}) => {
    const [input, setInput] = useState("");

    const handleAddTodo = (data) =>{
        addTodo(input);
        setInput("");
        setVisible();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require("../assets/Images/goal.png")} style={styles.imageTag}/>
                <TextInput
                    placeholder="Enter Todo Name"
                    style={styles.textInput}
                    onChangeText={(e) => setInput(e)}
                    value={input}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Todo" onPress={handleAddTodo} color={"#4b8agr"} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={setVisible} color={"#f31282"}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#cccccc",
        paddingBottom: 20,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        padding: 2,
        width: "90%",
        borderRadius: 5,
        backgroundColor: "#9e33f5",
        color: "#fff"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 250,
        marginTop: 7
    },
    button: {
        width: "50%",
        borderRadius: 5,
        marginHorizontal: 3
    },
    imageTag: {
        width: 100,
        height: 100,
        marginBottom: 8
    }
});

