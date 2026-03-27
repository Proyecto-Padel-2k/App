import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Outlet } from "react-router-native";
import BottomNav from "./BottomNav";

interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <View style={styles.content}>
        {title ? (
          <View style={styles.tituloContainer}>
            <Text style={styles.titulo}>{title}</Text>
            {children}
          </View>
        ) : (
          <Outlet />
        )}
      </View>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000000" },
  content: { flex: 1 },
  tituloContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { color: "#fff", fontSize: 24, fontFamily: "Montserrat-Bold", marginBottom: 10 }
});
