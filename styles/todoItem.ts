import Colors from "@/constants/Colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

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
