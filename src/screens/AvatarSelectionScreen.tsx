// src/screens/AvatarSelectionScreen.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert,
  ActivityIndicator 
} from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function AvatarSelectionScreen() {
  const [selectedAvatar, setSelectedAvatar] = useState<'male' | 'female' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<any>();
  const database = getDatabase();

  const handleConfirm = async () => {
    if (!selectedAvatar || !auth.currentUser) {
      Alert.alert('Error', 'Please select an avatar first');
      return;
    }

    setIsLoading(true);

    try {
      // Reference to the user's data in Realtime Database
      const userRef = ref(database, 'users/' + auth.currentUser.uid);
      
      // Initial user data
      const userData = {
        avatarType: selectedAvatar,
        xp: 0,
        level: 1,
        activities: [],
        createdAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      };

      // Set the data
      await set(userRef, userData);
      
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error saving avatar:', error);
      Alert.alert(
        'Error',
        'There was a problem saving your avatar. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Avatar</Text>
      
      <View style={styles.avatarsContainer}>
        <TouchableOpacity 
          style={[
            styles.avatarOption,
            selectedAvatar === 'male' && styles.selectedAvatar
          ]}
          onPress={() => setSelectedAvatar('male')}
          disabled={isLoading}
        >
          <LottieView
            source={require('../../assets/male-avatar.json')}
            autoPlay
            loop
            style={styles.avatar}
          />
          <Text style={styles.avatarLabel}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.avatarOption,
            selectedAvatar === 'female' && styles.selectedAvatar
          ]}
          onPress={() => setSelectedAvatar('female')}
          disabled={isLoading}
        >
          <LottieView
            source={require('../../assets/female-avatar.json')}
            autoPlay
            loop
            style={styles.avatar}
          />
          <Text style={styles.avatarLabel}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[
          styles.confirmButton,
          (!selectedAvatar || isLoading) && styles.disabledButton
        ]}
        onPress={handleConfirm}
        disabled={!selectedAvatar || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.confirmButtonText}>Confirm</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 40,
  },
  avatarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  avatarOption: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedAvatar: {
    borderColor: '#6a0dad',
    backgroundColor: 'rgba(106, 13, 173, 0.1)',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  avatarLabel: {
    marginTop: 10,
    fontSize: 16,
    color: '#6a0dad',
  },
  confirmButton: {
    backgroundColor: '#6a0dad',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    minWidth: 200,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});