import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Vibration } from 'react-native';
import { DatabaseReference, getDatabase, ref, update, onValue as firebaseOnValue } from 'firebase/database';
import { auth } from '../firebaseConfig';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivitySelectionScreenNavigationProp } from '../types/navigation';
import Header from '../components/Header';

interface Activity {
    id: string;
    name: string;
    duration: number;
    xpPerSecond: number;
}

const activities: Activity[] = [
    { id: '1', name: 'Meditation', duration: 30, xpPerSecond: 1 },
    { id: '2', name: 'Studying', duration: 60, xpPerSecond: 2 },
    { id: '3', name: 'Workout', duration: 30, xpPerSecond: 3 },
];

const ActivitySelectionScreen = () => {
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [userProfile, setUserProfile] = useState<any>(null);
    const database = getDatabase();
    const navigation = useNavigation<ActivitySelectionScreenNavigationProp>();

    useEffect(() => {
        if (!auth.currentUser) return;
        const userRef = ref(database, 'users/' + auth.currentUser.uid);
        const unsubscribe = onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setUserProfile(data);
            }
        }, (error) => {
            console.error('Error fetching user data:', error);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const startActivity = () => {
        if (!selectedActivity) return;
        setTimeRemaining(selectedActivity.duration);
        setIsActive(true);
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    setIsActive(false);
                    Vibration.vibrate(500);
                    updateUserProfile(selectedActivity.xpPerSecond * selectedActivity.duration);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    const updateUserProfile = (xpGained: number) => {
        if (!auth.currentUser || !userProfile) return;
        const updatedXP = userProfile.xp + xpGained;
        const updatedLevel = Math.floor(updatedXP / 100);
        const newActivity = {
            id: `activity-${Date.now()}`,
            name: selectedActivity!.name,
            xpGained: xpGained,
            completedAt: new Date().toISOString(),
        };
        update(ref(database, 'users/' + auth.currentUser.uid), {
            xp: updatedXP,
            level: updatedLevel,
            activities: [...(userProfile.activities || []), newActivity],
        });
        setSelectedActivity(null);
        setUserProfile({ ...userProfile, xp: updatedXP, level: updatedLevel, activities: [...(userProfile.activities || []), newActivity] });
    };

    return (
        <View style={styles.container}>
            <Header />

            <FlatList
                data={activities}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.activityCard,
                            selectedActivity?.id === item.id ? styles.selectedCard : null,
                        ]}
                        onPress={() => setSelectedActivity(item)}
                    >
                        <View style={styles.activityInfo}>
                            <Text style={styles.activityName}>{item.name}</Text>
                            <Text style={styles.activityDuration}>
                                {item.duration} seconds, {item.xpPerSecond} XP/s
                            </Text>
                        </View>
                        {selectedActivity?.id === item.id && (
                            <LottieView
                                source={require('../../assets/timer.json')}
                                autoPlay
                                loop
                                style={styles.timerAnimation}
                            />
                        )}
                    </TouchableOpacity>
                )}
            />

            {selectedActivity && (
                <TouchableOpacity style={styles.startButton} onPress={startActivity}>
                    <Text style={styles.startButtonText}>
                        {isActive ? `${timeRemaining}s remaining` : 'Start Activity'}
                    </Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.homeButtonText}>Go to Home</Text>
            </TouchableOpacity>
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
    activityCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 2,
    },
    selectedCard: {
        borderWidth: 2,
        borderColor: '#6a0dad',
    },
    activityInfo: {
        flex: 1,
    },
    activityName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    activityDuration: {
        fontSize: 14,
        color: '#666',
    },
    timerAnimation: {
        width: 50,
        height: 50,
    },
    startButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#6a0dad',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    startButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    homeButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#6a0dad',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    homeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ActivitySelectionScreen;

function onValue(userRef: DatabaseReference, onData: (snapshot: any) => void, onError: (error: any) => void) {
    return firebaseOnValue(userRef, onData, onError);
}