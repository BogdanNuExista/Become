import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { auth } from '../firebaseConfig';
import LottieView from 'lottie-react-native';
import { HomeScreenNavigationProp } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

interface UserProfile {
  avatarType: 'male' | 'female';
  xp: number;
  level: number;
  activities: Array<{
    id: string;
    name: string;
    xpGained: number;
    completedAt: string;
  }>;
}

export default function HomeScreen() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const database = getDatabase();

  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    if (!auth.currentUser) return;

    const userRef = ref(database, 'users/' + auth.currentUser.uid);
    
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserProfile(data);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching user data:', error);
      setLoading(false);
    });

    return () => {
      // Detach the listener
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Header  />
      </View>

      {/* Activity Overview Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <LottieView
            source={userProfile?.avatarType === 'male' 
              ? require('../../assets/male-avatar.json')
              : require('../../assets/female-avatar.json')}
            autoPlay
            loop
            style={styles.avatar}
          />
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.levelText}>Level {userProfile?.level}</Text>
          <Text style={styles.xpText}>{userProfile?.xp} XP</Text>
        </View>
      </View>

      {/* Activity Progress Section */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        {userProfile?.activities && userProfile.activities.length > 0 ? (
          userProfile.activities.slice(-10).map((activity) => (
            <View key={activity.id} style={styles.activityCard}>
              <Text style={styles.activityName}>{activity.name}</Text>
              <Text style={styles.activityXP}>+{activity.xpGained} XP</Text>
              <Text style={styles.activityDate}>
                {new Date(activity.completedAt).toLocaleDateString()}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.noActivityText}>No activities yet</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.activityButton}
        onPress={() => navigation.navigate('ActivitySelection')}
      >
        <Text style={styles.activityButtonText}>Select Activity</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f3e5f5',
    paddingBottom: 20, // Add padding to ensure the button is not cut off
  },
  header: {
    backgroundColor: '#6a0dad',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  statsContainer: {
    justifyContent: 'center',
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
  },
  xpText: {
    fontSize: 18,
    color: '#666',
  },
  activitySection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6a0dad',
  },
  activityCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityXP: {
    fontSize: 14,
    color: '#4CAF50',
  },
  activityDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  noActivityText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
  activityButton: {
    backgroundColor: '#6a0dad',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },
  activityButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});