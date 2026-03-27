import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../assets/styles/ProfileStyles";
import { colors } from "../assets/styles/theme";

const LEVELS = ["Iniciación", "Básico", "Intermedio", "Alto", "Avanzado"];

const CustomDropdown = ({ label, value, onSelect }: { label: string, value: string, onSelect: (v: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TouchableOpacity 
        style={[styles.modalInput, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]} 
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.8}
      >
        <Text style={{ color: "#FFF", fontSize: 16 }}>{value || "Seleccionar Nivel"}</Text>
        <MaterialCommunityIcons name={isOpen ? "chevron-up" : "chevron-down"} size={20} color="#8E8E93" />
      </TouchableOpacity>
      {isOpen && (
        <View style={{ backgroundColor: "#2C2C2E", borderRadius: 8, marginTop: 4, overflow: "hidden" }}>
          {LEVELS.map((lvl) => (
            <TouchableOpacity 
              key={lvl} 
              style={{ padding: 12, borderBottomWidth: 1, borderBottomColor: "#1C1C1E" }}
              onPress={() => {
                onSelect(lvl);
                setIsOpen(false);
              }}
            >
              <Text style={{ color: value === lvl ? "#A8E000" : "#FFF", fontSize: 16 }}>{lvl}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState({
    name: "Carlos García",
    username: "@carlosg",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    futbolLevel: "Intermedio",
    baloncestoLevel: "Básico",
    padelLevel: "Avanzado"
  });

  const [editForm, setEditForm] = useState(profile);

  const handleOpenModal = () => {
    setEditForm(profile);
    setModalVisible(true);
  };

  const handleSave = () => {
    setProfile(editForm);
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>¡Hola, Carlos!</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleOpenModal} activeOpacity={0.8}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Main Card */}
      <View style={styles.mainCard}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: profile.avatar }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.username}>{profile.username}</Text>
      </View>

      {/* Sport Cards */}
      <View style={styles.sportCard}>
        <Text style={styles.sportTitle}>Fútbol</Text>
        <View style={[styles.sportSeparator, { backgroundColor: colors.futbol }]} />
        <View style={styles.sportDataRow}>
          <View style={styles.sportDataBox}>
            <Text style={styles.sportDataLabel}>Tu Nivel</Text>
            <Text style={styles.sportDataValue}>{profile.futbolLevel}</Text>
          </View>
          <View style={styles.statsDividerVertical} />
          <View style={styles.sportDataBox}>
            <Text style={styles.sportDataLabel}>Comunidad</Text>
            <Text style={styles.sportDataValue}>Alto</Text>
          </View>
        </View>
      </View>

      <View style={styles.sportCard}>
        <Text style={styles.sportTitle}>Baloncesto</Text>
        <View style={[styles.sportSeparator, { backgroundColor: colors.baloncesto }]} />
        <View style={styles.sportDataRow}>
          <View style={styles.sportDataBox}>
            <Text style={styles.sportDataLabel}>Tu Nivel</Text>
            <Text style={styles.sportDataValue}>{profile.baloncestoLevel}</Text>
          </View>
          <View style={styles.statsDividerVertical} />
          <View style={styles.sportDataBox}>
            <Text style={styles.sportDataLabel}>Comunidad</Text>
            <Text style={styles.sportDataValue}>Iniciación</Text>
          </View>
        </View>
      </View>

      <View style={styles.sportCard}>
        <Text style={styles.sportTitle}>Pádel</Text>
        <View style={[styles.sportSeparator, { backgroundColor: colors.padel }]} />
        <View style={styles.sportDataRow}>
          <View style={styles.sportDataBox}>
            <Text style={styles.sportDataLabel}>Tu Nivel</Text>
            <Text style={styles.sportDataValue}>{profile.padelLevel}</Text>
          </View>
          <View style={styles.statsDividerVertical} />
          <View style={styles.sportDataBox}>
            <Text style={styles.sportDataLabel}>Comunidad</Text>
            <Text style={styles.sportDataValue}>Avanzado</Text>
          </View>
        </View>
      </View>

      {/* Stats */}
      <Text style={styles.sectionTitle}>Mis Estadísticas</Text>
      <View style={styles.statsCard}>
        <View style={styles.statsRow}>
          <View style={styles.statsItem}>
            <View style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: 6 }}>
              <Text style={styles.statsNumber}>58</Text>
              <Text style={styles.statsLabel}>Partidos</Text>
            </View>
            <View style={styles.statsIconLabelRow}>
               <MaterialCommunityIcons name="tennis" size={16} color="#A8E000" />
               <Text style={styles.statsBottomLabel}>Jugados</Text>
            </View>
          </View>
          <View style={styles.statsDividerVertical} />
          <View style={styles.statsItem}>
            <View style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: 6 }}>
              <Text style={styles.statsNumber}>41</Text>
              <Text style={styles.statsLabel}>Victorias</Text>
            </View>
            <View style={styles.statsIconLabelRow}>
               <MaterialCommunityIcons name="trophy" size={16} color="#A8E000" />
            </View>
          </View>
        </View>

        <View style={styles.statsDividerHorizontal} />

        <View style={styles.statsRow}>
          <View style={styles.statsItem}>
            <Text style={styles.statsWinRate}>67%</Text>
            <Text style={styles.statsLabel}>Win Rate</Text>
          </View>
          <View style={styles.statsDividerVertical} />
          <View style={styles.statsItem}>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={styles.statsAvgTime}>48</Text>
              <Text style={styles.statsLabel}>min</Text>
            </View>
            <Text style={styles.statsLabel}>Tiempo Promedio</Text>
          </View>
        </View>
      </View>

      {/* History */}
      <Text style={styles.sectionTitle}>Historial Reciente</Text>
      <View style={styles.historyCard}>
        {/* Match 1 */}
        <View style={styles.historyItem}>
          <Image source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }} style={styles.historyAvatar} />
          <View style={styles.historyDetails}>
            <Text style={styles.historyTitle}>Ganado - Club Las Palmas</Text>
            <Text style={styles.historyPlayers}>Tú & Alex <Text style={styles.historyHighlightText}>vs</Text> Juan & Pedro</Text>
            <Text style={styles.historyScoreText}>6:4, 7:3 - 06 feb 2024</Text>
          </View>
        </View>
        
        <View style={styles.historyDivider} />
        
        {/* Match 2 */}
        <View style={styles.historyItem}>
          <Image source={{ uri: "https://randomuser.me/api/portraits/men/46.jpg" }} style={styles.historyAvatar} />
          <View style={styles.historyDetails}>
            <Text style={styles.historyTitle}>Perdido - Raqueta Sport</Text>
            <Text style={styles.historyPlayers}>Tú & Roberto <Text style={styles.historyHighlightText}>vs</Text> Mario & Iván</Text>
            <Text style={styles.historyScoreText}>3:6, 6:7 - 28 Ene 2024</Text>
          </View>
        </View>
      </View>

      {/* Ratings */}
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Valoraciones</Text>
        <View style={styles.starsContainer}>
            <MaterialCommunityIcons name="star" size={20} color="#A8E000" />
            <MaterialCommunityIcons name="star" size={20} color="#A8E000" />
            <MaterialCommunityIcons name="star" size={20} color="#A8E000" />
            <MaterialCommunityIcons name="star" size={20} color="#A8E000" />
            <MaterialCommunityIcons name="star" size={20} color="#A8E000" />
        </View>
      </View>
      <Text style={styles.ratingsSubtitle}>Según 34 Opiniones</Text>
      
      {/* Review 1 */}
      <View style={styles.reviewItem}>
        <View style={styles.reviewHeader}>
          <Image source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }} style={styles.reviewAvatar} />
          <Text style={styles.reviewName}>Ana López</Text>
        </View>
        <Text style={styles.reviewText}>
          Carlos es un jugador excelente y muy competitivo!
        </Text>
        <View style={styles.miniAvatarsRow}>
          <Image source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} style={[styles.miniAvatar, styles.firstMiniAvatar]} />
          <Image source={{ uri: "https://randomuser.me/api/portraits/men/46.jpg" }} style={styles.miniAvatar} />
          <Image source={{ uri: "https://randomuser.me/api/portraits/men/22.jpg" }} style={styles.miniAvatar} />
          <Text style={styles.miniAvatarMoreText}>+31</Text>
        </View>
      </View>

      <View style={styles.reviewDivider} />

      {/* Review 2 */}
      <View style={styles.reviewItem}>
        <View style={styles.reviewHeader}>
          <Image source={{ uri: "https://randomuser.me/api/portraits/men/46.jpg" }} style={styles.reviewAvatar} />
          <Text style={styles.reviewName}>Luis Martín</Text>
        </View>
        <View style={styles.miniAvatarsRow}>
           <Image source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} style={[styles.miniAvatar, styles.firstMiniAvatar]} />
           <Image source={{ uri: "https://randomuser.me/api/portraits/men/22.jpg" }} style={styles.miniAvatar} />
           <Text style={styles.miniAvatarMoreText}>Pedro</Text>
        </View>
      </View>

    </ScrollView>

      {/* Edit Profile Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={() => setModalVisible(false)}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Editar Perfil</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <MaterialCommunityIcons name="close" size={24} color="#FFF" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity style={styles.changePhotoButton} activeOpacity={0.7} onPress={() => {
                // Alternating avatar simulation mock
                const altAvatar = editForm.avatar.includes("men") ? "https://randomuser.me/api/portraits/women/44.jpg" : "https://randomuser.me/api/portraits/men/32.jpg";
                setEditForm({...editForm, avatar: altAvatar});
              }}>
                <Text style={styles.changePhotoText}>Cambiar Foto de Perfil</Text>
              </TouchableOpacity>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>NOMBRE</Text>
                <TextInput style={styles.modalInput} value={editForm.name} onChangeText={(t) => setEditForm({...editForm, name: t})} placeholderTextColor="#8E8E93" />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>USUARIO</Text>
                <TextInput style={styles.modalInput} value={editForm.username} onChangeText={(t) => setEditForm({...editForm, username: t})} autoCapitalize="none" placeholderTextColor="#8E8E93" />
              </View>

              <CustomDropdown
                label="NIVEL FÚTBOL"
                value={editForm.futbolLevel}
                onSelect={(val) => setEditForm({...editForm, futbolLevel: val})}
              />

              <CustomDropdown
                label="NIVEL BALONCESTO"
                value={editForm.baloncestoLevel}
                onSelect={(val) => setEditForm({...editForm, baloncestoLevel: val})}
              />

              <CustomDropdown
                label="NIVEL PÁDEL"
                value={editForm.padelLevel}
                onSelect={(val) => setEditForm({...editForm, padelLevel: val})}
              />

              <TouchableOpacity style={styles.saveButton} onPress={handleSave} activeOpacity={0.8}>
                <Text style={styles.saveButtonText}>Guardar Cambios</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>

    </>
  );
}
