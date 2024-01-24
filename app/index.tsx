import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Login" }} />
      <Button title="Log in" onPress={() => router.replace("/(tabs)/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
