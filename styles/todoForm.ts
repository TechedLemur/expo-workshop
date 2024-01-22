import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryRed,
    borderRadius: 10,

    padding: 10,
    width: 150,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: Colors.white,
  },
  container: {
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    minWidth: 150,
    maxWidth: 250,
    elevation: 5,

    alignItems: "center",
    borderColor: Colors.grey,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
