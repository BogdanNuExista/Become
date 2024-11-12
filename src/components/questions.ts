export interface Question {
    id: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    topic: string;
  }
  
  export const questions: Question[] = [
    // Nutrition Questions
    {
      id: 'n1',
      topic: 'Nutrition',
      difficulty: 'easy',
      question: 'Which vitamin is produced by the body when exposed to sunlight?',
      correct_answer: 'Vitamin D',
      incorrect_answers: ['Vitamin C', 'Vitamin A', 'Vitamin B12']
    },
    {
      id: 'n2',
      topic: 'Nutrition',
      difficulty: 'easy',
      question: 'Which of these foods is highest in protein per 100g?',
      correct_answer: 'Chicken breast',
      incorrect_answers: ['Quinoa', 'Black beans', 'Tofu']
    },
    {
      id: 'n3',
      topic: 'Nutrition',
      difficulty: 'medium',
      question: 'What is the primary function of fiber in diet?',
      correct_answer: 'Aids digestion',
      incorrect_answers: ['Builds muscle', 'Produces energy', 'Stores fat']
    },
    {
      id: 'n4',
      topic: 'Nutrition',
      difficulty: 'hard',
      question: 'Which omega-3 fatty acid is most commonly found in fish oil?',
      correct_answer: 'DHA',
      incorrect_answers: ['ALA', 'EPA', 'LA']
    },
  
    // History Questions
    {
      id: 'h1',
      topic: 'History',
      difficulty: 'easy',
      question: 'Who was the first President of the United States?',
      correct_answer: 'George Washington',
      incorrect_answers: ['Thomas Jefferson', 'John Adams', 'Benjamin Franklin']
    },
    {
      id: 'h2',
      topic: 'History',
      difficulty: 'medium',
      question: 'In which year did World War II end?',
      correct_answer: '1945',
      incorrect_answers: ['1944', '1946', '1943']
    },
    {
      id: 'h3',
      topic: 'History',
      difficulty: 'hard',
      question: 'Which empire was ruled by Kublai Khan?',
      correct_answer: 'Mongol Empire',
      incorrect_answers: ['Ottoman Empire', 'Roman Empire', 'Persian Empire']
    },
  
    // AI Questions
    {
      id: 'ai1',
      topic: 'Artificial Intelligence',
      difficulty: 'easy',
      question: 'What does AI stand for?',
      correct_answer: 'Artificial Intelligence',
      incorrect_answers: ['Automated Interface', 'Advanced Integration', 'Automated Intelligence']
    },
    {
      id: 'ai2',
      topic: 'Artificial Intelligence',
      difficulty: 'medium',
      question: 'Which programming language is most commonly used for AI development?',
      correct_answer: 'Python',
      incorrect_answers: ['Java', 'C++', 'JavaScript']
    },
    {
      id: 'ai3',
      topic: 'Artificial Intelligence',
      difficulty: 'hard',
      question: 'What is the name of the AI that defeated world champion Lee Sedol in Go?',
      correct_answer: 'AlphaGo',
      incorrect_answers: ['Deep Blue', 'Watson', 'GPT-3']
    }
  ];
  
  export const getQuestionsByTopicAndDifficulty = (
    topic: string,
    difficulty: string
  ): Question[] => {
    return questions.filter(
      q => q.topic === topic && q.difficulty === difficulty
    );
  };
  
  export const getAllTopics = (): string[] => {
    return [...new Set(questions.map(q => q.topic))];
  };