import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import todoService, { Todo } from "@/services/todoService";
import Colors from "@/constants/Colors";
import { Platform, StatusBar, StyleSheet } from "react-native";
import TodoItem from "@/components/TodoItem";

export default function Todos() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    todoService.getTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  const incompleteTodos = todos.filter((todo) => !todo.complete);
  const completeTodos = todos.filter((todo) => todo.complete);

  const handleToggleTodo = (todo: Todo) => {
    todoService.toggleTodoCompleteById(todo.id).then(() => {
      const newTodo = { ...todo, complete: !todo.complete };
      const filteredTodos = todos.filter((t) => t.id !== todo.id);
      const newTodos = [...filteredTodos, newTodo];
      setTodos(newTodos);
    });
  };

  const handleDeleteTodo = (todo: Todo) => {
    todoService.deleteTodoById(todo.id).then(() => {
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.todoContainer}>
        <View style={styles.todoList}>
          <Text style={styles.heading}>Todos</Text>
          {incompleteTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleTodo={() => handleToggleTodo(todo)}
              handleDeleteTodo={() => handleDeleteTodo(todo)}
            />
          ))}
        </View>
        <View style={styles.todoList}>
          <Text style={styles.heading}>Completed Todos</Text>
          {completeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleTodo={() => handleToggleTodo(todo)}
              handleDeleteTodo={() => handleDeleteTodo(todo)}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryCreamWhite,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! + 20 : 0,
  },
  todoContainer: {
    // flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primaryRed,
  },
  absoluteButton: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  todoList: {
    alignItems: "center",
    gap: 10,
    height: "50%",
  },
});
