import React, { useState, useEffect } from 'react';

const TriviaGame = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const categories = [
    {
      id: 'science',
      name: 'Science',
      icon: '🧪',
      description: 'Chemistry, Physics & Biology'
    },
    {
      id: 'space',
      name: 'Space',
      icon: '🚀',
      description: 'Astronomy & Space Exploration'
    },
    {
      id: 'literature',
      name: 'Literature',
      icon: '📚',
      description: 'Books, Authors & Poetry'
    },
    {
      id: 'history',
      name: 'History',
      icon: '🏛️',
      description: 'World History & Events'
    },
    {
      id: 'geography',
      name: 'Geography',
      icon: '🌍',
      description: 'Countries, Cities & Landmarks'
    },
    {
      id: 'arts',
      name: 'Arts',
      icon: '🎨',
      description: 'Painting, Music & Culture'
    }
  ];

  const questionBank = {
    science: [
      
{
question: "What is the chemical symbol for Gold?",
options: ["Au", "Ag", "Go", "Gd"],
correct: 0
},
{
question: "Which gas makes up approximately 78% of Earth's atmosphere?",
options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
correct: 1
},
{
question: "What is the hardest natural substance on Earth?",
options: ["Steel", "Iron", "Diamond", "Quartz"],
correct: 2
},
{
question: "How many bones are in an adult human body?",
options: ["196", "206", "216", "226"],
correct: 1
},
{
question: "What is the speed of light in a vacuum?",
options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"],
correct: 0
},
{
question: "What is the chemical formula for water?",
options: ["H2O", "CO2", "NaCl", "CH4"],
correct: 0
},
{
question: "Which planet is closest to the Sun?",
options: ["Venus", "Earth", "Mercury", "Mars"],
correct: 2
},
{
question: "What is the atomic number of carbon?",
options: ["4", "6", "8", "12"],
correct: 1
},
{
question: "Which organ produces insulin?",
options: ["Liver", "Pancreas", "Kidney", "Heart"],
correct: 1
},
{
question: "What is the most abundant element in the universe?",
options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
correct: 2
},
{
question: "How many chambers does a human heart have?",
options: ["2", "3", "4", "5"],
correct: 2
},
{
question: "What is the pH of pure water?",
options: ["6", "7", "8", "9"],
correct: 1
},
{
question: "Which blood type is known as the universal donor?",
options: ["A", "B", "AB", "O"],
correct: 3
},
{
question: "What is the smallest unit of matter?",
options: ["Molecule", "Atom", "Electron", "Proton"],
correct: 1
},
{
question: "Which force keeps planets in orbit around the Sun?",
options: ["Electromagnetic", "Nuclear", "Gravitational", "Friction"],
correct: 2
},
{
question: "What is the chemical symbol for sodium?",
options: ["So", "Na", "Sd", "S"],
correct: 1
},
{
question: "How many pairs of chromosomes do humans have?",
options: ["22", "23", "24", "25"],
correct: 1
},
{
question: "What is the boiling point of water at sea level?",
options: ["90°C", "95°C", "100°C", "105°C"],
correct: 2
},
{
question: "Which part of the cell contains DNA?",
options: ["Cytoplasm", "Nucleus", "Ribosome", "Mitochondria"],
correct: 1
},
{
question: "What is the largest organ in the human body?",
options: ["Liver", "Brain", "Lungs", "Skin"],
correct: 3
},
{
question: "What is the study of earthquakes called?",
options: ["Geology", "Seismology", "Meteorology", "Astronomy"],
correct: 1
},
{
question: "How many bones are in a newborn baby?",
options: ["206", "270", "300", "350"],
correct: 1
},
{
question: "What is the chemical formula for table salt?",
options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
correct: 0
},
{
question: "Which vitamin is produced when skin is exposed to sunlight?",
options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
correct: 3
},
{
question: "What is the powerhouse of the cell?",
options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
correct: 2
},
{
question: "Which element has the highest melting point?",
options: ["Iron", "Tungsten", "Carbon", "Platinum"],
correct: 1
},
{
question: "What is the normal human body temperature in Celsius?",
options: ["35°C", "36°C", "37°C", "38°C"],
correct: 2
},
{
question: "Which type of radiation has the longest wavelength?",
options: ["X-rays", "Gamma rays", "Radio waves", "UV rays"],
correct: 2
},
{
question: "What is the chemical symbol for iron?",
options: ["Ir", "Fe", "In", "I"],
correct: 1
},
{
question: "How many teeth does an adult human typically have?",
options: ["28", "30", "32", "34"],
correct: 2
},
{
question: "What is the study of fungi called?",
options: ["Botany", "Mycology", "Zoology", "Microbiology"],
correct: 1
},
{
question: "Which gas is released during photosynthesis?",
options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
correct: 2
},
{
question: "What is the hardest bone in the human body?",
options: ["Femur", "Skull", "Jaw", "Spine"],
correct: 2
},
{
question: "Which scientist developed the theory of relativity?",
options: ["Newton", "Darwin", "Einstein", "Galileo"],
correct: 2
},
{
question: "What is the chemical formula for methane?",
options: ["CH4", "C2H6", "C3H8", "C4H10"],
correct: 0
},
{
question: "How many valves does the human heart have?",
options: ["2", "3", "4", "5"],
correct: 2
},
{
question: "What is the most common element in Earth's crust?",
options: ["Silicon", "Aluminum", "Iron", "Oxygen"],
correct: 3
},
{
question: "Which blood vessel carries blood away from the heart?",
options: ["Vein", "Artery", "Capillary", "Aorta"],
correct: 1
},
{
question: "What is the study of weather called?",
options: ["Geology", "Meteorology", "Astronomy", "Oceanography"],
correct: 1
},
{
question: "Which organelle is responsible for protein synthesis?",
options: ["Nucleus", "Ribosome", "Lysosome", "Vacuole"],
correct: 1
},
{
question: "What is the chemical symbol for potassium?",
options: ["P", "K", "Po", "Pt"],
correct: 1
},
{
question: "How many layers does human skin have?",
options: ["2", "3", "4", "5"],
correct: 1
},
{
question: "What is the fastest muscle in the human body?",
options: ["Heart", "Tongue", "Eye", "Hand"],
correct: 2
},
{
question: "Which gas makes up about 21% of Earth's atmosphere?",
options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
correct: 1
},
{
question: "What is the largest artery in the human body?",
options: ["Pulmonary artery", "Carotid artery", "Aorta", "Femoral artery"],
correct: 2
},
{
question: "Which element is essential for thyroid function?",
options: ["Iron", "Calcium", "Iodine", "Zinc"],
correct: 2
},
{
question: "What is the term for animals that eat only plants?",
options: ["Carnivores", "Herbivores", "Omnivores", "Insectivores"],
correct: 1
},
{
question: "What is the freezing point of water in Fahrenheit?",
options: ["0°F", "32°F", "100°F", "212°F"],
correct: 1
},
{
question: "Which scientist is known for the laws of motion?",
options: ["Galileo", "Newton", "Einstein", "Kepler"],
correct: 1
},
{
question: "What is the process by which plants make food?",
options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
correct: 1
},
{
question: "Which planet has the strongest gravity?",
options: ["Earth", "Jupiter", "Saturn", "Neptune"],
correct: 1
}
      
    ],
    space: [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        correct: 2
      },
      {
        question: "How many moons does Jupiter have?",
        options: ["67", "79", "82", "95"],
        correct: 2
      },
      {
        question: "What is the closest star to Earth?",
        options: ["Alpha Centauri", "Sirius", "The Sun", "Proxima Centauri"],
        correct: 2
      },
      {
        question: "Which space agency launched the Hubble Space Telescope?",
        options: ["ESA", "NASA", "Roscosmos", "JAXA"],
        correct: 1
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correct: 1
      }
    ],
    literature: [
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Emily Dickinson", "Jane Austen", "Virginia Woolf"],
        correct: 2
      },
      {
        question: "Which Shakespeare play features the character Hamlet?",
        options: ["Macbeth", "Othello", "King Lear", "Hamlet"],
        correct: 3
      },
      {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Kurt Vonnegut"],
        correct: 1
      },
      {
        question: "What is the first book in the Harry Potter series?",
        options: ["Chamber of Secrets", "Philosopher's Stone", "Prisoner of Azkaban", "Goblet of Fire"],
        correct: 1
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Toni Morrison", "Maya Angelou", "Zora Neale Hurston"],
        correct: 0
      }
    ],
    history: [
      {
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correct: 1
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correct: 2
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        correct: 1
      },
      {
        question: "Which ancient wonder of the world was located in Alexandria?",
        options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria", "Statue of Zeus"],
        correct: 2
      },
      {
        question: "Who was the first person to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
        correct: 1
      }
    ],
    geography: [
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2
      },
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
        correct: 1
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
        correct: 2
      },
      {
        question: "Which mountain range contains Mount Everest?",
        options: ["Andes", "Rocky Mountains", "Alps", "Himalayas"],
        correct: 3
      }
    ],
    arts: [
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correct: 2
      },
      {
        question: "Which composer wrote 'The Four Seasons'?",
        options: ["Mozart", "Beethoven", "Bach", "Vivaldi"],
        correct: 3
      },
      {
        question: "What art movement was Pablo Picasso associated with?",
        options: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
        correct: 1
      },
      {
        question: "Which museum houses the Mona Lisa?",
        options: ["British Museum", "Metropolitan Museum", "Louvre", "Uffizi Gallery"],
        correct: 2
      },
      {
        question: "Who sculpted 'David'?",
        options: ["Donatello", "Michelangelo", "Bernini", "Rodin"],
        correct: 1
      }
    ],
    sports: [
      {
        question: "How often are the Summer Olympic Games held?",
        options: ["Every 2 years", "Every 4 years", "Every 5 years", "Every 6 years"],
        correct: 1
      },
      {
        question: "In which sport would you perform a slam dunk?",
        options: ["Tennis", "Baseball", "Basketball", "Volleyball"],
        correct: 2
      },
      {
        question: "How many players are on a soccer team on the field at one time?",
        options: ["9", "10", "11", "12"],
        correct: 2
      },
      {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Argentina", "Italy", "Brazil"],
        correct: 3
      },
      {
        question: "In golf, what is the term for one stroke under par?",
        options: ["Eagle", "Birdie", "Bogey", "Albatross"],
        correct: 1
      }
    ]
  };

  const getCurrentQuestions = () => {
    return questionBank[selectedCategory] || [];
  };

  const handleCategorySelect = (categoryId) => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedCategory(categoryId);
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setGameFinished(false);
      setFadeIn(true);
    }, 300);
  };

  const handleAnswerClick = (answerIndex) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === getCurrentQuestions()[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setFadeIn(false);
    
    setTimeout(() => {
      const questions = getCurrentQuestions();
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setFadeIn(true);
      } else {
        setGameFinished(true);
        setFadeIn(true);
      }
    }, 300);
  };

  const resetToCategories = () => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedCategory(null);
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setGameFinished(false);
      setFadeIn(true);
    }, 300);
  };

  const getScoreMessage = () => {
    const questions = getCurrentQuestions();
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent! 🌟";
    if (percentage >= 60) return "Great job! 🎉";
    if (percentage >= 40) return "Good effort! 👍";
    return "Keep trying! 💪";
  };

  // Category Selection Screen
  if (!selectedCategory) {
    return (
      <div className="min-h-screen w-full bg-black relative">
        {/* Midnight Mist */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
            `,
          }}
        />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-white mb-4">Trivia Game</h1>
            <p className="text-gray-300 text-lg">Choose your category to begin</p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-6 hover:border-indigo-400/60 hover:bg-gray-700/40 transition-all duration-300 text-center group aspect-square flex flex-col items-center justify-center"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="text-sm font-medium text-white">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Game Finished Screen
  if (gameFinished) {
    const questions = getCurrentQuestions();
    const selectedCat = categories.find(cat => cat.id === selectedCategory);
    
    return (
      <div className="min-h-screen w-full bg-black relative">
        {/* Midnight Mist */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
            `,
          }}
        />
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className={`bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transition-all duration-500 ${fadeIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <div className="text-6xl mb-4">{selectedCat?.icon}</div>
            <h2 className="text-2xl font-light text-white mb-2">{selectedCat?.name} Complete!</h2>
            <p className="text-lg text-gray-300 mb-6">{getScoreMessage()}</p>
            <div className="text-4xl font-light text-indigo-400 mb-8">
              {score} / {questions.length}
            </div>
            <div className="space-y-3">
              <button
                onClick={() => handleCategorySelect(selectedCategory)}
                className="w-full bg-indigo-600/80 hover:bg-indigo-700/80 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                Play Again
              </button>
              <button
                onClick={resetToCategories}
                className="w-full bg-gray-700/60 hover:bg-gray-600/60 text-gray-200 px-8 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                Choose Category
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Game Screen
  const questions = getCurrentQuestions();
  const selectedCat = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Midnight Mist */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
          `,
        }}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className={`bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl p-8 max-w-2xl w-full transition-all duration-500 ${fadeIn ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{selectedCat?.icon}</span>
              <div>
                <div className="text-sm text-gray-300">{selectedCat?.name}</div>
                <div className="text-sm text-gray-400">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              Score: {score}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700/50 rounded-full h-1 mb-8">
            <div 
              className="bg-indigo-500 h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-light text-white mb-8 leading-relaxed">
            {questions[currentQuestion].question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left rounded-2xl border-2 transition-all duration-200 ";
              
              if (selectedAnswer === null) {
                buttonClass += "border-gray-600/50 hover:border-indigo-400/60 hover:bg-gray-700/40 bg-gray-800/30 text-white";
              } else {
                if (index === questions[currentQuestion].correct) {
                  buttonClass += "border-green-400/60 bg-green-900/30 text-green-200";
                } else if (index === selectedAnswer) {
                  buttonClass += "border-red-400/60 bg-red-900/30 text-red-200";
                } else {
                  buttonClass += "border-gray-600/30 bg-gray-800/20 text-gray-400";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={buttonClass}
                  disabled={selectedAnswer !== null}
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {showResult && (
            <div className="text-center">
              <button
                onClick={nextQuestion}
                className="bg-indigo-600/80 hover:bg-indigo-700/80 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium backdrop-blur-sm"
              >
                {currentQuestion + 1 === questions.length ? 'Finish' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TriviaGame;
