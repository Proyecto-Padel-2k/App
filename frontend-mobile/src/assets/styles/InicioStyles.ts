import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#000000" },

  hola: { fontSize: 26, fontFamily: "Montserrat-Bold", color: "#ffff" },

  separationLine: { height: 1, backgroundColor: "#333", marginVertical: 10 },
  separationLineSubtitle: { height: 1, backgroundColor: "#333", marginVertical: 5, marginBottom: 10 },

  highlightText: { color: "#A8E000" },

  cardPrimary: {
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#181920"
  },
  title: { color: "#fff", fontSize: 24, fontFamily: "Montserrat-Bold" },
  subtitle: { color: "#e0e0e0", marginBottom: 10, fontFamily: "Roboto-Regular" },

  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    zIndex: 1,
  },

  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    zIndex: 2,
  },

  button: {
    backgroundColor: "#A8E000",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#000000", fontFamily: "Montserrat-SemiBold" },

  card: {
    backgroundColor: "#181920",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardHeader: { fontSize: 18, fontFamily: "Montserrat-Bold", color: "#ffff" },
  sectionTitle: { fontSize: 20, fontFamily: "Montserrat-Bold", color: "#ffff" },
  club: { fontSize: 16, fontFamily: "Roboto-Medium", color: "#ffff" },
  time: { fontFamily: "Roboto-Regular", color: "#ffff" },
  vs: { marginTop: 5, fontFamily: "Roboto-Bold", color: "#ffff" },
  linkButton: { marginTop: 10, backgroundColor: "#A8E000", padding: 6, borderRadius: 6, alignSelf: "flex-start" },
  linkText: { color: "#000000", fontFamily: "Montserrat-SemiBold" },

  torneo: { color: "#ffff", fontWeight: "bold" },

  row: { flexDirection: "row", justifyContent: "space-between" },
  progressHeader: { color: "#ffff", fontSize: 18, fontFamily: "Montserrat-Bold" },
  progressLabel: { color: "#ffff", fontSize: 14, fontFamily: "Roboto-Bold" },
  progressValue: { fontSize: 18, fontFamily: "Montserrat-Bold", color: "#ffff" },
  progressMatches: { fontSize: 20, fontFamily: "Montserrat-Bold", color: "#ffff" },
  progressSub: { color: "#A8E000", fontFamily: "Roboto-Regular" },

  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  playerName: { fontSize: 16, fontFamily: "Montserrat-SemiBold", color: "#ffff" },
  playerLevel: { color: "#A8E000", fontFamily: "Roboto-Regular" },
  inviteButton: {
    backgroundColor: "#A8E000",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  inviteText: { color: "#000000", fontFamily: "Montserrat-SemiBold" },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  cardHalf: {
    backgroundColor: "#181920",
    padding: 20,
    borderRadius: 12,
    width: "48%",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 12,
  },
  navItem: { fontFamily: "Montserrat-Medium", color: "#1e90ff" },
});
