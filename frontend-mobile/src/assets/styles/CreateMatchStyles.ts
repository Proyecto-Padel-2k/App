import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold', // Highlighted
    color: '#fff',
    marginVertical: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionLabel: {
    color: '#888',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold', // Highlighted
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  // Dropdown Styles
  dropdownContainer: {
    zIndex: 1000,
  },
  dropdownSelector: {
    height: 55,
    backgroundColor: '#181920',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedSportInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sportDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  selectedSportText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Medium', // Typography
  },
  dropdownIcon: {
    color: '#888',
    fontSize: 12,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 90, // Espacio para que no se solape con el selector
    left: 0,
    right: 0,
    backgroundColor: '#1c1d25',
    borderRadius: 12,
    padding: 5,
    zIndex: 1001,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
  dropdownItemActive: {
    backgroundColor: '#2a2b35',
  },
  dropdownItemText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular', // Typography
  },

  input: {
    height: 50,
    backgroundColor: '#181920',
    borderRadius: 12,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular', // Typography
    borderWidth: 1,
    borderColor: '#333',
  },
  inputContainer: {
    height: 50,
    backgroundColor: '#181920',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  inputText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular', // Typography
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  // Level Styles
  levelSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  levelDot: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold', // Numbers use Bold Montserrat
  },
  infoIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
    marginLeft: 10,
  },
  infoIconActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  infoText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoTextActive: {
    color: '#000',
  },
  levelHelpWrapper: {
    marginTop: 5,
    padding: 15,
    backgroundColor: '#1c1d25',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 10,
  },
  levelHelpHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  levelHelpTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },
  levelHelpContent: {
    color: '#aaa',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular', // Body
  },
  levelHelpHighlight: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  levelDescriptionWrapper: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#181920',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  levelDescription: {
    color: colors.primary,
    fontFamily: 'Montserrat-Bold', // Title element
    fontSize: 18,
    textTransform: 'capitalize',
  },
  
  toggleBtn: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181920',
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
  toggleBtnActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  toggleText: {
    color: '#fff',
    fontWeight: '600',
  },
  toggleTextActive: {
    color: '#000',
    fontFamily: 'Montserrat-Bold', // Highlighted
  },
  
  submitBtn: {
    backgroundColor: colors.primary,
    height: 55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  submitBtnText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold', // Button Typography
    letterSpacing: 1,
  },
});
