import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import { RootStackParamList } from './src/types/navigation';
import AvatarSelectionScreen from './src/screens/AvatarSelectionScreen';
import ActivitySelectionScreen from './src/screens/ActivitySelectionScreen';
import { QuizzScreen } from './src/screens/QuizzScreen';
import { EndlessQuizzScreen } from './src/screens/QuizzScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AvatarSelection" component={AvatarSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ActivitySelection" component={ActivitySelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="QuizzScreen" component={QuizzScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EndlessQuizz" component={EndlessQuizzScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
