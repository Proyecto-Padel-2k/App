import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#1C1C1E",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontFamily: "Montserrat-Bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitleRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  subtitleText: {
    color: "#8E8E93",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  subtitleLink: {
    color: "#A8E000",
    fontSize: 14,
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    marginLeft: 4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#2C2C2E",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    borderWidth: 1,
    borderColor: "#333",
  },
  inputError: {
    borderColor: "#FF4444",
  },
  errorText: {
    color: "#FF4444",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#A8E000",
    borderRadius: 4,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#A8E000",
  },
  checkboxLabel: {
    color: "#FFF",
    fontSize: 14,
  },
  linkText: {
    color: "#A8E000",
    fontSize: 14,
    fontWeight: "bold",
  },
  primaryButton: {
    backgroundColor: "#A8E000",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  primaryButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    fontWeight: "bold",
  },
  infoText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 20,
  }
});
