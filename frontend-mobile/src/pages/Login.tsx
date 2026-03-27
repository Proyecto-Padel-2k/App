import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigate } from "react-router-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authStyles as styles } from "../assets/styles/AuthStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const validateEmail = (text: string) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!text) {
      setEmailError("El correo es obligatorio");
      return false;
    } else if (!emailRegex.test(text)) {
      setEmailError("El correo no es válido");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleLogin = () => {
    let isValid = true;
    if (!validateEmail(email)) {
      isValid = false;
    }

    if (password.length === 0) {
      setPasswordError("La contraseña es obligatoria");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      navigate("/home");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.card}>
            
            <Text style={styles.title}>Iniciar Sesión</Text>
            
            <View style={styles.subtitleRow}>
              <Text style={styles.subtitleText}>No tienes una cuenta?</Text>
              <TouchableOpacity onPress={() => navigate("/register")}>
                <Text style={styles.subtitleLink}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, emailError ? styles.inputError : null]}
                placeholder="Email"
                placeholderTextColor="#8E8E93"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (emailError) setEmailError("");
                }}
                onBlur={() => validateEmail(email)}
              />
              {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, passwordError ? styles.inputError : null]}
                placeholder="Contraseña"
                placeholderTextColor="#8E8E93"
                secureTextEntry
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) setPasswordError("");
                }}
              />
              {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity 
                style={styles.checkboxRow} 
                onPress={() => setRememberMe(!rememberMe)}
                activeOpacity={0.8}
              >
                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                  {rememberMe && <MaterialCommunityIcons name="check" size={16} color="#000" />}
                </View>
                <Text style={styles.checkboxLabel}>Recordarme</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate("/recover")}>
                <Text style={styles.linkText}>Recuperar contraseña</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleLogin} activeOpacity={0.8}>
              <Text style={styles.primaryButtonText}>Sign in</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
