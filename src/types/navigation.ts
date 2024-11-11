// src/types/navigation.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  AvatarSelection: undefined;
  ActivitySelection: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

export type AvatarSelectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AvatarSelection'
>;

export type ActivitySelectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ActivitySelection'
>;


