import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Todo } from "@/services/todoService";
import Colors from "@/constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Props = {
  todo: Todo;
  handleToggleTodo: () => void;
  handleDeleteTodo: () => void;
};

export default function TodoItem({
  todo,
  handleToggleTodo,
  handleDeleteTodo,
}: Props) {
  const router = useRouter();
  return (
    <View style={styles.wrapper}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <TouchableOpacity onPress={handleToggleTodo}>
          <Ionicons
            name={todo.complete ? "checkbox" : "checkbox-outline"}
            size={24}
            color={Colors.primaryRed}
          />
        </TouchableOpacity>
        <Text>{todo.text}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          onPress={() => router.navigate(`/todos/edit/${todo.id}`)}
        >
          <Ionicons name="pencil" size={24} color={Colors.seaGreen} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteTodo}>
          <Ionicons name="trash" size={24} color={Colors.burgundy} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    elevation: 5,
  },
});
