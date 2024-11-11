import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types/navigation';

interface Activity {
  id: string;
  name: string;
  duration: number;
  xpGained: number;
  animation: any;
}

const activities: Activity[] = [
  {
    id: 'meditation',
    name: 'Meditation',
    duration: 10,
    xpGained: 50,
    animation: require('../assets/meditation-animation.json'),
  },
  {
    id: 'studying',
    name: 'Studying',
    duration: 20,
    xpGained: 100,
    animation: require('../assets/studying-animation.json'),
  },
  {
    id: 'workout',
    name: 'Workout',
    duration: 30,
    xpGained: 150,
    animation: require('../assets/workout-animation.json'),
  },
];

const ActivityScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  const handleStartActivity = () => {
    // Start activity tracking and update user's XP and level
    if (selectedActivity) {
      // Update user's XP and level based on the selected activity
      const { xpGained } = selectedActivity;
      // Add your logic to update user's XP and level
      console.log(`Gained ${xpGained} XP`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Activities</Text>
      </View>

      {/* Activity List */}
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        style={styles.activityList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.activityCard,
              selectedActivity?.id === item.id ? styles.selectedCard : null,
            ]}
            onPress={() => handleActivitySelect(item)}
          >
            <LottieView
              source={item.animation}
              autoPlay
              loop
              style={styles.activityAnimation}
            />
            <View style={styles.activityInfo}>
              <Text style={styles.activityName}>{item.name}</Text>
              <Text style={styles.activityDuration}>
                {item.duration} mins, {item.xpGained} XP
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Start Activity Button */}
      {selectedActivity && (
        <TouchableOpacity style={styles.startButton} onPress={handleStartActivity}>
          <Text style={styles.startButtonText}>Start {selectedActivity.name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
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
  activityList: {
    padding: 20,
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  selectedCard: {
    borderColor: '#6a0dad',
    borderWidth: 2,
  },
  activityAnimation: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  activityInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityDuration: {
    fontSize: 14,
    color: '#666',
  },
  startButton: {
    backgroundColor: '#6a0dad',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 16,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ActivityScreen;