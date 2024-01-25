import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Colors from "@/constants/Colors";
import todoService from "@/services/todoService";
import TodoForm from "@/components/TodoForm";
import Toast from "react-native-toast-message";

export default function EditTodo() {
  const { id } = useLocalSearchParams();
  const todoId = Number(id);

  const [todoText, setTodoText] = React.useState<string>("");

  React.useEffect(() => {
    todoService.getTodoById(todoId).then((todo) => {
      if (todo) {
        setTodoText(todo.text);
      }
    });
  }, []);

  const handleCreateTodo = () => {
    todoService.editTodoTextById(todoId, todoText).then(() => {
      Toast.show({
        type: "success",
        text1: "Todo edited",
        text2: "Successfully edited todo",
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Todo</Text>

      <TodoForm
        todoText={todoText}
        setTodoText={setTodoText}
        buttonText="Edit Todo"
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
    marginBottom: 20,
  },
  container: {
    backgroundColor: Colors.primaryCreamWhite,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
