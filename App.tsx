import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello react !!</Text>
      <TouchableOpacity>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("La señora alerta", "Esto es una alerta", [
            { text: "Yes", onPress: () => console.log("Pues vale") },
            { text: "No", onPress: () => console.log("Pues no vale") },
          ])
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
