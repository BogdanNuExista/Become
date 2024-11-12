import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { QuizzScreenNavigationProp, EndlessQuizzScreenNavigationProp } from '../types/navigation';
import { auth } from '../firebaseConfig';
import { getDatabase, ref, get, update } from 'firebase/database';
import { Question, getQuestionsByTopicAndDifficulty, getAllTopics } from '../components/questions';
import Header from '../components/Header';

const QuizzScreen = () => {
  const navigation = useNavigation<QuizzScreenNavigationProp>();
  const topics = getAllTopics();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {topics.map((item) => (
          <View key={item} style={styles.cardContainer}>
            <TouchableOpacity style={styles.topicCard} onPress={() => navigation.navigate('EndlessQuizz', { topic: item })}>
              <Text style={styles.topicTitle}>{item}</Text>
              <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('EndlessQuizz', { topic: item })}>
                <Text style={styles.startButtonText}>Go to Endless Quizz</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const EndlessQuizzScreen = () => {
  const navigation = useNavigation<EndlessQuizzScreenNavigationProp>();
  const route = useRoute();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const database = getDatabase();

  const topic = (route.params as { topic: string })?.topic || 'General Knowledge';

  const loadQuestions = () => {
    const newQuestions = getQuestionsByTopicAndDifficulty(topic, difficulty);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleCorrectAnswer = async () => {
    if (!auth.currentUser) return;

    try {
      // Get current user data
      const userRef = ref(database, 'users/' + auth.currentUser.uid);
      const snapshot = await get(userRef);
      const userData = snapshot.val();
      
      if (userData) {
        // Update XP
        const newXP = (userData.xp || 0) + 1;
        
        // Add activity record
        const newActivity = {
          id: Date.now().toString(),
          name: `Completed ${topic} Quiz Question`,
          xpGained: 1,
          completedAt: new Date().toISOString()
        };

        const activities = userData.activities || [];
        
        // Update user data
        await update(userRef, {
          xp: newXP,
          activities: [...activities, newActivity]
        });

        setScore(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [difficulty, topic]);

  if (questions.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Header />
        <Text style={styles.errorText}>No questions available for this topic and difficulty</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.retryButtonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <View style={styles.centerContainer}>
        <Header />
        <Text style={styles.resultText}>Quiz Complete! Score: {score}/{questions.length}</Text>
        <TouchableOpacity style={styles.actionButton} onPress={loadQuestions}>
          <Text style={styles.actionButtonText}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.actionButtonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    .sort(() => Math.random() - 0.5);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titleText}>{topic} Quiz - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Text>
      
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Question {currentQuestionIndex + 1} of {questions.length}</Text>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>

      <View style={styles.difficultyContainer}>
        {['easy', 'medium', 'hard'].map((level) => (
          <TouchableOpacity
            key={level}
            style={[styles.difficultyButton, difficulty === level && styles.activeDifficulty]}
            onPress={() => setDifficulty(level)}
          >
            <Text style={styles.difficultyText}>{level.charAt(0).toUpperCase() + level.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        <FlatList
          data={answers}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.answerButton}
              onPress={() => {
                if (item === currentQuestion.correct_answer) {
                  handleCorrectAnswer();
                }
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              }}
            >
              <Text style={styles.answerText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
  },
  scrollContainer: {
    padding: 16,
  },
  cardContainer: {
    padding: 8,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e5f5',
    padding: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 16,
    textAlign: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  progressText: {
    fontSize: 16,
    color: '#6a0dad',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a0dad',
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  difficultyButton: {
    backgroundColor: '#6a0dad',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    minWidth: 80,
  },
  activeDifficulty: {
    backgroundColor: '#9c27b0',
  },
  difficultyText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  questionContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  answerButton: {
    backgroundColor: '#f3e5f5',
    padding: 16,
    borderRadius: 8,
    marginVertical: 6,
  },
  answerText: {
    fontSize: 16,
    color: '#333',
  },
  loadingText: {
    fontSize: 18,
    color: '#6a0dad',
    marginTop: 16,
  },
  errorText: {
    fontSize: 18,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#6a0dad',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    textAlign: 'center',
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#6a0dad',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  topicCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6a0dad',
  },
  startButton: {
    backgroundColor: '#6a0dad',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export { QuizzScreen, EndlessQuizzScreen };