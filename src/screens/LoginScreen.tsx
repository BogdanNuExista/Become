import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../types/navigation';
import { getDatabase, ref, get } from 'firebase/database';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const database = getDatabase();

  const checkUserAvatar = async (userId: string) => {
    try {
      const userRef = ref(database, `users/${userId}`);
      const snapshot = await get(userRef);
      
      if (snapshot.exists() && snapshot.val().avatarType) {
        // User has already selected an avatar, navigate to Home
        navigation.navigate('Home');
      } else {
        // User hasn't selected an avatar yet, navigate to AvatarSelection
        navigation.navigate('AvatarSelection');
      }
    } catch (error) {
      console.error('Error checking user avatar:', error);
      // If there's an error, default to AvatarSelection screen
      navigation.navigate('AvatarSelection');
    }
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Check if user has already selected an avatar
        checkUserAvatar(userCredential.user.uid);
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Become</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} color="#6a0dad" />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('Register')}
        color="#6a0dad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e5f5',
  },
  title: {
    fontSize: 24,
    color: '#6a0dad',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    padding: 12,
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: '#6a0dad',
    borderWidth: 1,
  },
});