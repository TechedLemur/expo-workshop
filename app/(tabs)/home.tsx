import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Colors from "@/constants/Colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Todo App!</Text>
      <Link href={"/"} asChild={true} replace={true}>
        <Button title="Log Out" color={Colors.seaGreen} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryCreamWhite,
    gap: 10,
  },
  header: {
    color: Colors.primaryRed,
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
