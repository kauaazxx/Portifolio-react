
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, StatusBar } from 'react-native';

export default function HomeScreen() {
  function abrirGitHub() {
    Linking.openURL('https://github.com/kauaazxx');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.menu}>
        <Text style={styles.logo}>Meu Perfil</Text>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Sobre</Text>
        <Text style={styles.menuItem}>GitHub</Text>
      </View>

      <View style={styles.perfil}>
        <Image
          source={require('../../assets/images/minha-foto.jpg')}
          style={styles.foto}
        />

        <Text style={styles.nome}>Kauã Lucio</Text>

        <Text style={styles.curso}>
          Cursando SENAI-DS
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={abrirGitHub}
        >
          <Text style={styles.textoBotao}>
            Meu GitHub
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
  },

  menu: {
    width: '80%',
    minHeight: 48,
    backgroundColor: '#202124',
    borderRadius: 30,
    marginTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },

  menuItem: {
    color: '#eeeeee',
    fontSize: 11,
  },

  perfil: {
    alignItems: 'center',
    marginTop: 58,
  },

  foto: {
    width: 124,
    height: 220,
    borderRadius: 12,
  },

  nome: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 15,
  },

  curso: {
    color: '#eeeeee',
    fontSize: 12,
    marginTop: 10,
  },

  botao: {
    backgroundColor: '#4998f5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 15,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});