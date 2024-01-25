import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";

export default function Profile() {
  const [image, setImage] = React.useState("");

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    // Ask for permissions if we do not have
    if (!status?.granted) {
      const result = await requestPermission();
      if (!result.granted) {
        return;
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Image
        source={
          image
            ? { uri: image }
            : require("@/assets/images/blank-profile-picture.png")
        }
        style={styles.profileImage}
      />
      <View style={{ gap: 10 }}>
        <Button
          onPress={pickImage}
          title="Pick image from library"
          color={Colors.primaryRed}
        />
        <Button
          onPress={takePhoto}
          title="Take a new photo"
          color={Colors.primaryRed}
        />
      </View>
    </View>
  );
}

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
