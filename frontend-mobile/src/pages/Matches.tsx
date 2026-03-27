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

const Matches = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Partidos</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Text style={styles.emojiIcon}>🔍</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Text style={styles.emojiIcon}>🎯</Text>
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

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#000' },
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
    },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FFF' },
    headerIcons: { flexDirection: 'row' },
    iconButton: { marginLeft: 15 },
    emojiIcon: { fontSize: 20 },

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 25,
        marginBottom: 15,
    },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
    arrowIcon: { color: '#A8E000', fontSize: 18, marginLeft: 8 },

    horizontalScroll: { paddingLeft: 20 },
    nextMatchCard: {
        backgroundColor: '#1C1C1E',
        width: 250,
        borderRadius: 15,
        marginRight: 15,
        overflow: 'hidden',
    },
    cardImageContainer: { height: 100 },
    cardImage: { width: '100%', height: '100%' },
    cardContent: { padding: 12 },
    matchClub: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
    matchDate: { color: '#A0A0A0', fontSize: 12, marginVertical: 4 },
    matchPlayers: { color: '#FFF', fontSize: 12 },
    matchLevel: { color: '#A8E000', fontSize: 11, marginTop: 4 },
    detailButton: {
        marginTop: 12,
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    detailButtonText: { color: '#000', fontWeight: 'bold', fontSize: 13 },

    historyCard: {
        backgroundColor: '#1C1C1E',
        marginHorizontal: 20,
        borderRadius: 15,
        padding: 15,
    },
    historyItem: { paddingVertical: 10 },
    statusTagContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    statusTag: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginRight: 10,
    },
    statusText: { color: '#000', fontWeight: 'bold', fontSize: 10 },
    historyClub: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
    historyDate: { color: '#A0A0A0', fontSize: 11 },
    historyPlayersRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
    emojiIconSmall: { fontSize: 14, marginRight: 8 },
    historyPlayersText: { color: '#FFF', fontSize: 13 },
    historyScore: { color: '#A0A0A0', fontSize: 12, marginTop: 5, marginLeft: 22 },
    historyDivider: { height: 1, backgroundColor: '#333', marginVertical: 10 },
    analysisButton: { marginTop: 10 },
    fullAnalysisBtn: { paddingVertical: 12, borderRadius: 10, alignItems: 'center' },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1C1C1E',
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 15,
    },
    statBox: { alignItems: 'center' },
    statValue: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
    statLabel: { color: '#A0A0A0', fontSize: 10, marginTop: 4 },

    nearCard: {
        flexDirection: 'row',
        backgroundColor: '#1C1C1E',
        marginHorizontal: 20,
        padding: 12,
        borderRadius: 15,
        alignItems: 'center',
    },
    nearImage: { width: 60, height: 60, borderRadius: 10 },
    nearContent: { flex: 1, marginLeft: 12 },
    nearClub: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
    nearTime: { color: '#A0A0A0', fontSize: 12 },
    nearStatus: { color: '#A8E000', fontSize: 12, marginTop: 2 },
    joinButton: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 8 },
    joinButtonText: { color: '#000', fontWeight: 'bold' },

    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#333',
    },
    navItem: { alignItems: 'center' },
    navEmoji: { fontSize: 20, color: '#A0A0A0' },
    navText: { color: '#A0A0A0', fontSize: 10, marginTop: 4 },
});

export default Matches;
