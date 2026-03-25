import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { colors } from '../assets/styles/theme';
import { styles } from '../assets/styles/CreateMatchStyles';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CreateMatch = () => {
  const [selectedSport, setSelectedSport] = useState('padel');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [level, setLevel] = useState(3);

  const sports = [
    { key: 'futbol', name: 'Fútbol', color: colors.futbol },
    { key: 'padel', name: 'Padel', color: colors.padel },
    { key: 'baloncesto', name: 'Baloncesto', color: colors.baloncesto }
  ];

  const levelDescriptions: { [key: number]: string } = {
    1: 'iniciacion',
    2: 'basico',
    3: 'medio',
    4: 'medio-alto',
    5: 'avanzado',
    6: 'Experto/Competicion',
    7: 'Profesional',
  };

  const levelHelp: { [key: number]: string } = {
    1: '¿Qué esperar? Jugadores que están aprendiendo a pasar la bola. El ritmo es lento, hay muchos errores no forzados y apenas se usan las paredes. Ideal para peloteos suaves y sin presión.',
    2: '¿Qué esperar? Jugadores que ya logran peloteos cortos y meten el saque. Empiezan a usar las paredes, pero aún tienen dificultades para controlar la dirección.',
    3: '¿Qué esperar? Jugadores que mantienen el punto vivo. Ya usan el cristal y suben a la red, aunque fallan si se les aprieta mucho. Es un nivel de juego fluido y entretenido.',
    4: '¿Qué esperar? Jugadores que ya "saben de qué va esto". Buscan tus huecos, usan la bandeja con intención y cometen pocos errores. Aquí el partido ya tiene táctica y buen ritmo.',
    5: '¿Qué esperar? Jugadores que definen los puntos con potencia (víboras, remates). Su colocación es casi perfecta y te costará mucho ganarles un punto por fallo suyo. Ritmo muy intenso.',
    6: '¿Qué esperar? Jugadores de competición o semiprofesionales. Precisión total, lectura del juego profesional y una velocidad de bola muy alta. Solo si buscas un reto de máximo nivel.',
    7: '¿Qué esperar? Jugadores federados o de circuito profesional. Precisión absoluta, potencia máxima y un nivel físico/mental de élite.',
  };

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleHelp = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowHelp(!showHelp);
  };

  const selectSport = (key: string) => {
    setSelectedSport(key);
    setIsDropdownOpen(false);
  };

  const handleLevelSelect = (l: number) => {
    setLevel(l);
    // If help is already shown, show the new help immediately
    // LayoutAnimation will handle the transition if we want to be fancy
  };

  const currentSport = sports.find((s) => s.key === selectedSport) || sports[1];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Crear Nuevo Partido</Text>

      {/* Sport Dropdown */}
      <View style={[styles.section, styles.dropdownContainer]}>
        <Text style={styles.sectionLabel}>Deporte</Text>
        <TouchableOpacity 
          style={styles.dropdownSelector} 
          onPress={toggleDropdown}
          activeOpacity={0.7}
        >
          <View style={styles.selectedSportInfo}>
            <View style={[styles.sportDot, { backgroundColor: currentSport.color }]} />
            <Text style={styles.selectedSportText}>{currentSport.name}</Text>
          </View>
          <Text style={styles.dropdownIcon}>{isDropdownOpen ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        {isDropdownOpen && (
          <View style={styles.dropdownMenu}>
            {sports.map((sport) => (
              <TouchableOpacity
                key={sport.key}
                style={[
                  styles.dropdownItem,
                  selectedSport === sport.key && styles.dropdownItemActive,
                ]}
                onPress={() => selectSport(sport.key)}
              >
                <View style={[styles.sportDot, { backgroundColor: sport.color }]} />
                <Text style={styles.dropdownItemText}>{sport.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Input Fields */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Ubicación</Text>
        <TextInput
          style={styles.input}
          placeholder="¿En qué club jugamos?"
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.row}>
        <View style={[styles.section, { flex: 1, marginRight: 10 }]}>
          <Text style={styles.sectionLabel}>Fecha</Text>
          <TouchableOpacity style={styles.inputContainer}>
            <Text style={styles.inputText}>Hoy, 25 Mar</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.section, { flex: 1 }]}>
          <Text style={styles.sectionLabel}>Hora</Text>
          <TouchableOpacity style={styles.inputContainer}>
            <Text style={styles.inputText}>19:00</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Level Selector */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Nivel del Partido (1-7)</Text>
        <View style={styles.levelSelector}>
          {[1, 2, 3, 4, 5, 6, 7].map((l) => (
            <TouchableOpacity
              key={l}
              style={[
                styles.levelDot,
                level >= l ? { backgroundColor: colors.primary } : { backgroundColor: '#333' },
                level === l && { transform: [{ scale: 1.1 }] },
              ]}
              onPress={() => handleLevelSelect(l)}
            >
              <Text style={[styles.levelText, level >= l && { color: '#000' }]}>{l}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Level Description and ? Toggle */}
        <View style={styles.levelDescriptionWrapper}>
          <Text style={styles.levelDescription}>{levelDescriptions[level]}</Text>
          <TouchableOpacity 
            style={[styles.infoIcon, showHelp && styles.infoIconActive]} 
            onPress={toggleHelp}
            activeOpacity={0.7}
          >
            <Text style={[styles.infoText, showHelp && styles.infoTextActive]}>?</Text>
          </TouchableOpacity>
        </View>

        {/* Detailed Help (Conditional) */}
        {showHelp && (
          <View style={styles.levelHelpWrapper}>
            <Text style={styles.levelHelpContent}>
              <Text style={styles.levelHelpHighlight}>
                {levelHelp[level].split('?')[0]}?{' '}
              </Text>
              {levelHelp[level].split('?')[1]}
            </Text>
          </View>
        )}
      </View>

      {/* Privacy Selector */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Privacidad</Text>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.toggleBtn, styles.toggleBtnActive]}>
            <Text style={styles.toggleTextActive}>Público</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleBtn}>
            <Text style={styles.toggleText}>Solo Amigos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>PUBLICAR PARTIDO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateMatch;
