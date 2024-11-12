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
    {
        id: 'n5',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which mineral is primarily responsible for bone health?',
        correct_answer: 'Calcium',
        incorrect_answers: ['Iron', 'Potassium', 'Magnesium']
      },
      {
        id: 'n6',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What type of fat is generally considered unhealthy and should be limited?',
        correct_answer: 'Trans fat',
        incorrect_answers: ['Saturated fat', 'Monounsaturated fat', 'Polyunsaturated fat']
      },
      {
        id: 'n7',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'What is the main role of Vitamin K in the body?',
        correct_answer: 'Blood clotting',
        incorrect_answers: ['Vision support', 'Energy production', 'Bone strengthening']
      },
      {
        id: 'n8',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'What is the primary source of energy for the human body?',
        correct_answer: 'Carbohydrates',
        incorrect_answers: ['Proteins', 'Fats', 'Vitamins']
      },
      {
        id: 'n9',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which vitamin is essential for maintaining healthy skin and vision?',
        correct_answer: 'Vitamin A',
        incorrect_answers: ['Vitamin C', 'Vitamin D', 'Vitamin E']
      },
      {
        id: 'n10',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which essential nutrient cannot be synthesized by the body and must be obtained from diet?',
        correct_answer: 'Essential amino acids',
        incorrect_answers: ['Vitamin D', 'Glucose', 'Fatty acids']
      },
      {
        id: 'n11',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which nutrient is primarily responsible for muscle repair and growth?',
        correct_answer: 'Protein',
        incorrect_answers: ['Carbohydrate', 'Fat', 'Vitamin C']
      },
      {
        id: 'n12',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What is a common dietary source of Omega-3 fatty acids?',
        correct_answer: 'Salmon',
        incorrect_answers: ['Chicken', 'Broccoli', 'Cheese']
      },
      {
        id: 'n13',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which vitamin plays a key role in the synthesis of collagen?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin A', 'Vitamin E', 'Vitamin D']
      },
      {
        id: 'n14',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'What is the most abundant mineral in the human body?',
        correct_answer: 'Calcium',
        incorrect_answers: ['Iron', 'Potassium', 'Sodium']
      },
      {
        id: 'n15',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which antioxidant is commonly found in tomatoes and has been linked to cancer prevention?',
        correct_answer: 'Lycopene',
        incorrect_answers: ['Beta-carotene', 'Vitamin C', 'Flavonoids']
      },
      {
        id: 'n16',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is essential for blood clotting?',
        correct_answer: 'Vitamin K',
        incorrect_answers: ['Vitamin C', 'Vitamin D', 'Vitamin A']
      },
      {
        id: 'n17',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What type of carbohydrate is fiber considered to be?',
        correct_answer: 'Complex carbohydrate',
        incorrect_answers: ['Simple carbohydrate', 'Disaccharide', 'Starch']
      },
      {
        id: 'n18',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'What is the main benefit of antioxidants in the body?',
        correct_answer: 'Protect cells from damage',
        incorrect_answers: ['Increase energy', 'Strengthen muscles', 'Build bone density']
      },
      {
        id: 'n19',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which mineral is crucial for transporting oxygen in the blood?',
        correct_answer: 'Iron',
        incorrect_answers: ['Zinc', 'Calcium', 'Magnesium']
      },
      {
        id: 'n20',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which of these vitamins is water-soluble?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin A', 'Vitamin D', 'Vitamin E']
      },
      {
        id: 'n21',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which amino acid is considered essential for infants but not for adults?',
        correct_answer: 'Histidine',
        incorrect_answers: ['Leucine', 'Arginine', 'Glutamine']
      },
      {
        id: 'n22',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which macronutrient provides the most calories per gram?',
        correct_answer: 'Fat',
        incorrect_answers: ['Carbohydrate', 'Protein', 'Fiber']
      },
      {
        id: 'n23',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which mineral is primarily responsible for fluid balance in the body?',
        correct_answer: 'Sodium',
        incorrect_answers: ['Calcium', 'Iron', 'Magnesium']
      },
      {
        id: 'n24',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'What is the term for a protein that contains all essential amino acids?',
        correct_answer: 'Complete protein',
        incorrect_answers: ['Incomplete protein', 'Essential protein', 'Nonessential protein']
      },
      {
        id: 'n25',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which nutrient is necessary for the production of red blood cells?',
        correct_answer: 'Iron',
        incorrect_answers: ['Zinc', 'Calcium', 'Vitamin C']
      },
      {
        id: 'n26',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What is the primary benefit of eating whole grains over refined grains?',
        correct_answer: 'Higher fiber content',
        incorrect_answers: ['Lower calories', 'Higher protein', 'More fat']
      },
      {
        id: 'n27',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which vitamin can be synthesized from tryptophan, an amino acid?',
        correct_answer: 'Vitamin B3 (Niacin)',
        incorrect_answers: ['Vitamin B12', 'Vitamin B6', 'Vitamin B1']
      },
      {
        id: 'n28',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin helps the body absorb calcium?',
        correct_answer: 'Vitamin D',
        incorrect_answers: ['Vitamin C', 'Vitamin E', 'Vitamin K']
      },
      {
        id: 'n29',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which nutrient is primarily stored in the liver and muscles?',
        correct_answer: 'Glycogen',
        incorrect_answers: ['Glucose', 'Protein', 'Fat']
      },
      {
        id: 'n30',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which mineral is an important component of thyroid hormones?',
        correct_answer: 'Iodine',
        incorrect_answers: ['Zinc', 'Iron', 'Calcium']
      },
      {
        id: 'n31',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is known for supporting immune function?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin A', 'Vitamin D', 'Vitamin B12']
      },
      {
        id: 'n32',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which of these is a healthy source of unsaturated fat?',
        correct_answer: 'Olive oil',
        incorrect_answers: ['Butter', 'Coconut oil', 'Lard']
      },
      {
        id: 'n33',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which B vitamin is important for preventing neural tube defects during pregnancy?',
        correct_answer: 'Folate (Vitamin B9)',
        incorrect_answers: ['Vitamin B12', 'Vitamin B6', 'Vitamin B2']
      },
      {
        id: 'n34',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which nutrient is essential for building and repairing tissues?',
        correct_answer: 'Protein',
        incorrect_answers: ['Carbohydrates', 'Fats', 'Water']
      },
      {
        id: 'n35',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which vitamin is known as the "sunshine vitamin"?',
        correct_answer: 'Vitamin D',
        incorrect_answers: ['Vitamin A', 'Vitamin C', 'Vitamin E']
      },
      {
        id: 'n36',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which mineral is critical for heart rhythm and muscle function?',
        correct_answer: 'Magnesium',
        incorrect_answers: ['Calcium', 'Iron', 'Potassium']
      },
      {
        id: 'n37',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which food is a rich source of Vitamin C?',
        correct_answer: 'Oranges',
        incorrect_answers: ['Bananas', 'Rice', 'Chicken']
      },
      {
        id: 'n38',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What is the primary function of carbohydrates in the body?',
        correct_answer: 'Provide energy',
        incorrect_answers: ['Build muscle', 'Store fat', 'Support immune function']
      },
      {
        id: 'n39',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which nutrient is important for enzyme function and is a cofactor in over 300 enzymatic reactions?',
        correct_answer: 'Magnesium',
        incorrect_answers: ['Calcium', 'Iron', 'Potassium']
      },
      {
        id: 'n40',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is important for healthy vision and skin?',
        correct_answer: 'Vitamin A',
        incorrect_answers: ['Vitamin B12', 'Vitamin C', 'Vitamin K']
      },
      // Continue in this format for further questions
      {
        id: 'n41',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which mineral is essential for carrying oxygen in the blood?',
        correct_answer: 'Iron',
        incorrect_answers: ['Zinc', 'Magnesium', 'Calcium']
      },
      {
        id: 'n42',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What type of fatty acids are primarily found in fish oil?',
        correct_answer: 'Omega-3 fatty acids',
        incorrect_answers: ['Omega-6 fatty acids', 'Trans fats', 'Saturated fats']
      },
      {
        id: 'n43',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'What is the most abundant protein in the human body?',
        correct_answer: 'Collagen',
        incorrect_answers: ['Hemoglobin', 'Keratin', 'Albumin']
      },
      {
        id: 'n44',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is essential for calcium absorption?',
        correct_answer: 'Vitamin D',
        incorrect_answers: ['Vitamin A', 'Vitamin E', 'Vitamin C']
      },
      {
        id: 'n45',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which type of carbohydrate is stored in the muscles and liver as an energy reserve?',
        correct_answer: 'Glycogen',
        incorrect_answers: ['Glucose', 'Fructose', 'Sucrose']
      },
      {
        id: 'n46',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which vitamin is crucial for DNA synthesis and cell division?',
        correct_answer: 'Folate (Vitamin B9)',
        incorrect_answers: ['Vitamin B6', 'Vitamin B12', 'Vitamin C']
      },
      {
        id: 'n47',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which nutrient helps to build and repair muscles?',
        correct_answer: 'Protein',
        incorrect_answers: ['Carbohydrates', 'Fats', 'Vitamins']
      },
      {
        id: 'n48',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What is the primary function of potassium in the body?',
        correct_answer: 'Regulate fluid balance and muscle function',
        incorrect_answers: ['Build bones', 'Support vision', 'Improve skin health']
      },
      {
        id: 'n49',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which fat-soluble vitamin is an antioxidant that protects cell membranes?',
        correct_answer: 'Vitamin E',
        incorrect_answers: ['Vitamin A', 'Vitamin D', 'Vitamin K']
      },
      {
        id: 'n50',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which type of dietary fat is known to raise "bad" cholesterol levels?',
        correct_answer: 'Trans fat',
        incorrect_answers: ['Unsaturated fat', 'Omega-3 fat', 'Monounsaturated fat']
      },
      {
        id: 'n51',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which mineral is required for red blood cell production and immune function?',
        correct_answer: 'Iron',
        incorrect_answers: ['Zinc', 'Calcium', 'Magnesium']
      },
      {
        id: 'n52',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'What is the name of the process by which the body breaks down protein into amino acids?',
        correct_answer: 'Proteolysis',
        incorrect_answers: ['Lipolysis', 'Glycolysis', 'Oxidation']
      },
      {
        id: 'n53',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is commonly associated with immune system support?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin B12', 'Vitamin D', 'Vitamin E']
      },
      {
        id: 'n54',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which mineral is a major component of bone tissue besides calcium?',
        correct_answer: 'Phosphorus',
        incorrect_answers: ['Iron', 'Potassium', 'Zinc']
      },
      {
        id: 'n55',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'What is the primary function of Vitamin B12 in the body?',
        correct_answer: 'Support red blood cell formation and neurological function',
        incorrect_answers: ['Assist in collagen synthesis', 'Support muscle repair', 'Act as an antioxidant']
      },
      {
        id: 'n56',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which nutrient is required to build and maintain muscle tissue?',
        correct_answer: 'Protein',
        incorrect_answers: ['Fat', 'Carbohydrates', 'Fiber']
      },
      {
        id: 'n57',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which B vitamin is essential for energy metabolism and is commonly found in grains?',
        correct_answer: 'Thiamine (Vitamin B1)',
        incorrect_answers: ['Vitamin B6', 'Vitamin B12', 'Niacin']
      },
      {
        id: 'n58',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which amino acid is a precursor to the neurotransmitter serotonin?',
        correct_answer: 'Tryptophan',
        incorrect_answers: ['Leucine', 'Methionine', 'Phenylalanine']
      },
      {
        id: 'n59',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which mineral is primarily found in bananas and helps regulate blood pressure?',
        correct_answer: 'Potassium',
        incorrect_answers: ['Calcium', 'Magnesium', 'Zinc']
      },
      {
        id: 'n60',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What is the primary purpose of dietary fiber?',
        correct_answer: 'Promote healthy digestion',
        incorrect_answers: ['Provide energy', 'Build muscle', 'Store fat']
      },
      {
        id: 'n61',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which mineral is a component of the antioxidant enzyme superoxide dismutase?',
        correct_answer: 'Zinc',
        incorrect_answers: ['Copper', 'Selenium', 'Iron']
      },
      {
        id: 'n62',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin helps with the absorption of iron?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin D', 'Vitamin E', 'Vitamin K']
      },
      {
        id: 'n63',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which type of fatty acid is essential for brain development and found in walnuts?',
        correct_answer: 'Omega-3 fatty acids',
        incorrect_answers: ['Omega-6 fatty acids', 'Trans fats', 'Saturated fats']
      },
      {
        id: 'n64',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which vitamin deficiency is associated with night blindness?',
        correct_answer: 'Vitamin A',
        incorrect_answers: ['Vitamin B12', 'Vitamin C', 'Vitamin D']
      },
      {
        id: 'n65',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which food is a rich source of dietary fiber?',
        correct_answer: 'Oats',
        incorrect_answers: ['Chicken', 'Milk', 'Cheese']
      },
      {
        id: 'n66',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which vitamin is necessary for collagen production?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin A', 'Vitamin D', 'Vitamin E']
      },
      {
        id: 'n67',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which mineral is essential for the synthesis of thyroid hormones?',
        correct_answer: 'Iodine',
        incorrect_answers: ['Zinc', 'Iron', 'Calcium']
      },
      {
        id: 'n68',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which nutrient is primarily responsible for providing energy?',
        correct_answer: 'Carbohydrates',
        incorrect_answers: ['Proteins', 'Vitamins', 'Fats']
      },
      {
        id: 'n69',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'What is the role of Vitamin E in the body?',
        correct_answer: 'Acts as an antioxidant',
        incorrect_answers: ['Supports bone health', 'Aids in blood clotting', 'Boosts collagen production']
      },
      {
        id: 'n70',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which enzyme is responsible for breaking down lactose?',
        correct_answer: 'Lactase',
        incorrect_answers: ['Amylase', 'Lipase', 'Pepsin']
      },
      {
        id: 'n71',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is commonly found in citrus fruits?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin A', 'Vitamin D', 'Vitamin B12']
      },
      {
        id: 'n72',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which mineral is essential for muscle contraction and nerve transmission?',
        correct_answer: 'Calcium',
        incorrect_answers: ['Iron', 'Sodium', 'Magnesium']
      },
      {
        id: 'n73',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which vitamin deficiency can cause scurvy?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin A', 'Vitamin D', 'Vitamin B12']
      },
      {
        id: 'n74',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which macronutrient is the main source of energy for the body?',
        correct_answer: 'Carbohydrates',
        incorrect_answers: ['Protein', 'Fat', 'Fiber']
      },
      {
        id: 'n75',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which nutrient helps in the formation of hemoglobin in red blood cells?',
        correct_answer: 'Iron',
        incorrect_answers: ['Calcium', 'Vitamin D', 'Zinc']
      },
      {
        id: 'n76',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which vitamin is involved in the metabolism of carbohydrates, fats, and proteins?',
        correct_answer: 'Vitamin B6',
        incorrect_answers: ['Vitamin C', 'Vitamin D', 'Vitamin B12']
      },
      {
        id: 'n77',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which type of fat is generally considered beneficial for heart health?',
        correct_answer: 'Unsaturated fat',
        incorrect_answers: ['Saturated fat', 'Trans fat', 'Polyunsaturated fat']
      },
      {
        id: 'n78',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which mineral is required for the function of the antioxidant enzyme glutathione peroxidase?',
        correct_answer: 'Selenium',
        incorrect_answers: ['Zinc', 'Copper', 'Magnesium']
      },
      {
        id: 'n79',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which vitamin can be synthesized by intestinal bacteria?',
        correct_answer: 'Vitamin K',
        incorrect_answers: ['Vitamin B12', 'Vitamin C', 'Vitamin D']
      },
      {
        id: 'n80',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is essential for bone health and can be obtained from sunlight exposure?',
        correct_answer: 'Vitamin D',
        incorrect_answers: ['Vitamin C', 'Vitamin A', 'Vitamin B12']
      },
      {
        id: 'n81',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which of the following is a water-soluble vitamin?',
        correct_answer: 'Vitamin B12',
        incorrect_answers: ['Vitamin A', 'Vitamin D', 'Vitamin K']
      },
      {
        id: 'n82',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which macronutrient is digested primarily in the small intestine by the enzyme lipase?',
        correct_answer: 'Fat',
        incorrect_answers: ['Carbohydrates', 'Protein', 'Fiber']
      },
      {
        id: 'n83',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which food is high in dietary fiber?',
        correct_answer: 'Broccoli',
        incorrect_answers: ['Chicken', 'Milk', 'Rice']
      },
      {
        id: 'n84',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which mineral is essential for the formation of thyroid hormones?',
        correct_answer: 'Iodine',
        incorrect_answers: ['Iron', 'Zinc', 'Magnesium']
      },
      {
        id: 'n85',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which antioxidant is abundant in green tea and may help protect cells?',
        correct_answer: 'Catechins',
        incorrect_answers: ['Beta-carotene', 'Vitamin C', 'Lutein']
      },
      {
        id: 'n86',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is important for vision and immune function?',
        correct_answer: 'Vitamin A',
        incorrect_answers: ['Vitamin B12', 'Vitamin C', 'Vitamin E']
      },
      {
        id: 'n87',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which B vitamin is essential for red blood cell formation?',
        correct_answer: 'Vitamin B12',
        incorrect_answers: ['Vitamin B6', 'Vitamin B1', 'Vitamin B3']
      },
      {
        id: 'n88',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which nutrient is involved in the formation of collagen, which supports skin, tendons, and ligaments?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin A', 'Vitamin D', 'Vitamin E']
      },
      {
        id: 'n89',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which mineral is found in high amounts in dairy products?',
        correct_answer: 'Calcium',
        incorrect_answers: ['Iron', 'Potassium', 'Magnesium']
      },
      {
        id: 'n90',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which vitamin plays an essential role in the production of energy from food?',
        correct_answer: 'Vitamin B1 (Thiamine)',
        incorrect_answers: ['Vitamin C', 'Vitamin A', 'Vitamin D']
      },
      {
        id: 'n91',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which type of fiber dissolves in water and can help lower cholesterol?',
        correct_answer: 'Soluble fiber',
        incorrect_answers: ['Insoluble fiber', 'Resistant fiber', 'Non-digestible fiber']
      },
      {
        id: 'n92',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which mineral is required for maintaining a healthy heart rhythm?',
        correct_answer: 'Potassium',
        incorrect_answers: ['Iron', 'Calcium', 'Zinc']
      },
      {
        id: 'n93',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which vitamin is primarily found in leafy green vegetables and plays a role in blood clotting?',
        correct_answer: 'Vitamin K',
        incorrect_answers: ['Vitamin A', 'Vitamin B12', 'Vitamin D']
      },
      {
        id: 'n94',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which nutrient serves as a coenzyme in amino acid metabolism?',
        correct_answer: 'Vitamin B6',
        incorrect_answers: ['Vitamin B12', 'Vitamin C', 'Vitamin D']
      },
      {
        id: 'n95',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is essential for wound healing and immune health?',
        correct_answer: 'Vitamin C',
        incorrect_answers: ['Vitamin E', 'Vitamin D', 'Vitamin A']
      },
      {
        id: 'n96',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which nutrient acts as an antioxidant to protect cell membranes from damage?',
        correct_answer: 'Vitamin E',
        incorrect_answers: ['Vitamin A', 'Vitamin C', 'Vitamin D']
      },
      {
        id: 'n97',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which essential amino acid is required for the production of serotonin?',
        correct_answer: 'Tryptophan',
        incorrect_answers: ['Phenylalanine', 'Glutamine', 'Tyrosine']
      },
      {
        id: 'n98',
        topic: 'Nutrition',
        difficulty: 'easy',
        question: 'Which vitamin is crucial for strong bones and teeth?',
        correct_answer: 'Vitamin D',
        incorrect_answers: ['Vitamin B12', 'Vitamin A', 'Vitamin C']
      },
      {
        id: 'n99',
        topic: 'Nutrition',
        difficulty: 'medium',
        question: 'Which mineral is required for the production of ATP, the energy molecule?',
        correct_answer: 'Magnesium',
        incorrect_answers: ['Iron', 'Calcium', 'Potassium']
      },
      {
        id: 'n100',
        topic: 'Nutrition',
        difficulty: 'hard',
        question: 'Which vitamin is known to act as an antioxidant and support immune function?',
        correct_answer: 'Vitamin E',
        incorrect_answers: ['Vitamin K', 'Vitamin B12', 'Vitamin A']
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