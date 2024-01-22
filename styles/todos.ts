import Colors from "@/constants/Colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

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
