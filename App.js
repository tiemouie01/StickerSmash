import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

import * as ImagePicker from "expo-image-picker";

const PlaceHolderImage = require("./assets/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image");
    }
  };
  return (
    <View style={styles.container}>
      <ImageViewer
        placeholderImageSource={PlaceHolderImage}
        selectedImage={selectedImage}
      />
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button
            onPress={pickImageAsync}
            theme={"primary"}
            label={"Choose a photo"}
          />
          <Button
            label={"Use this photo"}
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
