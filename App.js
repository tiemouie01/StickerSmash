import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import ImageViewer from "./components/ImageViewer";

const PlaceHolderImage = require("./assets/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer placeholderImageSource={PlaceHolderImage} />
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
});
