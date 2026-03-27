import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Dados fictícios do perfil e das postagens do usuário
const USER_DATA = {
  name: 'Thiago Henrique',
  bio: 'Desenvolvedor vscode | Entusiasta de design grafico',
  profilePic: 'https://github.com/github.png', // Exemplo de link da web
  coverPic: 'https://picsum.photos/id/10/800/400',
};

const USER_POSTS = [
  { id: '1', url: 'https://picsum.photos/seed/1/300' },
  { id: '2', url: 'https://picsum.photos/seed/2/300' },
  { id: '3', url: 'https://picsum.photos/seed/3/300' },
  { id: '4', url: 'https://picsum.photos/seed/4/300' },
  { id: '5', url: 'https://picsum.photos/seed/5/300' },
  { id: '6', url: 'https://picsum.photos/seed/6/300' },
];

export default function ProfileScreen() {
  
  const renderHeader = () => (
    <View>
      {/* Imagem de Capa */}
      <Image source={{ uri: USER_DATA.coverPic }} style={styles.coverImage} />
      
      {/* Foto de Perfil Centralizada */}
      <View style={styles.profilePicContainer}>
        <Image source={{ uri: USER_DATA.profilePic }} style={styles.profilePic} />
      </View>

      {/* Info do Usuário */}
      <View style={styles.infoContainer}>
        <Text style={styles.userName}>{USER_DATA.name}</Text>
        <Text style={styles.userBio}>{USER_DATA.bio}</Text>
      </View>

      {/* Divisor/Abas (Representado pelos retângulos no seu wireframe) */}
      <View style={styles.tabsPlaceholder}>
        <View style={styles.tabItem} />
        <View style={styles.tabItem} />
        <View style={styles.tabItem} />
        <View style={styles.tabItem} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={USER_POSTS}
      keyExtractor={(item) => item.id}
      numColumns={2} // Transforma o feed em grade de 2 colunas
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => (
        <Image source={{ uri: item.url }} style={styles.postGridImage} />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', paddingBottom: 20 },
  coverImage: { width: '100%', height: 150, backgroundColor: '#ccc' },
  profilePicContainer: {
    alignItems: 'center',
    marginTop: -50, // Faz a foto "subir" para cima da capa
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#888',
  },
  infoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  userName: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  userBio: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 5 },
  
  tabsPlaceholder: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  tabItem: { width: 60, height: 25, backgroundColor: '#bbb', borderRadius: 5 },
  
  postGridImage: {
    width: width / 2 - 10, // Divide a tela por 2 com margem
    height: width / 2 - 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#ddd'
  },
});