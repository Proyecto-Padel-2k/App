import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from '../assets/styles/MatchesStyles';

const Matches = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Partidos</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialCommunityIcons name="magnify" size={26} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                {/* SECCIÓN: PRÓXIMOS PARTIDOS */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Próximos Partidos</Text>
                    <Text style={styles.arrowIcon}>»</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {[1, 2, 3].map((item) => (
                        <View key={item} style={styles.nextMatchCard}>
                            <View style={styles.cardImageContainer}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=400' }}
                                    style={styles.cardImage}
                                />
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.matchClub}>Club Elche Pádel</Text>
                                <Text style={styles.matchDate}>Miércoles 13 Mar • 18:30</Text>
                                <Text style={styles.matchPlayers}>Tú & Alex vs. Juan & Pedro</Text>
                                <Text style={styles.matchLevel}>Nivel 5 • Intermedio</Text>
                                <TouchableOpacity>
                                    <LinearGradient colors={['#A8E000', '#76A000']} style={styles.detailButton}>
                                        <Text style={styles.detailButtonText}>Ver Detalles</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* SECCIÓN: HISTORIAL */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Historial de Partidos</Text>
                    <Text style={styles.arrowIcon}>»</Text>
                </View>

                <View style={styles.historyCard}>
                    <View style={styles.historyItem}>
                        <View style={styles.statusTagContainer}>
                            <View style={[styles.statusTag, { backgroundColor: '#A8E000' }]}>
                                <Text style={styles.statusText}>Ganado</Text>
                            </View>
                            <View>
                                <Text style={styles.historyClub}>Club Las Palmas</Text>
                                <Text style={styles.historyDate}>06 Feb 2024</Text>
                            </View>
                        </View>
                        <View style={styles.historyPlayersRow}>
                            <Text style={styles.emojiIconSmall}>🎾</Text>
                            <Text style={styles.historyPlayersText}>Tú & Alex  vs.  Juan & Pedro</Text>
                        </View>
                        <Text style={styles.historyScore}>6-4, 7-5 • Duración: 55 min.</Text>
                    </View>

                    <View style={styles.historyDivider} />

                    <View style={styles.historyItem}>
                        <View style={styles.statusTagContainer}>
                            <View style={[styles.statusTag, { backgroundColor: '#FF4444' }]}>
                                <Text style={styles.statusText}>Perdido</Text>
                            </View>
                            <View>
                                <Text style={styles.historyClub}>Raqueta Sport</Text>
                                <Text style={styles.historyDate}>28 Ene 2024</Text>
                            </View>
                        </View>
                        <View style={styles.historyPlayersRow}>
                            <Text style={styles.emojiIconSmall}>🎾</Text>
                            <Text style={styles.historyPlayersText}>Tú & Roberto  vs.  Mario & Iván</Text>
                        </View>
                        <Text style={styles.historyScore}>3-6, 6-7 • Duración: 48 min.</Text>
                    </View>

                    <TouchableOpacity style={styles.analysisButton}>
                        <LinearGradient colors={['#A8E000', '#76A000']} style={styles.fullAnalysisBtn}>
                            <Text style={styles.detailButtonText}>Ver Análisis Completo</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {/* SECCIÓN: ESTADÍSTICAS */}
                <Text style={[styles.sectionTitle, { marginLeft: 20, marginBottom: 15, marginTop: 25 }]}>
                    Estadísticas de Partidos
                </Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>58</Text>
                        <Text style={styles.statLabel}>Jugados</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>38</Text>
                        <Text style={styles.statLabel}>Ganados</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>20</Text>
                        <Text style={styles.statLabel}>Perdidos</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={[styles.statValue, { color: '#A8E000' }]}>66%</Text>
                        <Text style={styles.statLabel}>Win Rate</Text>
                    </View>
                </View>

                {/* SECCIÓN: CERCA DE TI */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Partidos Cerca de Ti</Text>
                    <Text style={styles.arrowIcon}>»</Text>
                </View>

                <View style={styles.nearCard}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1626224484214-4051d4c2480c?q=80&w=200' }}
                        style={styles.nearImage}
                    />
                    <View style={styles.nearContent}>
                        <Text style={styles.nearClub}>Club Padel360</Text>
                        <Text style={styles.nearTime}>Hoy • 19:15</Text>
                        <Text style={styles.nearStatus}>Buscando Jugadores</Text>
                    </View>
                    <TouchableOpacity>
                        <LinearGradient colors={['#A8E000', '#76A000']} style={styles.joinButton}>
                            <Text style={styles.joinButtonText}>Unirse</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

        </SafeAreaView>
    );
};

export default Matches;
