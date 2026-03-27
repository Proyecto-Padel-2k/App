import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Inicio from "./src/pages/Inicio";
import BottomNav, { TabName } from "./src/components/BottomNav";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('inicio');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.content}>
        {activeTab === 'inicio' ? (
          <Inicio />
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    backgroundColor: '#0b0b0b',
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#0b0b0b',
  },
});
