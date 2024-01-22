import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  header: {
    color: Colors.primaryRed,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 24,
    marginTop: 50,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 100,
    marginBottom: 30,
  },
});
