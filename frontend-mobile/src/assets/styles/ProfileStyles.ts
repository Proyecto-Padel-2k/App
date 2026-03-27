import { StyleSheet } from "react-native";
import { colors } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    color: colors.text,
    fontFamily: "Montserrat-Bold",
  },
  editButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    color: "#000",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },

  // Main Card
  mainCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginBottom: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  avatarContainer: {
    marginTop: -40, // Pull it up to overlay slightly
    marginBottom: 10,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#2C2C2E", // Dark border mimicking background
    backgroundColor: colors.bg,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    color: colors.text,
    fontSize: 22,
    fontFamily: "Montserrat-Bold",
    marginBottom: 2,
  },
  username: {
    color: "#8E8E93", // Light gray
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    marginBottom: 15,
  },
  levelBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 6,
    marginBottom: 20,
  },
  levelText: {
    color: "#000",
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
  },
  progressContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  progressBarBg: {
    width: "100%",
    height: 6,
    backgroundColor: "#2C2C2E",
    borderRadius: 3,
    marginBottom: 8,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  progressText: {
    color: "#E5E5EA",
    fontSize: 12,
    fontFamily: "Roboto-Medium",
  },
  nextLevelText: {
    color: "#8E8E93",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    marginTop: 2,
  },
  inviteButton: {
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  inviteButtonText: {
    color: "#000",
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },

  // Sections Common
  sectionTitle: {
    fontSize: 18,
    color: colors.text,
    fontFamily: "Montserrat-Bold",
    marginBottom: 15,
  },

  // Sport Cards
  sportCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
  },
  sportTitle: {
    color: colors.text,
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
  },
  sportSeparator: {
    height: 3,
    width: "100%",
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 15,
  },
  sportDataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sportDataBox: {
    flex: 1,
    alignItems: "center",
  },
  sportDataLabel: {
    color: "#8E8E93",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    marginBottom: 4,
  },
  sportDataValue: {
    color: colors.text,
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },

  // Stats Grid
  statsCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsItem: {
    flex: 1,
  },
  statsDividerVertical: {
    width: 1,
    backgroundColor: "#2C2C2E",
    marginHorizontal: 15,
  },
  statsDividerHorizontal: {
    height: 1,
    backgroundColor: "#2C2C2E",
    marginVertical: 15,
  },
  statsNumberRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 4,
  },
  statsNumber: {
    color: colors.text,
    fontSize: 28,
    fontFamily: "Montserrat-Bold",
    marginRight: 6,
  },
  statsLabel: {
    color: "#E5E5EA",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    marginBottom: 4,
  },
  statsIconLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsBottomLabel: {
    color: "#8E8E93",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    marginLeft: 6,
  },
  statsWinRate: {
    color: colors.text,
    fontSize: 28,
    fontFamily: "Montserrat-Bold",
    marginBottom: 4,
  },
  statsAvgTime: {
    color: colors.text,
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
    marginRight: 6,
    marginBottom: 2,
  },

  // History List
  historyCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 15,
    marginBottom: 30,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  historyDivider: {
    height: 1,
    backgroundColor: "#2C2C2E",
    marginVertical: 15,
  },
  historyAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  historyDetails: {
    flex: 1,
  },
  historyTitle: {
    color: colors.text,
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 2,
  },
  historyPlayers: {
    color: "#E5E5EA",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    marginBottom: 2,
  },
  historyScoreText: {
    color: "#8E8E93",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
  },
  historyHighlightText: {
    color: colors.primary,
  },

  // Ratings
  ratingsHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: "row",
  },
  ratingsSubtitle: {
    color: "#8E8E93",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    marginBottom: 20,
  },
  reviewItem: {
    marginBottom: 20,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  reviewAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  reviewName: {
    color: colors.text,
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  reviewText: {
    color: "#E5E5EA",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    lineHeight: 18,
  },
  miniAvatarsRow: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.card,
    marginLeft: -6, // overlapping effect
  },
  firstMiniAvatar: {
    marginLeft: 0,
  },
  miniAvatarMoreRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  miniAvatarMoreText: {
    color: colors.primary,
    fontSize: 11,
    fontFamily: "Roboto-Medium",
    marginLeft: 6,
  },
  reviewDivider: {
    height: 1,
    backgroundColor: "#2C2C2E",
    marginVertical: 15,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#1C1C1E",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    maxHeight: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    color: "#8E8E93",
    fontSize: 12,
    marginBottom: 8,
    fontFamily: "Montserrat-Medium",
  },
  modalInput: {
    backgroundColor: "#2C2C2E",
    borderRadius: 8,
    color: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  saveButton: {
    backgroundColor: "#A8E000",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
  },
  changePhotoButton: {
    backgroundColor: "#2C2C2E",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#A8E000",
    borderStyle: "dashed",
  },
  changePhotoText: {
    color: "#A8E000",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  }
});
