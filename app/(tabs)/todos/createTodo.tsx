import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import TodoForm from "@/components/TodoForm";
import todoService from "@/services/todoService";
import Toast from "react-native-toast-message";

export default function CreateTodo() {
  const [todoText, setTodoText] = React.useState("");

  const handleCreateTodo = () => {
    todoService.createTodo(todoText).then(() => {
      Toast.show({
        type: "success",
        text1: "Todo Created",
        text2: "Successfully created new todo",
      });
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Todo</Text>
      <TodoForm
        todoText={todoText}
        setTodoText={setTodoText}
        buttonText="Create Todo"
        onSubmit={handleCreateTodo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    color: Colors.primaryRed,
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  container: {
    backgroundColor: Colors.primaryCreamWhite,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
