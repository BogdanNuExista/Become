import React, { useEffect } from 'react';
import { app } from './src/firebaseConfig';
import { Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    if (app) {
      console.log("Firebase initialized successfully");
    }
  }, []);

  return (
    <View>
      <Text>Hello, Become App!</Text>
    </View>
  );
}