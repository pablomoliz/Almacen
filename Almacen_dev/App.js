import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Almacen golfo!</Text>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
        style={styles.imagen}
      />
      <Button title="Press me" onPress={() => alert("Button pressed")} />
      <TouchableHighlight onPress={() => alert("TouchableHighlight pressed")}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require("./assets/icon.png")} style={styles.imagen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imagen: {
    width: 200,
    height: 200,
  },
});
