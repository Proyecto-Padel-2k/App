import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocation, useNavigate } from "react-router-native";

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { name: "Home", icon: "home", path: "/home" },
    { name: "Matches", icon: "tennis", path: "/matches" },
    { name: "Chats", icon: "chat", path: "/chats" },
    { name: "Profile", icon: "account", path: "/profile" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        // The green color from the theme
        const color = isActive ? "#A8E000" : "#888888";

        return (
          <TouchableOpacity
            key={tab.name}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => navigate(tab.path)}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name={tab.icon} size={28} color={color} />
              {/* Optional: Add badge for Chats if desired, but we'll stick to basic design for now */}
            </View>
            <Text style={[styles.tabText, { color }]}>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#000000",
    borderTopWidth: 1,
    borderTopColor: "#181920",
    paddingBottom: 25, // For safe area and padding
    paddingTop: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: "#A8E000",
    marginTop: -12, // Offset to make the top border touch the parent's top
    paddingTop: 10,
  },
  iconContainer: {
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
    fontFamily: "Montserrat-Medium", // Assumes medium weight is available, fallback will be handled by RN
  },
});
