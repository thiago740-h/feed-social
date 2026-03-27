import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const INITIAL_POSTS = [
  {
    id: '1',
    user: 'Ana Silva',
    image: 'https://picsum.photos/seed/picsum/400/300',
    description: 'Belo dia no parque!',
  },
  {
    id: '2',
    user: 'João Souza',
    image: 'https://picsum.photos/seed/tech/400/300',
    description: 'Codando o projeto de Feed!',
  },
];

export default function FeedScreen() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [inputText, setInputText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Função para adicionar novo post
  const handlePost = () => {
    if (inputText && imageUrl) {
      const newPost = {
        id: Math.random().toString(),
        user: 'Eu', // Usuário fixo conforme a instrução
        image: imageUrl,
        description: inputText,
      };
      setPosts([newPost, ...posts]);
      setInputText('');
      setImageUrl('');
    }
  };

  const renderPost = ({ item }: { item: typeof INITIAL_POSTS[0] }) => (
    <View style={styles.postCard}>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.userAvatar} />
        <View>
          <Text style={styles.userName}>{item.user}</Text>
          <Text style={styles.postDescription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Área de Criação de Post */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="No que está pensando?" 
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
        />
        <TextInput 
          placeholder="Link da imagem (URL)..." 
          style={styles.inputSmall}
          value={imageUrl}
          onChangeText={setImageUrl}
        />
        <TouchableOpacity style={styles.button} onPress={handlePost}>
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista do Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inputContainer: { padding: 15, backgroundColor: '#f0f0f0', borderBottomWidth: 1, borderColor: '#ddd' },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginBottom: 10 },
  inputSmall: { backgroundColor: '#fff', borderRadius: 8, padding: 8, fontSize: 12, marginBottom: 10 },
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  
  postCard: { margin: 15, backgroundColor: '#eee', borderRadius: 15, overflow: 'hidden' },
  postImage: { width: '100%', height: 250, backgroundColor: '#ccc' },
  postFooter: { flexDirection: 'row', padding: 15, alignItems: 'center' },
  userAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#888', marginRight: 10 },
  userName: { fontWeight: 'bold' },
  postDescription: { color: '#555' }
});