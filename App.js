import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  TouchableWthoutFeedback,
} from "react-native";

export default function App() {
  const handleTextPress = () => console.log("Text Pressed");
  const handleButtonPress = () =>
    Alert.alert("Ivan Oblomov", "Main message", [
      { text: "Ok", onPress: () => console.log("Yes button") },
      { text: "No", onPress: () => console.log("No button") },
    ]);
  const handleButtonPress2 = () =>
    Alert.prompt("Ivan Oblomov", "Main message", (text) => console.log(text));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>
        Hello!!! {"\n"}Hello!!!
      </Text>
      <Button title="Нажми на меня" color="green" onPress={handleButtonPress} />
      <Button
        title="Нажми на меня"
        color="green"
        onPress={handleButtonPress2}
      />
      <TouchableWthoutFeedback>
        <Image source={require("./assets/favicon.png")} />
      </TouchableWthoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "red",
  },
});
