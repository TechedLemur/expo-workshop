import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      <Button title="Hello" />
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
