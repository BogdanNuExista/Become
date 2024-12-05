// src/types/navigation.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  AvatarSelection: undefined;
  ActivitySelection: undefined;
  QuizzScreen: undefined;
  EndlessQuizz: { topic: string };
};

export type ActivitySelectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ActivitySelection'
>;


