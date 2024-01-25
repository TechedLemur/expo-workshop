import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type Props = {
  onSubmit: () => void;
  todoText: string;
  setTodoText: (text: string) => void;
  buttonText: string;
};
export default function TodoForm({
  onSubmit,
  buttonText,
  setTodoText,
  todoText,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Enter todo text..."
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryRed,
    borderRadius: 10,

    padding: 10,
    width: 150,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: Colors.white,
  },
  container: {
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    minWidth: 150,
    maxWidth: 250,
    elevation: 5,

    alignItems: "center",
    borderColor: Colors.grey,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
