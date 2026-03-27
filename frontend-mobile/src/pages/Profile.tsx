import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../assets/styles/ProfileStyles";
import { colors } from "../assets/styles/theme";

export default function Profile() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>¡Hola, Carlos!</Text>
        <TouchableOpacity style={styles.editButton} activeOpacity={0.8}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Main Card */}
      <View style={styles.mainCard}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Carlos García</Text>
        <Text style={styles.username}>@carlosg</Text>
      </View>

      {/* Sport Cards */}
      <View style={styles.sportCard}>
        <Text style={styles.sportTitle}>Fútbol</Text>
        <View style={[styles.sportSeparator, { backgroundColor: colors.futbol }]} />
        <View style={styles.sportDataRow}>
          <View style={styles.sportDataBox}>
            <Text style={styles.sportDataLabel}>Tu Nivel</Text>
            <Text style={styles.sportDataValue}>Intermedio</Text>
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
            <Text style={styles.sportDataValue}>Básico</Text>
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
            <Text style={styles.sportDataValue}>Avanzado</Text>
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
  );
}
