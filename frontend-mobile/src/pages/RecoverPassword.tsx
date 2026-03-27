import React from "react";
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigate } from "react-router-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authStyles as styles } from "../assets/styles/AuthStyles";

export default function RecoverPassword() {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.card}>
            
            <Text style={styles.title}>Recuperar{"\n"}contraseña</Text>
            
            <Text style={[styles.infoText, { marginTop: 20 }]}>
              ¡Listo! Te enviamos un Gmail con el enlace{"\n"}para restablecer tu contraseña.
            </Text>

            <Text style={[styles.infoText, { color: "#8E8E93", marginBottom: 30 }]}>
              Revisa tu bandeja de entrada o la carpeta{"\n"}de spam si no lo ves enseguida.
            </Text>

            <TouchableOpacity style={styles.primaryButton} onPress={() => navigate("/login")} activeOpacity={0.8}>
              <Text style={styles.primaryButtonText}>Sign in</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
