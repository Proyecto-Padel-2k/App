import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Inicio from "./src/pages/Inicio";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.demoBox}>
        <Text style={styles.robotoText}>Fuente: Roboto</Text>
        <Text style={styles.montserratText}>Fuente: Montserrat</Text>
        <Icon name="sports-tennis" size={40} color="#0000" />
      </View>
      <Inicio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  demoBox: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderBottomWidth: 1,
    borderColor: '#b2ebf2'
  },
  robotoText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginBottom: 5,
  },
  montserratText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginBottom: 10,
  }
});
