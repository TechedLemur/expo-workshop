import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },

  content: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    gap: 10,
    width: "80%",
  },

  settingsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
