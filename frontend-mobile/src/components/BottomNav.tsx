import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Definimos los tipos de pestañas disponibles
export type TabName = 'inicio' | 'partidos' | 'chats' | 'perfil';

interface BottomNavProps {
  activeTab?: TabName;
  onTabChange?: (tab: TabName) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'chats', onTabChange }) => {
  // Manejador local de estado si no se pasa desde el padre
  const [internalActiveTab, setInternalActiveTab]] = useState<TabName>(activeTab);

  const currentTab = onTabChange ? activeTab : internalActiveTab;

  const handlePress = (tab: TabName) => {
    if (onTabChange) {
      onTabChange(tab);
    } else {
      setInternalActiveTab(tab);
    }
  };

  const tabs: Array<{ id: TabName; label: string; IconComp: any; iconName: string }> = [
    { id: 'inicio', label: 'Inicio', IconComp: MaterialIcons, iconName: 'home' },
    { id: 'partidos', label: 'Partidos', IconComp: MaterialCommunityIcons, iconName: 'tennis' },
    { id: 'chats', label: 'Chats', IconComp: MaterialIcons, iconName: 'forum' },
    { id: 'perfil', label: 'Perfil', IconComp: MaterialIcons, iconName: 'person' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        const color = isActive ? '#98C812' : '#8A8A8A';

        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tab}
            onPress={() => handlePress(tab.id)}
            activeOpacity={0.8}
          >
            {/* Indicador superior de la pestaña activa */}
            <View style={[styles.activeIndicator, { backgroundColor: isActive ? '#98C812' : 'transparent' }]} />
            
            <View style={styles.iconContainer}>
              <tab.IconComp
                name={tab.iconName}
                size={28}
                color={color}
              />
              <Text style={[styles.label, { color }]}>
                {tab.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000000', // Fondo negro como en la captura
    height: 65,
    borderTopWidth: 1,
    borderTopColor: '#1A1A1A',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 5, // Espacio para pantallas modernas (con SafeArea usar SafeAreaView fuera)
  },
  tab: {
    flex: 1,
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    width: '60%', // Ocupa un % del ancho de la pestaña
    height: 3,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    fontFamily: 'Montserrat-Regular',
  },
});

export default BottomNav;
