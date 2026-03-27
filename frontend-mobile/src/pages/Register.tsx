import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigate } from "react-router-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authStyles as styles } from "../assets/styles/AuthStyles";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    contrasena: "",
    repetirContrasena: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    contrasena: "",
    repetirContrasena: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { nombre: "", apellidos: "", correo: "", contrasena: "", repetirContrasena: "" };

    if (!formData.nombre) { newErrors.nombre = "El nombre es obligatorio"; isValid = false; }
    if (!formData.apellidos) { newErrors.apellidos = "Los apellidos son obligatorios"; isValid = false; }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo) {
      newErrors.correo = "El correo es obligatorio";
      isValid = false;
    } else if (!emailRegex.test(formData.correo)) {
      newErrors.correo = "Formato de correo inválido";
      isValid = false;
    }

    // Password validation: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!formData.contrasena) {
      newErrors.contrasena = "La contraseña es obligatoria";
      isValid = false;
    } else if (!pwdRegex.test(formData.contrasena)) {
      newErrors.contrasena = "Debe tener al menos 8 carácteres, mayúscula, minúscula, número y carácter especial";
      isValid = false;
    }

    // Repeat password
    if (formData.contrasena !== formData.repetirContrasena) {
      newErrors.repetirContrasena = "Las contraseñas no coinciden";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = () => {
    if (validate()) {
      // Logic valid
      navigate("/login");
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
            
            <Text style={styles.title}>Registrarse</Text>
            
            <View style={styles.subtitleRow}>
              <Text style={styles.subtitleText}>Ya tienes una cuenta?</Text>
              <TouchableOpacity onPress={() => navigate("/login")}>
                <Text style={styles.subtitleLink}>Sign in</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, errors.nombre ? styles.inputError : null]}
                placeholder="Nombre"
                placeholderTextColor="#8E8E93"
                value={formData.nombre}
                onChangeText={(text) => handleChange("nombre", text)}
              />
              {!!errors.nombre && <Text style={styles.errorText}>{errors.nombre}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, errors.apellidos ? styles.inputError : null]}
                placeholder="Apellidos"
                placeholderTextColor="#8E8E93"
                value={formData.apellidos}
                onChangeText={(text) => handleChange("apellidos", text)}
              />
              {!!errors.apellidos && <Text style={styles.errorText}>{errors.apellidos}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, errors.correo ? styles.inputError : null]}
                placeholder="Correo"
                placeholderTextColor="#8E8E93"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.correo}
                onChangeText={(text) => handleChange("correo", text)}
              />
              {!!errors.correo && <Text style={styles.errorText}>{errors.correo}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, errors.contrasena ? styles.inputError : null]}
                placeholder="Contraseña"
                placeholderTextColor="#8E8E93"
                secureTextEntry
                value={formData.contrasena}
                onChangeText={(text) => handleChange("contrasena", text)}
              />
              {!!errors.contrasena && <Text style={styles.errorText}>{errors.contrasena}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, errors.repetirContrasena ? styles.inputError : null]}
                placeholder="Repetir contraseña"
                placeholderTextColor="#8E8E93"
                secureTextEntry
                value={formData.repetirContrasena}
                onChangeText={(text) => handleChange("repetirContrasena", text)}
              />
              {!!errors.repetirContrasena && <Text style={styles.errorText}>{errors.repetirContrasena}</Text>}
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleRegister} activeOpacity={0.8}>
              <Text style={styles.primaryButtonText}>Registrarse</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
