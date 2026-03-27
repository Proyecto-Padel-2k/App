import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Matches() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Matches</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000" },
  text: { color: "#fff", fontSize: 24, fontFamily: "Montserrat-Bold" }
});
