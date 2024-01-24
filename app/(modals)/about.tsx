import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function About() {
  return (
    <View>
      <Stack.Screen options={{ title: "About", presentation: "modal" }} />
      <Text>This is a todo application built with Expo and Expo Router</Text>
    </View>
  );
}
