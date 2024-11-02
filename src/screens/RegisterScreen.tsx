// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../types/navigation';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Account created successfully!');
        navigation.navigate('Login'); // Navigate back to Login after successful registration
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
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
      <Button title="Register" onPress={handleRegister} color="#6a0dad" />
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
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
