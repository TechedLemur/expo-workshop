import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    color: Colors.primaryRed,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    backgroundColor: Colors.primaryCreamWhite,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
