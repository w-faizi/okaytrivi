import React, { useState } from 'react';

const TriviaGame = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const [currentQuestions, setCurrentQuestions] = useState([]);

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

  // Your existing questionBank with all categories...
  const questionBank = {
    // Use all the category data I provided in previous messages
    science: [/*
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
]

*/],
    space: [/* question: "Which planet is known as the Red Planet?",
options: ["Venus", "Jupiter", "Mars", "Saturn"],
correct: 2
},
{
question: "How many moons does Jupiter currently have?",
options: ["67", "79", "82", "95"],
correct: 3
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
},
{
question: "Which planet has the most extensive ring system?",
options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
correct: 1
},
{
question: "What is the name of our galaxy?",
options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
correct: 1
},
{
question: "How long does it take light from the Sun to reach Earth?",
options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
correct: 1
},
{
question: "Which is the hottest planet in our solar system?",
options: ["Mercury", "Venus", "Mars", "Jupiter"],
correct: 1
},
{
question: "What is the Great Red Spot on Jupiter?",
options: ["A moon", "A mountain", "A storm", "A crater"],
correct: 2
},
{
question: "Which planet rotates on its side?",
options: ["Mars", "Jupiter", "Saturn", "Uranus"],
correct: 3
},
{
question: "What is the smallest planet in our solar system?",
options: ["Mercury", "Venus", "Mars", "Pluto"],
correct: 0
},
{
question: "How many Earth days does it take Mars to orbit the Sun?",
options: ["365", "425", "687", "778"],
correct: 2
},
{
question: "What is the asteroid belt located between?",
options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus"],
correct: 1
},
{
question: "Which moon is the largest in our solar system?",
options: ["Titan", "Ganymede", "Io", "Europa"],
correct: 1
},
{
question: "What causes the Aurora Borealis (Northern Lights)?",
options: ["Solar wind", "Moon phases", "Volcanic activity", "Ocean currents"],
correct: 0
},
{
question: "How many planets are in our solar system?",
options: ["7", "8", "9", "10"],
correct: 1
},
{
question: "What is the boundary around a black hole called?",
options: ["Event horizon", "Photon sphere", "Ergosphere", "Singularity"],
correct: 0
},
{
question: "Which planet has the fastest orbital speed?",
options: ["Mercury", "Venus", "Earth", "Mars"],
correct: 0
},
{
question: "What is the name of Saturn's largest moon?",
options: ["Enceladus", "Titan", "Mimas", "Iapetus"],
correct: 1
},
{
question: "How many astronauts have walked on the Moon?",
options: ["6", "8", "10", "12"],
correct: 3
},
{
question: "What is the temperature at the core of the Sun?",
options: ["1 million°C", "15 million°C", "50 million°C", "100 million°C"],
correct: 1
},
{
question: "Which space mission first landed humans on the Moon?",
options: ["Apollo 10", "Apollo 11", "Apollo 12", "Apollo 13"],
correct: 1
},
{
question: "What is the most distant planet from the Sun?",
options: ["Uranus", "Neptune", "Pluto", "Eris"],
correct: 1
},
{
question: "How long is a day on Venus?",
options: ["24 hours", "243 Earth days", "365 Earth days", "687 Earth days"],
correct: 1
},
{
question: "What type of galaxy is the Milky Way?",
options: ["Elliptical", "Spiral", "Irregular", "Dwarf"],
correct: 1
},
{
question: "Which planet has the strongest magnetic field?",
options: ["Earth", "Jupiter", "Saturn", "Neptune"],
correct: 1
},
{
question: "What is the name of the first artificial satellite?",
options: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Telstar 1"],
correct: 0
},
{
question: "How many moons does Mars have?",
options: ["0", "1", "2", "3"],
correct: 2
},
{
question: "What is the Kuiper Belt?",
options: ["An asteroid belt", "A region of comets", "A type of nebula", "A black hole"],
correct: 1
},
{
question: "Which planet takes the longest to complete one rotation?",
options: ["Mercury", "Venus", "Jupiter", "Saturn"],
correct: 1
},
{
question: "What is the name of the largest volcano in the solar system?",
options: ["Mount Vesuvius", "Olympus Mons", "Mauna Loa", "Mount Etna"],
correct: 1
},
{
question: "How far is the nearest star (other than the Sun) from Earth?",
options: ["1.3 light-years", "4.2 light-years", "8.6 light-years", "25 light-years"],
correct: 1
},
{
question: "What is the name of Jupiter's largest moon?",
options: ["Europa", "Io", "Ganymede", "Callisto"],
correct: 2
},
{
question: "Which space telescope was launched in 2021?",
options: ["Hubble", "Spitzer", "James Webb", "Kepler"],
correct: 2
},
{
question: "What is the escape velocity from Earth?",
options: ["7.9 km/s", "11.2 km/s", "16.7 km/s", "25.0 km/s"],
correct: 1
},
{
question: "Which planet has the shortest day?",
options: ["Mercury", "Jupiter", "Saturn", "Neptune"],
correct: 1
},
{
question: "What is the name of the region where the solar wind slows down?",
options: ["Heliosphere", "Heliopause", "Heliosheath", "Solar boundary"],
correct: 2
},
{
question: "How many Earth masses would equal Jupiter's mass?",
options: ["95", "142", "318", "564"],
correct: 2
},
{
question: "Which comet is visible from Earth every 75-76 years?",
options: ["Hale-Bopp", "Halley's Comet", "Hyakutake", "McNaught"],
correct: 1
},
{
question: "What is the name of the first space station?",
options: ["Mir", "Skylab", "Salyut 1", "ISS"],
correct: 2
},
{
question: "Which planet has the most eccentric orbit?",
options: ["Mercury", "Venus", "Mars", "Pluto"],
correct: 0
},
{
question: "What is the age of the universe?",
options: ["4.6 billion years", "10.8 billion years", "13.8 billion years", "20.1 billion years"],
correct: 2
},
{
question: "Which moon of Jupiter shows evidence of subsurface oceans?",
options: ["Io", "Europa", "Ganymede", "Callisto"],
correct: 1
},
{
question: "What is the name of the point where solar wind meets interstellar space?",
options: ["Termination shock", "Heliopause", "Bow shock", "Solar maximum"],
correct: 1
},
{
question: "How many light-years across is the Milky Way galaxy?",
options: ["50,000", "100,000", "200,000", "500,000"],
correct: 1
},
{
question: "Which planet has diamond rain in its atmosphere?",
options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
correct: 3
},
{
question: "What is the name of the spacecraft that first reached interstellar space?",
options: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"],
correct: 0
},
{
question: "How many times more massive is the Sun compared to Earth?",
options: ["109 times", "333,000 times", "1 million times", "1.3 million times"],
correct: 1
},
{
question: "Which type of star will the Sun eventually become?",
options: ["Red giant", "White dwarf", "Neutron star", "Black hole"],
correct: 1
},
{
question: "What is the name of Mars' two moons?",
options: ["Phobos and Deimos", "Titan and Europa", "Io and Ganymede", "Enceladus and Mimas"],
correct: 0
}
]
*/],
    literature: [/* question: "Who wrote 'Pride and Prejudice'?",
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
},
{
question: "Which novel begins with 'Call me Ishmael'?",
options: ["The Great Gatsby", "Moby Dick", "Wuthering Heights", "Jane Eyre"],
correct: 1
},
{
question: "Who wrote 'The Catcher in the Rye'?",
options: ["J.D. Salinger", "Jack Kerouac", "Allen Ginsberg", "William Burroughs"],
correct: 0
},
{
question: "Which poet wrote 'The Raven'?",
options: ["Walt Whitman", "Edgar Allan Poe", "Robert Frost", "Emily Dickinson"],
correct: 1
},
{
question: "Who wrote 'One Hundred Years of Solitude'?",
options: ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Pablo Neruda"],
correct: 1
},
{
question: "What is the opening line of 'A Tale of Two Cities'?",
options: ["It was the best of times", "Call me Ishmael", "Happy families are all alike", "Last night I dreamt"],
correct: 0
},
{
question: "Who wrote 'The Great Gatsby'?",
options: ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner", "John Steinbeck"],
correct: 1
},
{
question: "Which novel features the character Jay Gatsby?",
options: ["The Sun Also Rises", "The Great Gatsby", "Tender Is the Night", "This Side of Paradise"],
correct: 1
},
{
question: "Who wrote 'Wuthering Heights'?",
options: ["Charlotte Brontë", "Emily Brontë", "Anne Brontë", "Jane Austen"],
correct: 1
},
{
question: "What is Shakespeare's longest play?",
options: ["Macbeth", "King Lear", "Hamlet", "Othello"],
correct: 2
},
{
question: "Who wrote 'Lord of the Flies'?",
options: ["William Golding", "George Orwell", "Aldous Huxley", "Ray Bradbury"],
correct: 0
},
{
question: "Which author created Sherlock Holmes?",
options: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Raymond Chandler"],
correct: 1
},
{
question: "Who wrote 'Brave New World'?",
options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut"],
correct: 1
},
{
question: "What is the name of Odysseus's wife in 'The Odyssey'?",
options: ["Helen", "Penelope", "Circe", "Athena"],
correct: 1
},
{
question: "Who wrote 'Of Mice and Men'?",
options: ["William Faulkner", "Ernest Hemingway", "John Steinbeck", "Harper Lee"],
correct: 2
},
{
question: "Which novel begins with 'It is a truth universally acknowledged'?",
options: ["Emma", "Sense and Sensibility", "Pride and Prejudice", "Mansfield Park"],
correct: 2
},
{
question: "Who wrote 'The Sound and the Fury'?",
options: ["Ernest Hemingway", "William Faulkner", "F. Scott Fitzgerald", "John Steinbeck"],
correct: 1
},
{
question: "What is the first book in 'The Chronicles of Narnia' series?",
options: ["The Lion, the Witch and the Wardrobe", "The Magician's Nephew", "Prince Caspian", "The Horse and His Boy"],
correct: 0
},
{
question: "Who wrote 'Jane Eyre'?",
options: ["Emily Brontë", "Charlotte Brontë", "Anne Brontë", "George Eliot"],
correct: 1
},
{
question: "Which author wrote 'The Old Man and the Sea'?",
options: ["William Faulkner", "Ernest Hemingway", "John Steinbeck", "F. Scott Fitzgerald"],
correct: 1
},
{
question: "Who wrote 'Frankenstein'?",
options: ["Mary Shelley", "Bram Stoker", "Edgar Allan Poe", "Washington Irving"],
correct: 0
},
{
question: "What is the name of the hobbit in Tolkien's 'The Hobbit'?",
options: ["Frodo Baggins", "Bilbo Baggins", "Samwise Gamgee", "Peregrin Took"],
correct: 1
},
{
question: "Who wrote 'Don Quixote'?",
options: ["Federico García Lorca", "Miguel de Cervantes", "Pedro Calderón", "Lope de Vega"],
correct: 1
},
{
question: "Which play features the characters Romeo and Juliet?",
options: ["Hamlet", "Macbeth", "Romeo and Juliet", "A Midsummer Night's Dream"],
correct: 2
},
{
question: "Who wrote 'The Grapes of Wrath'?",
options: ["William Faulkner", "Ernest Hemingway", "John Steinbeck", "Harper Lee"],
correct: 2
},
{
question: "What is the name of Captain Ahab's ship in 'Moby Dick'?",
options: ["Nautilus", "Pequod", "Beagle", "Endeavour"],
correct: 1
},
{
question: "Who wrote 'Crime and Punishment'?",
options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
correct: 1
},
{
question: "Which author created the character James Bond?",
options: ["John le Carré", "Ian Fleming", "Graham Greene", "Frederick Forsyth"],
correct: 1
},
{
question: "Who wrote 'The Picture of Dorian Gray'?",
options: ["Oscar Wilde", "George Bernard Shaw", "James Joyce", "Virginia Woolf"],
correct: 0
},
{
question: "What is the name of the narrator in 'The Great Gatsby'?",
options: ["Jay Gatsby", "Tom Buchanan", "Nick Carraway", "George Wilson"],
correct: 2
},
{
question: "Who wrote 'War and Peace'?",
options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
correct: 1
},
{
question: "Which poet wrote 'The Waste Land'?",
options: ["Ezra Pound", "T.S. Eliot", "W.H. Auden", "Robert Frost"],
correct: 1
},
{
question: "Who wrote 'The Metamorphosis'?",
options: ["Thomas Mann", "Franz Kafka", "Hermann Hesse", "Rainer Maria Rilke"],
correct: 1
},
{
question: "What is the name of Atticus Finch's daughter in 'To Kill a Mockingbird'?",
options: ["Scout", "Jem", "Dill", "Mayella"],
correct: 0
},
{
question: "Who wrote 'Ulysses'?",
options: ["James Joyce", "Virginia Woolf", "D.H. Lawrence", "E.M. Forster"],
correct: 0
},
{
question: "Which author wrote 'The Canterbury Tales'?",
options: ["William Shakespeare", "Geoffrey Chaucer", "Edmund Spenser", "Christopher Marlowe"],
correct: 1
},
{
question: "Who wrote 'Animal Farm'?",
options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Kurt Vonnegut"],
correct: 1
},
{
question: "What is the first line of Dante's 'Inferno'?",
options: ["In the middle of the journey of our life", "Abandon all hope", "Call me Ishmael", "It was the best of times"],
correct: 0
},
{
question: "Who wrote 'The Scarlet Letter'?",
options: ["Herman Melville", "Nathaniel Hawthorne", "Edgar Allan Poe", "Washington Irving"],
correct: 1
},
{
question: "Which author created the detective Hercule Poirot?",
options: ["Arthur Conan Doyle", "Agatha Christie", "Dorothy Sayers", "Raymond Chandler"],
correct: 1
},
{
question: "Who wrote 'Slaughterhouse-Five'?",
options: ["Joseph Heller", "Kurt Vonnegut", "Tom Robbins", "Philip K. Dick"],
correct: 1
},
{
question: "What is the name of the white whale in 'Moby Dick'?",
options: ["Leviathan", "Moby Dick", "Pequod", "Queequeg"],
correct: 1
},
{
question: "Who wrote 'One Flew Over the Cuckoo's Nest'?",
options: ["Jack Kerouac", "Ken Kesey", "Hunter S. Thompson", "Tom Wolfe"],
correct: 1
},
{
question: "Which Shakespeare play features the character Iago?",
options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
correct: 2
},
{
question: "Who wrote 'The Sun Also Rises'?",
options: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "John Dos Passos"],
correct: 1
},
{
question: "What is the name of the protagonist in 'The Catcher in the Rye'?",
options: ["Holden Caulfield", "Phoebe Caulfield", "Allie Caulfield", "D.B. Caulfield"],
correct: 0
}
]
*/],
    history: [/* question: "In which year did World War II end?",
options: ["1944", "1945", "1946", "1947"],
correct: 1
},
{
question: "Who was the first President of the United States?",
options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
correct: 2
},
{
question: "Which ancient wonder of the world was located in Alexandria?",
options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Statue of Zeus"],
correct: 1
},
{
question: "In which year did the Berlin Wall fall?",
options: ["1987", "1988", "1989", "1990"],
correct: 2
},
{
question: "Who was known as the 'Iron Lady'?",
options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
correct: 1
},
{
question: "Which empire was ruled by Julius Caesar?",
options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
correct: 1
},
{
question: "In which year did the Titanic sink?",
options: ["1910", "1911", "1912", "1913"],
correct: 2
},
{
question: "Who painted the ceiling of the Sistine Chapel?",
options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
correct: 1
},
{
question: "Which country was NOT part of the Axis Powers in WWII?",
options: ["Germany", "Italy", "Japan", "Soviet Union"],
correct: 3
},
{
question: "Who was the last Pharaoh of Ancient Egypt?",
options: ["Tutankhamun", "Ramses II", "Cleopatra VII", "Akhenaten"],
correct: 2
},
{
question: "In which city was JFK assassinated?",
options: ["Houston", "Austin", "Dallas", "San Antonio"],
correct: 2
},
{
question: "Which war was fought between 1861-1865 in the United States?",
options: ["Revolutionary War", "War of 1812", "Civil War", "Spanish-American War"],
correct: 2
},
{
question: "Who was the British Prime Minister during most of WWII?",
options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
correct: 1
},
{
question: "In which year did Columbus first reach the Americas?",
options: ["1490", "1491", "1492", "1493"],
correct: 2
},
{
question: "Which ancient civilization built Machu Picchu?",
options: ["Aztec", "Maya", "Inca", "Olmec"],
correct: 2
},
{
question: "Who was the first man on the moon?",
options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
correct: 1
},
{
question: "Which event started World War I?",
options: ["Invasion of Poland", "Attack on Pearl Harbor", "Assassination of Archduke Franz Ferdinand", "Sinking of Lusitania"],
correct: 2
},
{
question: "In which year was the Declaration of Independence signed?",
options: ["1774", "1775", "1776", "1777"],
correct: 2
},
{
question: "Who was the Egyptian queen known for her relationships with Julius Caesar and Mark Antony?",
options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Ankhesenamun"],
correct: 2
},
{
question: "Which city was the capital of the Byzantine Empire?",
options: ["Athens", "Rome", "Constantinople", "Alexandria"],
correct: 2
},
{
question: "In which year did the French Revolution begin?",
options: ["1787", "1788", "1789", "1790"],
correct: 2
},
{
question: "Who was the first woman to fly solo across the Atlantic?",
options: ["Amelia Earhart", "Bessie Coleman", "Jacqueline Cochran", "Harriet Quimby"],
correct: 0
},
{
question: "Which battle is considered the turning point of WWII in Europe?",
options: ["Battle of Britain", "D-Day", "Battle of Stalingrad", "Battle of Midway"],
correct: 2
},
{
question: "Who was the leader of the Soviet Union during WWII?",
options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
correct: 1
},
{
question: "In which year was the United Nations founded?",
options: ["1944", "1945", "1946", "1947"],
correct: 1
},
{
question: "Which ancient Greek city-state was known for its military prowess?",
options: ["Athens", "Sparta", "Thebes", "Corinth"],
correct: 1
},
{
question: "Who was the first Emperor of Rome?",
options: ["Julius Caesar", "Augustus", "Nero", "Trajan"],
correct: 1
},
{
question: "In which year did the stock market crash, leading to the Great Depression?",
options: ["1927", "1928", "1929", "1930"],
correct: 2
},
{
question: "Which explorer is credited with discovering America?",
options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Amerigo Vespucci"],
correct: 1
},
{
question: "Who was the longest-reigning British monarch before Elizabeth II?",
options: ["George III", "Victoria", "Edward VII", "George V"],
correct: 1
},
{
question: "Which war was known as 'The Great War'?",
options: ["World War I", "World War II", "Napoleonic Wars", "Seven Years' War"],
correct: 0
},
{
question: "In which year was the Berlin Wall built?",
options: ["1959", "1960", "1961", "1962"],
correct: 2
},
{
question: "Who was the leader of Nazi Germany?",
options: ["Heinrich Himmler", "Adolf Hitler", "Joseph Goebbels", "Hermann Göring"],
correct: 1
},
{
question: "Which ancient wonder was located in Babylon?",
options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Temple of Artemis"],
correct: 2
},
{
question: "In which year did the American Civil War end?",
options: ["1864", "1865", "1866", "1867"],
correct: 1
},
{
question: "Who was the first black President of South Africa?",
options: ["Desmond Tutu", "Nelson Mandela", "Steve Biko", "Oliver Tambo"],
correct: 1
},
{
question: "Which volcano destroyed Pompeii?",
options: ["Mount Etna", "Mount Vesuvius", "Mount Stromboli", "Mount Vulcano"],
correct: 1
},
{
question: "In which year did the Russian Revolution occur?",
options: ["1916", "1917", "1918", "1919"],
correct: 1
},
{
question: "Who was the first person to circumnavigate the globe?",
options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Francis Drake"],
correct: 2
},
{
question: "Which treaty ended World War I?",
options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Vienna", "Treaty of Ghent"],
correct: 1
},
{
question: "In which year was the Magna Carta signed?",
options: ["1214", "1215", "1216", "1217"],
correct: 1
},
{
question: "Who was the first woman Prime Minister of the United Kingdom?",
options: ["Theresa May", "Margaret Thatcher", "Elizabeth I", "Victoria"],
correct: 1
},
{
question: "Which ancient civilization built the pyramids of Giza?",
options: ["Mesopotamian", "Egyptian", "Greek", "Roman"],
correct: 1
},
{
question: "In which year did the Holocaust end?",
options: ["1944", "1945", "1946", "1947"],
correct: 1
},
{
question: "Who was the youngest elected President of the United States?",
options: ["Theodore Roosevelt", "John F. Kennedy", "Bill Clinton", "Barack Obama"],
correct: 1
},
{
question: "Which empire was known as the 'Sick Man of Europe'?",
options: ["Russian Empire", "Austro-Hungarian Empire", "Ottoman Empire", "German Empire"],
correct: 2
},
{
question: "In which year was the Suez Canal opened?",
options: ["1867", "1868", "1869", "1870"],
correct: 2
},
{
question: "Who was the founder of the Mongol Empire?",
options: ["Kublai Khan", "Genghis Khan", "Ögedei Khan", "Möngke Khan"],
correct: 1
},
{
question: "Which battle marked the end of Napoleon's rule?",
options: ["Battle of Austerlitz", "Battle of Waterloo", "Battle of Trafalgar", "Battle of Leipzig"],
correct: 1
},
{
question: "In which year did India gain independence from Britain?",
options: ["1946", "1947", "1948", "1949"],
correct: 1
}
]
*/],
    geography: [/* question: "What is the capital of Australia?",
options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
correct: 2
},
{
question: "Which is the longest river in the world?",
options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
correct: 1
},
{
question: "What is the largest continent?",
options: ["Africa", "North America", "Asia", "Europe"],
correct: 2
},
{
question: "Which mountain range contains Mount Everest?",
options: ["Andes", "Alps", "Rockies", "Himalayas"],
correct: 3
},
{
question: "What is the smallest country in the world?",
options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
correct: 2
},
{
question: "Which desert is the largest in the world?",
options: ["Sahara", "Gobi", "Mojave", "Antarctica"],
correct: 3
},
{
question: "What is the capital of Japan?",
options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
correct: 2
},
{
question: "Which country has the most time zones?",
options: ["Russia", "United States", "China", "Canada"],
correct: 0
},
{
question: "What is the deepest ocean trench?",
options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Peru-Chile Trench"],
correct: 2
},
{
question: "Which African country is completely surrounded by South Africa?",
options: ["Swaziland", "Lesotho", "Botswana", "Zimbabwe"],
correct: 1
},
{
question: "What is the highest waterfall in the world?",
options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
correct: 2
},
{
question: "Which sea is the saltiest in the world?",
options: ["Dead Sea", "Red Sea", "Mediterranean Sea", "Caspian Sea"],
correct: 0
},
{
question: "What is the capital of Brazil?",
options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
correct: 2
},
{
question: "Which strait separates Europe and Africa?",
options: ["Bering Strait", "Strait of Gibraltar", "Strait of Hormuz", "Bass Strait"],
correct: 1
},
{
question: "What is the largest island in the world?",
options: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
correct: 2
},
{
question: "Which river flows through Paris?",
options: ["Thames", "Rhine", "Seine", "Loire"],
correct: 2
},
{
question: "What is the highest mountain in Africa?",
options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Stanley", "Mount Elgon"],
correct: 1
},
{
question: "Which country is known as the Land of the Rising Sun?",
options: ["China", "Korea", "Japan", "Thailand"],
correct: 2
},
{
question: "What is the largest lake in the world by surface area?",
options: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Baikal"],
correct: 2
},
{
question: "Which city is known as the Big Apple?",
options: ["Los Angeles", "Chicago", "New York City", "Boston"],
correct: 2
},
{
question: "What is the driest desert in the world?",
options: ["Sahara", "Gobi", "Atacama", "Mojave"],
correct: 2
},
{
question: "Which country has the longest coastline?",
options: ["Russia", "Canada", "Australia", "Norway"],
correct: 1
},
{
question: "What is the capital of Egypt?",
options: ["Alexandria", "Cairo", "Giza", "Luxor"],
correct: 1
},
{
question: "Which ocean is the smallest?",
options: ["Indian", "Atlantic", "Arctic", "Southern"],
correct: 2
},
{
question: "What is the largest city in the world by population?",
options: ["Tokyo", "Shanghai", "Delhi", "São Paulo"],
correct: 0
},
{
question: "Which European country is shaped like a boot?",
options: ["Spain", "Greece", "Italy", "Portugal"],
correct: 2
},
{
question: "What is the longest mountain range in the world?",
options: ["Himalayas", "Rockies", "Andes", "Alps"],
correct: 2
},
{
question: "Which country is both in Europe and Asia?",
options: ["Russia", "Kazakhstan", "Turkey", "All of the above"],
correct: 3
},
{
question: "What is the capital of Canada?",
options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
correct: 3
},
{
question: "Which river forms part of the border between the US and Mexico?",
options: ["Colorado River", "Rio Grande", "Mississippi River", "Columbia River"],
correct: 1
},
{
question: "What is the highest capital city in the world?",
options: ["Quito", "La Paz", "Bogotá", "Addis Ababa"],
correct: 1
},
{
question: "Which country has the most natural lakes?",
options: ["Finland", "Canada", "Sweden", "Russia"],
correct: 1
},
{
question: "What is the southernmost continent?",
options: ["South America", "Australia", "Africa", "Antarctica"],
correct: 3
},
{
question: "Which city straddles two continents?",
options: ["Cairo", "Istanbul", "Moscow", "Casablanca"],
correct: 1
},
{
question: "What is the largest country in South America?",
options: ["Argentina", "Peru", "Colombia", "Brazil"],
correct: 3
},
{
question: "Which peninsula is Spain located on?",
options: ["Italian Peninsula", "Balkan Peninsula", "Iberian Peninsula", "Scandinavian Peninsula"],
correct: 2
},
{
question: "What is the deepest lake in the world?",
options: ["Lake Superior", "Lake Tanganyika", "Lake Baikal", "Crater Lake"],
correct: 2
},
{
question: "Which country is known as the Pearl of the Orient?",
options: ["Thailand", "Philippines", "Malaysia", "Singapore"],
correct: 1
},
{
question: "What is the largest hot desert in the world?",
options: ["Gobi", "Kalahari", "Sahara", "Arabian"],
correct: 2
},
{
question: "Which mountain range separates Europe from Asia?",
options: ["Caucasus", "Ural", "Altai", "Carpathian"],
correct: 1
},
{
question: "What is the capital of South Korea?",
options: ["Busan", "Seoul", "Incheon", "Daegu"],
correct: 1
},
{
question: "Which country is home to Machu Picchu?",
options: ["Bolivia", "Ecuador", "Peru", "Chile"],
correct: 2
},
{
question: "What is the largest archipelago in the world?",
options: ["Philippines", "Indonesia", "Japan", "Greece"],
correct: 1
},
{
question: "Which sea lies between Italy and the Balkans?",
options: ["Tyrrhenian Sea", "Adriatic Sea", "Ionian Sea", "Aegean Sea"],
correct: 1
},
{
question: "What is the highest plateau in the world?",
options: ["Colorado Plateau", "Tibetan Plateau", "Deccan Plateau", "Ethiopian Plateau"],
correct: 1
},
{
question: "Which country has the most UNESCO World Heritage Sites?",
options: ["France", "Germany", "Italy", "Spain"],
correct: 2
},
{
question: "What is the most populous city in Africa?",
options: ["Cairo", "Lagos", "Kinshasa", "Johannesburg"],
correct: 1
},
{
question: "Which strait connects the Atlantic and Pacific Oceans?",
options: ["Drake Passage", "Strait of Magellan", "Bering Strait", "Cook Strait"],
correct: 1
},
{
question: "What is the largest coral reef system in the world?",
options: ["Mesoamerican Reef", "Great Barrier Reef", "Caribbean Coral Reef", "Red Sea Coral Reef"],
correct: 1
},
{
question: "Which country is known as the Roof of the World?",
options: ["Nepal", "Bhutan", "Tibet", "Afghanistan"],
correct: 2
}
]
*/],
    arts: [/* question: "Who painted 'The Starry Night'?",
options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
correct: 1
},
{
question: "Which artist painted the Mona Lisa?",
options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
correct: 1
},
{
question: "What art movement was Pablo Picasso associated with?",
options: ["Impressionism", "Surrealism", "Cubism", "Abstract Expressionism"],
correct: 2
},
{
question: "Who composed 'The Four Seasons'?",
options: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Ludwig van Beethoven"],
correct: 2
},
{
question: "Which museum houses the Mona Lisa?",
options: ["British Museum", "Louvre Museum", "Metropolitan Museum", "Uffizi Gallery"],
correct: 1
},
{
question: "Who painted 'Guernica'?",
options: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Francisco Goya"],
correct: 1
},
{
question: "What is the art technique of painting on wet plaster called?",
options: ["Tempera", "Fresco", "Encaustic", "Impasto"],
correct: 1
},
{
question: "Who composed 'The Magic Flute'?",
options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Franz Schubert", "Joseph Haydn"],
correct: 1
},
{
question: "Which artist cut off his own ear?",
options: ["Paul Gauguin", "Vincent van Gogh", "Henri de Toulouse-Lautrec", "Edgar Degas"],
correct: 1
},
{
question: "What is the highest female singing voice?",
options: ["Alto", "Soprano", "Mezzo-soprano", "Contralto"],
correct: 1
},
{
question: "Who sculpted 'David'?",
options: ["Donatello", "Michelangelo", "Bernini", "Rodin"],
correct: 1
},
{
question: "Which composer wrote 'Swan Lake'?",
options: ["Pyotr Ilyich Tchaikovsky", "Igor Stravinsky", "Sergei Rachmaninoff", "Modest Mussorgsky"],
correct: 0
},
{
question: "What art movement did Claude Monet help found?",
options: ["Post-Impressionism", "Fauvism", "Impressionism", "Pointillism"],
correct: 2
},
{
question: "Who painted 'The Persistence of Memory'?",
options: ["René Magritte", "Salvador Dalí", "Max Ernst", "Giorgio de Chirico"],
correct: 1
},
{
question: "Which instrument did Yo-Yo Ma famously play?",
options: ["Violin", "Piano", "Cello", "Viola"],
correct: 2
},
{
question: "Who painted 'Girl with a Pearl Earring'?",
options: ["Rembrandt", "Johannes Vermeer", "Frans Hals", "Jan van Eyck"],
correct: 1
},
{
question: "What is the term for a painting technique using small dots of color?",
options: ["Impressionism", "Pointillism", "Divisionism", "Fauvism"],
correct: 1
},
{
question: "Who composed 'Für Elise'?",
options: ["Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Ludwig van Beethoven", "Franz Schubert"],
correct: 2
},
{
question: "Which artist painted 'American Gothic'?",
options: ["Edward Hopper", "Grant Wood", "Norman Rockwell", "Andrew Wyeth"],
correct: 1
},
{
question: "What is the lowest male singing voice?",
options: ["Tenor", "Baritone", "Bass", "Countertenor"],
correct: 2
},
{
question: "Who painted 'The Birth of Venus'?",
options: ["Leonardo da Vinci", "Michelangelo", "Sandro Botticelli", "Raphael"],
correct: 2
},
{
question: "Which composer wrote 'The Nutcracker'?",
options: ["Pyotr Ilyich Tchaikovsky", "Igor Stravinsky", "Sergei Prokofiev", "Dmitri Shostakovich"],
correct: 0
},
{
question: "What art style is characterized by geometric shapes and fragmented forms?",
options: ["Surrealism", "Impressionism", "Cubism", "Abstract Expressionism"],
correct: 2
},
{
question: "Who painted 'The Scream'?",
options: ["Edvard Munch", "Gustav Klimt", "Egon Schiele", "Oskar Kokoschka"],
correct: 0
},
{
question: "Which instrument has 88 keys?",
options: ["Harpsichord", "Organ", "Piano", "Accordion"],
correct: 2
},
{
question: "Who painted 'Water Lilies'?",
options: ["Pierre-Auguste Renoir", "Claude Monet", "Edgar Degas", "Camille Pissarro"],
correct: 1
},
{
question: "What is the art of beautiful handwriting called?",
options: ["Typography", "Calligraphy", "Lithography", "Paleography"],
correct: 1
},
{
question: "Who composed 'The Brandenburg Concertos'?",
options: ["George Frideric Handel", "Johann Sebastian Bach", "Antonio Vivaldi", "Henry Purcell"],
correct: 1
},
{
question: "Which artist painted 'Les Demoiselles d'Avignon'?",
options: ["Henri Matisse", "Pablo Picasso", "Georges Braque", "Paul Cézanne"],
correct: 1
},
{
question: "What is the term for a song for solo voice with instrumental accompaniment?",
options: ["Aria", "Recitative", "Duet", "Chorus"],
correct: 0
},
{
question: "Who sculpted 'The Thinker'?",
options: ["Michelangelo", "Auguste Rodin", "Alberto Giacometti", "Henry Moore"],
correct: 1
},
{
question: "Which painter is known for his 'Blue Period'?",
options: ["Henri Matisse", "Pablo Picasso", "Paul Cézanne", "Georges Braque"],
correct: 1
},
{
question: "What is the art of arranging type called?",
options: ["Calligraphy", "Typography", "Lithography", "Engraving"],
correct: 1
},
{
question: "Who composed 'Carmen'?",
options: ["Giuseppe Verdi", "Georges Bizet", "Giacomo Puccini", "Richard Wagner"],
correct: 1
},
{
question: "Which artist painted 'The Night Watch'?",
options: ["Johannes Vermeer", "Rembrandt van Rijn", "Frans Hals", "Pieter Bruegel"],
correct: 1
},
{
question: "What is a three-panel artwork called?",
options: ["Diptych", "Triptych", "Polyptych", "Pentaptych"],
correct: 1
},
{
question: "Who composed 'The Rite of Spring'?",
options: ["Claude Debussy", "Maurice Ravel", "Igor Stravinsky", "Béla Bartók"],
correct: 2
},
{
question: "Which art movement emphasized emotion and individualism?",
options: ["Neoclassicism", "Romanticism", "Realism", "Baroque"],
correct: 1
},
{
question: "Who painted 'Las Meninas'?",
options: ["El Greco", "Francisco Goya", "Diego Velázquez", "Bartolomé Murillo"],
correct: 2
},
{
question: "What is the art of making objects from clay called?",
options: ["Sculpture", "Ceramics", "Pottery", "Both B and C"],
correct: 3
},
{
question: "Who composed 'La Traviata'?",
options: ["Giacomo Puccini", "Giuseppe Verdi", "Gioachino Rossini", "Gaetano Donizetti"],
correct: 1
},
{
question: "Which artist painted 'A Sunday on La Grande Jatte'?",
options: ["Paul Signac", "Georges Seurat", "Henri-Edmond Cross", "Paul Cézanne"],
correct: 1
},
{
question: "What is the art of cutting and polishing gemstones called?",
options: ["Lapidary", "Jewelry making", "Metalworking", "Engraving"],
correct: 0
},
{
question: "Who composed 'Pictures at an Exhibition'?",
options: ["Modest Mussorgsky", "Nikolai Rimsky-Korsakov", "Alexander Borodin", "César Cui"],
correct: 0
},
{
question: "Which artist is known for painting Campbell's Soup Cans?",
options: ["Roy Lichtenstein", "Andy Warhol", "James Rosenquist", "Claes Oldenburg"],
correct: 1
},
{
question: "What is the art of paper folding called?",
options: ["Kirigami", "Origami", "Quilling", "Decoupage"],
correct: 1
},
{
question: "Who composed 'Rhapsody in Blue'?",
options: ["Duke Ellington", "George Gershwin", "Cole Porter", "Irving Berlin"],
correct: 1
},
{
question: "Which artist painted 'The Kiss'?",
options: ["Egon Schiele", "Gustav Klimt", "Oskar Kokoschka", "Franz Marc"],
correct: 1
},
{
question: "What is the art of decorating fabric using wax called?",
options: ["Tie-dye", "Batik", "Block printing", "Screen printing"],
correct: 1
},
{
question: "Who composed 'Clair de Lune'?",
options: ["Claude Debussy", "Maurice Ravel", "Gabriel Fauré", "Erik Satie"],
correct: 0
}
]
*/]
  };

  // Game Logic Functions
  const handleCategorySelect = (categoryId) => {
    const questions = questionBank[categoryId];
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    setCurrentQuestions(shuffledQuestions);
    setSelectedCategory(categoryId);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
    setFadeIn(true);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      setShowResult(true);
      
      if (answerIndex === currentQuestions[currentQuestion].correct) {
        setScore(score + 1);
      }
      
      setTimeout(() => {
        handleNextQuestion();
      }, 2000);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < currentQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setFadeIn(true);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
    setCurrentQuestions([]);
  };

  // JSX Return
  return (
    <div className="trivia-container">
      {!selectedCategory ? (
        // Category Selection Screen
        <div className="category-selection">
          <h1>🎯 Trivia Challenge</h1>
          <p>Choose your category to begin!</p>
          <div className="categories-grid">
            {categories.map(category => (
              <div 
                key={category.id}
                className="category-card"
                onClick={() => handleCategorySelect(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : gameFinished ? (
        // Results Screen
        <div className="results-screen">
          <h2>🎉 Quiz Complete!</h2>
          <div className="score-display">
            <h3>Your Score: {score}/{currentQuestions.length}</h3>
            <p>
              {score === currentQuestions.length ? "Perfect! 🏆" :
               score >= currentQuestions.length * 0.8 ? "Excellent! 🌟" :
               score >= currentQuestions.length * 0.6 ? "Good job! 👏" :
               "Keep practicing! 📚"}
            </p>
          </div>
          <div className="action-buttons">
            <button onClick={() => handleCategorySelect(selectedCategory)}>
              Try Again
            </button>
            <button onClick={resetGame}>
              Choose New Category
            </button>
          </div>
        </div>
      ) : (
        // Question Screen
        <div className={`question-screen ${fadeIn ? 'fade-in' : ''}`}>
          <div className="question-header">
            <div className="category-info">
              <span className="category-icon">
                {categories.find(cat => cat.id === selectedCategory)?.icon}
              </span>
              <span className="category-name">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </span>
            </div>
            <div className="progress">
              Question {currentQuestion + 1} of {currentQuestions.length}
            </div>
            <div className="score">Score: {score}</div>
          </div>

          <div className="question-content">
            <h2 className="question-text">
              {currentQuestions[currentQuestion]?.question}
            </h2>
            
            <div className="options-container">
              {currentQuestions[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedAnswer === index ? 
                      (index === currentQuestions[currentQuestion].correct ? 'correct' : 'incorrect') : ''
                  } ${
                    showResult && index === currentQuestions[currentQuestion].correct ? 'correct' : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .trivia-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .category-selection {
          text-align: center;
        }

        .category-selection h1 {
          color: #333;
          margin-bottom: 10px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .category-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 25px rgba(0,0,0,0.15);
        }

        .category-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .category-card h3 {
          margin: 10px 0;
          color: #333;
        }

        .category-card p {
          color: #666;
          margin: 0;
        }

        .question-screen {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
        }

        .category-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .category-icon {
          font-size: 24px;
        }

        .category-name {
          font-weight: bold;
          color: #333;
        }

        .progress, .score {
          font-weight: bold;
          color: #666;
        }

        .question-text {
          font-size: 24px;
          margin-bottom: 30px;
          color: #333;
          line-height: 1.4;
        }

        .options-container {
          display: grid;
          gap: 15px;
        }

        .option-button {
          padding: 20px;
          font-size: 16px;
          border: 2px solid #ddd;
          border-radius: 10px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .option-button:hover:not(:disabled) {
          border-color: #007bff;
          background: #f8f9fa;
        }

        .option-button:disabled {
          cursor: not-allowed;
        }

        .option-button.correct {
          background: #d4edda;
          border-color: #28a745;
          color: #155724;
        }

        .option-button.incorrect {
          background: #f8d7da;
          border-color: #dc3545;
          color: #721c24;
        }

        .results-screen {
          text-align: center;
          background: white;
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .score-display h3 {
          font-size: 32px;
          color: #333;
          margin: 20px 0;
        }

        .action-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
        }

        .action-buttons button {
          padding: 15px 30px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .action-buttons button:first-child {
          background: #007bff;
          color: white;
        }

        .action-buttons button:first-child:hover {
          background: #0056b3;
        }

        .action-buttons button:last-child {
          background: #6c757d;
          color: white;
        }

        .action-buttons button:last-child:hover {
          background: #545b62;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default TriviaGame;
