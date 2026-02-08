// River Systems of India - Comprehensive Data from PDF Pages 19-20

export const riverSystems = [
  {
    id: 1,
    name: "Indus River System",
    category: "Himalayan",
    type: "Perennial",
    origin: "Bokhar Chu in Kailash Mountains, Tibet",
    length: "~3180 km (total), ~1114 km in India",
    tributaries: {
      leftBank: ["Jhelum", "Chenab", "Ravi", "Beas", "Sutlej"],
      rightBank: ["Shyok"]
    },
    keyFeatures: [
      "Makes a gorge near Nanga Parbat",
      "Panjnad is the combined name for five rivers (Jhelum, Chenab, Ravi, Beas, Sutlej)",
      "All five major tributaries are left bank tributaries"
    ],
    importance: "HIGH",
    drainageDirection: "Arabian Sea",
    tributaryDetails: [
      {
        name: "Jhelum",
        origin: "Verinag, Kashmir",
        features: ["Meanders through Kashmir Valley", "Forms Wular Lake (India's largest freshwater lake)", "Joins Chenab in Pakistan"],
        type: "Left Bank"
      },
      {
        name: "Chenab",
        origin: "Near Baralacha La Pass, Lahaul-Spiti, Himachal Pradesh",
        features: ["Joins Sutlej in Pakistan to form Panjnad"],
        type: "Left Bank"
      },
      {
        name: "Ravi",
        origin: "West of Rohtang Pass, Kullu Hills, Himachal Pradesh",
        features: ["Joins Chenab in Pakistan"],
        type: "Left Bank"
      },
      {
        name: "Beas",
        origin: "Beas Kund near Rohtang Pass, Himachal Pradesh",
        features: ["Makes gorges at Kati and Largi in Dhauladhar range", "Entirely flows in India", "Meets Sutlej in Punjab"],
        type: "Left Bank"
      },
      {
        name: "Sutlej",
        origin: "Rakshasthal near Mansarovar, Kailash Range, Tibet",
        features: ["Enters India through Shipki La pass", "Joins Indus in Pakistan as Panjnad"],
        type: "Left Bank"
      },
      {
        name: "Shyok",
        origin: "Rimo Glacier, one of the tongues of Siachen Glacier",
        features: ["Joins Indus at Keris in India (POK)"],
        type: "Right Bank"
      }
    ]
  },
  {
    id: 2,
    name: "Ganga River System",
    category: "Himalayan",
    type: "Perennial",
    origin: "Gangotri Glacier (Bhagirathi) and Satopanth Glacier (Alaknanda), Uttarakhand",
    length: "~2525 km",
    tributaries: {
      leftBank: ["Ramganga", "Gomti", "Ghaghara", "Gandak", "Burhi Gandak", "Kosi"],
      rightBank: ["Yamuna", "Tons", "Son"],
      distributary: ["Hooghly"]
    },
    keyFeatures: [
      "National Waterway 1: Haldia (West Bengal) to Prayagraj (UP)",
      "Known as Padma in Bangladesh",
      "Famous for Panch Prayags in Uttarakhand",
      "77% of India's drainage flows to Bay of Bengal"
    ],
    importance: "HIGH",
    drainageDirection: "Bay of Bengal",
    panchPrayags: [
      "Vishnu Prayag (Alaknanda + Dhauliganga)",
      "Nand Prayag (Alaknanda + Nandakini)",
      "Karna Prayag (Alaknanda + Pindar)",
      "Rudra Prayag (Alaknanda + Mandakini)",
      "Dev Prayag (Bhagirathi + Alaknanda)"
    ],
    panchPrayagMnemonic: "Vishnu Ne Karna ko Rasta Dikhaya (V-N-K-R-D)",
    tributaryDetails: [
      {
        name: "Ramganga",
        origin: "Chamoli District, Uttarakhand",
        features: ["Meets Ganga at Kannauj"],
        type: "Left Bank"
      },
      {
        name: "Gomti",
        origin: "Pilibhit, Uttar Pradesh",
        features: ["Meets Ganga at Ghazipur"],
        type: "Left Bank"
      },
      {
        name: "Ghaghara",
        origin: "Tibet",
        features: ["Antecedent river", "Joins Ganga in Bihar", "Major tributaries: Sarda, Saryu, Rapti, Choti Gandak"],
        type: "Left Bank"
      },
      {
        name: "Gandak",
        origin: "Near Tibet-Nepal border",
        features: ["Major tributaries: Kali Gandak, Mayangadi, Trishuli", "Joins Ganga near Patna"],
        type: "Left Bank"
      },
      {
        name: "Burhi Gandak",
        origin: "West Champaran, Bihar",
        features: ["Flows almost parallel to Gandak", "Forms Kanwar Tal (one of India's biggest oxbow lakes)"],
        type: "Left Bank"
      },
      {
        name: "Kosi",
        origin: "Nepal",
        features: ["Called Sapt Kosi due to 7 tributaries", "Important tributaries: Arun, Tumar, Sun Kosi", "Shifting course - 'Sorrow of Bihar'", "Joins Ganga near Kursela"],
        type: "Left Bank"
      },
      {
        name: "Yamuna",
        origin: "Yamunotri Glacier, Uttarakhand",
        features: ["Joins Ganga at Prayagraj (Triveni Sangam)", "Important tributaries: Chambal, Sind, Ken, Betwa"],
        type: "Right Bank"
      },
      {
        name: "Tons",
        origin: "Himachal Pradesh",
        features: ["Also called Tamsa", "Joins Ganga in UP"],
        type: "Right Bank"
      },
      {
        name: "Son",
        origin: "Amarkantak Plateau, Madhya Pradesh (radial drainage with Narmada, Johila)",
        features: ["Joins Ganga near Patna"],
        type: "Right Bank"
      },
      {
        name: "Hooghly",
        origin: "Starts near Giria, West Bengal (distributary)",
        features: ["Flows into Bay of Bengal near Sagar Island", "Damodar River (from Chhotanagpur Plateau) is tributary of Hooghly"],
        type: "Distributary"
      }
    ]
  },
  {
    id: 3,
    name: "Brahmaputra River System",
    category: "Himalayan",
    type: "Perennial",
    origin: "Chemayungdung Glacier, Kailash Range, Tibet (very near Sutlej origin)",
    length: "~2900 km (total), ~916 km in India",
    namesInCourse: ["Tsangpo (Tibet)", "Dihang (entry to India)", "Brahmaputra (Sadiya to Dhubri, Assam)", "Jamuna (Bangladesh)", "Padma (after joining Ganga)", "Meghna (final)"],
    keyFeatures: [
      "Enters India from Namcha Barwa",
      "Enters as Dihang, joined by Lohit and Dibang",
      "Becomes Brahmaputra from Sadiya to Dhubri in Assam",
      "Known for braided channels and shifting course",
      "Forms world's largest river delta (Sundarbans) with Ganga"
    ],
    importance: "HIGH",
    drainageDirection: "Bay of Bengal",
    tributaryDetails: [
      {
        name: "Lohit",
        origin: "Eastern Tibet",
        features: ["Joins Dihang in Arunachal Pradesh"],
        type: "Left Bank"
      },
      {
        name: "Dibang",
        origin: "Mishmi Hills, Arunachal Pradesh",
        features: ["Joins Dihang to form Brahmaputra"],
        type: "Left Bank"
      }
    ]
  }
];

// Key Facts about Indian River Systems
export const riverFacts = [
  {
    fact: "77% of India's drainage flows towards Bay of Bengal",
    category: "Drainage Pattern"
  },
  {
    fact: "23% of India's drainage flows towards Arabian Sea",
    category: "Drainage Pattern"
  },
  {
    fact: "Delhi Ridge-Aravallis-Vindhyas-Satpuras-Western Ghats form the Drainage Divide of India",
    category: "Drainage Divide"
  },
  {
    fact: "Himalayan rivers are younger (40-60 million years) than Peninsular rivers (200 million years)",
    category: "Age"
  },
  {
    fact: "Inland drainage is commonly seen in Kachchh region due to shoreline of emergence",
    category: "Drainage Pattern"
  },
  {
    fact: "River basins: Major (>20,000 sq km), Medium (2000-20,000 sq km), Minor (<2000 sq km)",
    category: "Classification"
  },
  {
    fact: "Himalayan rivers are youthful, perennial, cause flooding, and experience avulsions (channel shifting)",
    category: "Characteristics"
  },
  {
    fact: "Wular Lake in Kashmir (formed by Jhelum) is India's largest freshwater lake",
    category: "Lakes"
  },
  {
    fact: "Kanwar Tal in Bihar (formed by Burhi Gandak) is one of India's biggest oxbow lakes",
    category: "Lakes"
  },
  {
    fact: "Kosi River is called 'Sorrow of Bihar' due to frequent flooding and shifting course",
    category: "Nicknames"
  }
];

// Quiz Questions
export const quizQuestions = [
  {
    question: "What percentage of India's drainage flows towards the Bay of Bengal?",
    options: ["50%", "65%", "77%", "85%"],
    correct: 2,
    explanation: "77% of India's drainage flows towards the Bay of Bengal, while 23% flows towards the Arabian Sea."
  },
  {
    question: "Which river originates from Bokhar Chu in the Kailash Mountains?",
    options: ["Ganga", "Brahmaputra", "Indus", "Yamuna"],
    correct: 2,
    explanation: "The Indus River originates from Bokhar Chu in the Kailash Mountains, Tibet."
  },
  {
    question: "What is Panjnad?",
    options: ["A glacier", "Combined name for 5 rivers", "A mountain pass", "A tributary of Ganga"],
    correct: 1,
    explanation: "Panjnad is the combined name for five rivers: Jhelum, Chenab, Ravi, Beas, and Sutlej (all left bank tributaries of Indus)."
  },
  {
    question: "Which river enters India through Shipki La pass?",
    options: ["Sutlej", "Beas", "Chenab", "Ravi"],
    correct: 0,
    explanation: "Sutlej originates near Rakshasthal (Mansarovar) and enters India through Shipki La pass in Himachal Pradesh."
  },
  {
    question: "India's largest freshwater lake is formed by which river?",
    options: ["Ganga", "Indus", "Jhelum", "Brahmaputra"],
    correct: 2,
    explanation: "Jhelum River forms Wular Lake in Kashmir, which is India's largest freshwater lake."
  },
  {
    question: "Which tributary of Indus flows entirely within India?",
    options: ["Jhelum", "Chenab", "Beas", "Sutlej"],
    correct: 2,
    explanation: "Beas is the only major tributary of the Indus system that flows entirely within India before meeting Sutlej in Punjab."
  },
  {
    question: "What are the two source glaciers of Ganga?",
    options: ["Gangotri and Yamunotri", "Gangotri and Satopanth", "Siachen and Rimo", "Zemu and Kanchenjunga"],
    correct: 1,
    explanation: "Ganga originates from Gangotri Glacier (Bhagirathi) and Satopanth Glacier (Alaknanda) in Uttarakhand."
  },
  {
    question: "What is the mnemonic for Panch Prayags?",
    options: ["Never Give Up", "Vishnu Ne Karna ko Rasta Dikhaya", "Very Nice King Rules Delhi", "Visit Nepal Kingdom Regularly Daily"],
    correct: 1,
    explanation: "Vishnu Ne Karna ko Rasta Dikhaya (V-N-K-R-D) represents Vishnu, Nand, Karna, Rudra, and Dev Prayags."
  },
  {
    question: "Which river is called 'Sorrow of Bihar'?",
    options: ["Gandak", "Ghaghara", "Kosi", "Son"],
    correct: 2,
    explanation: "Kosi River is called 'Sorrow of Bihar' due to its shifting course causing frequent devastating floods."
  },
  {
    question: "How many tributaries does Kosi River have, earning it the name Sapt Kosi?",
    options: ["5", "7", "9", "11"],
    correct: 1,
    explanation: "Kosi is called Sapt Kosi because it has 7 tributaries. Important ones include Arun, Tumar, and Sun Kosi."
  },
  {
    question: "Which river originates from the same region as Narmada from Amarkantak Plateau?",
    options: ["Yamuna", "Tons", "Son", "Betwa"],
    correct: 2,
    explanation: "Son River originates from Amarkantak Plateau as part of radial drainage system along with Narmada and Johila."
  },
  {
    question: "National Waterway 1 is on which river?",
    options: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
    correct: 1,
    explanation: "National Waterway 1 is on Ganga River, stretching from Haldia in West Bengal to Prayagraj in Uttar Pradesh."
  },
  {
    question: "What is Ganga called in Bangladesh?",
    options: ["Jamuna", "Padma", "Meghna", "Tsangpo"],
    correct: 1,
    explanation: "Ganga is known as Padma in Bangladesh after it crosses the international border."
  },
  {
    question: "Which glacier is the origin of Brahmaputra?",
    options: ["Gangotri", "Yamunotri", "Chemayungdung", "Siachen"],
    correct: 2,
    explanation: "Brahmaputra originates from Chemayungdung Glacier in the Kailash Range, Tibet, very near to the origin of Sutlej."
  },
  {
    question: "By what name does Brahmaputra enter India?",
    options: ["Tsangpo", "Dihang", "Jamuna", "Padma"],
    correct: 1,
    explanation: "Brahmaputra enters India as Dihang from Namcha Barwa. It's joined by Lohit and Dibang before becoming Brahmaputra."
  },
  {
    question: "From where to where does Brahmaputra flow in Assam?",
    options: ["Dibrugarh to Tezpur", "Sadiya to Dhubri", "Jorhat to Guwahati", "Tinsukia to Silchar"],
    correct: 1,
    explanation: "Brahmaputra flows from Sadiya to Dhubri in Assam before entering Bangladesh."
  },
  {
    question: "Which river forms gorges at Kati and Largi in Dhauladhar range?",
    options: ["Ravi", "Beas", "Sutlej", "Chenab"],
    correct: 1,
    explanation: "Beas River forms gorges at Kati and Largi in the Dhauladhar range in Himachal Pradesh."
  },
  {
    question: "Shyok River originates from which glacier?",
    options: ["Gangotri", "Siachen (Rimo Glacier)", "Zemu", "Milam"],
    correct: 1,
    explanation: "Shyok River originates from Rimo Glacier, one of the tongues of Siachen Glacier, and is a right bank tributary of Indus."
  },
  {
    question: "Which forms the Drainage Divide of India?",
    options: ["Himalayas only", "Western Ghats only", "Delhi Ridge-Aravallis-Vindhyas-Satpuras-Western Ghats", "Eastern Ghats"],
    correct: 2,
    explanation: "Delhi Ridge-Aravallis-Vindhyas-Satpuras-Western Ghats together form the Drainage Divide of India."
  },
  {
    question: "Himalayan rivers are how old compared to Peninsular rivers?",
    options: ["40-60 mn yrs vs 200 mn yrs (younger)", "200 mn yrs vs 40-60 mn yrs (older)", "Same age", "Cannot be determined"],
    correct: 0,
    explanation: "Himalayan rivers are younger (40-60 million years) compared to Peninsular rivers (200 million years)."
  }
];

// Additional 20 questions for comprehensive coverage
export const additionalQuestions = [
  {
    question: "Which river is an antecedent river according to the PDF?",
    options: ["Kosi", "Ghaghara", "Gandak", "Yamuna"],
    correct: 1,
    explanation: "Ghaghara, which originates in Tibet, is mentioned as an antecedent river that cuts through the Himalayas."
  },
  {
    question: "Kanwar Tal oxbow lake is formed by which river?",
    options: ["Gandak", "Burhi Gandak", "Kosi", "Ghaghara"],
    correct: 1,
    explanation: "Burhi Gandak, which flows almost parallel to Gandak, forms Kanwar Tal - one of India's biggest oxbow lakes."
  },
  {
    question: "Which tributary of Yamuna is NOT mentioned in the PDF?",
    options: ["Chambal", "Sind", "Ken", "Tons"],
    correct: 3,
    explanation: "Yamuna's important tributaries mentioned are Chambal, Sind, Ken, and Betwa. Tons is a separate right bank tributary of Ganga."
  },
  {
    question: "Damodar River is a tributary of which river?",
    options: ["Ganga", "Hooghly", "Brahmaputra", "Mahanadi"],
    correct: 1,
    explanation: "Damodar originates in Chhotanagpur Plateau and is a tributary of Hooghly River, which itself is a distributary of Ganga."
  },
  {
    question: "Hooghly River starts near which place?",
    options: ["Haridwar", "Giria", "Patna", "Varanasi"],
    correct: 1,
    explanation: "Hooghly River, a distributary of Ganga, starts near Giria in West Bengal and flows into Bay of Bengal near Sagar Island."
  },
  {
    question: "Where does Hooghly River meet the Bay of Bengal?",
    options: ["Kolkata", "Sagar Island", "Diamond Harbour", "Haldia"],
    correct: 1,
    explanation: "Hooghly River flows into the Bay of Bengal near Sagar Island."
  },
  {
    question: "What type of river basin classification is >20,000 sq. km?",
    options: ["Minor", "Medium", "Major", "Super Major"],
    correct: 2,
    explanation: "River basins are classified as: Major (>20,000 sq km), Medium (2000-20,000 sq km), Minor (<2000 sq km)."
  },
  {
    question: "Inland drainage is commonly seen in which region?",
    options: ["Ganga Plains", "Kachchh", "Deccan Plateau", "Brahmaputra Valley"],
    correct: 1,
    explanation: "Inland drainage is very commonly seen in the Kachchh region due to a shoreline of emergence."
  },
  {
    question: "Baralacha La Pass is associated with the origin of which river?",
    options: ["Ravi", "Beas", "Chenab", "Sutlej"],
    correct: 2,
    explanation: "Chenab originates near Baralacha La Pass in Lahaul-Spiti, Himachal Pradesh."
  },
  {
    question: "Verinag is the origin of which river?",
    options: ["Jhelum", "Chenab", "Ravi", "Beas"],
    correct: 0,
    explanation: "Jhelum River originates at Verinag in Kashmir and is known for meandering through the Kashmir Valley."
  },
  {
    question: "Beas Kund is located near which famous pass?",
    options: ["Shipki La", "Rohtang Pass", "Baralacha La", "Zoji La"],
    correct: 1,
    explanation: "Beas River originates from Beas Kund near Rohtang Pass in Himachal Pradesh."
  },
  {
    question: "Which river originates west of Rohtang Pass?",
    options: ["Beas", "Ravi", "Sutlej", "Chenab"],
    correct: 1,
    explanation: "Ravi River originates west of Rohtang Pass in the Kullu Hills of Himachal Pradesh."
  },
  {
    question: "Rakshasthal, near Mansarovar, is the origin of which river?",
    options: ["Indus", "Sutlej", "Brahmaputra", "Ghaghara"],
    correct: 1,
    explanation: "Sutlej originates from Rakshasthal near Mansarovar in the Kailash Range, Tibet."
  },
  {
    question: "Which tributaries join to form Brahmaputra in India?",
    options: ["Teesta and Subansiri", "Lohit and Dibang join Dihang", "Manas and Sankosh", "Kameng and Dhansiri"],
    correct: 1,
    explanation: "Brahmaputra is formed when Lohit and Dibang join the Dihang River in Arunachal Pradesh."
  },
  {
    question: "Namcha Barwa is associated with which river?",
    options: ["Ganga", "Indus", "Brahmaputra", "Yamuna"],
    correct: 2,
    explanation: "Brahmaputra enters India from Namcha Barwa in Arunachal Pradesh."
  },
  {
    question: "Which rivers form radial drainage from Amarkantak Plateau?",
    options: ["Ganga, Yamuna, Son", "Narmada, Son, Johila", "Chambal, Betwa, Ken", "Mahanadi, Godavari, Krishna"],
    correct: 1,
    explanation: "Narmada, Son, and Johila originate as radial drainage from the Amarkantak Plateau in Madhya Pradesh."
  },
  {
    question: "Chamoli District is the origin of which tributary?",
    options: ["Gomti", "Ramganga", "Kosi", "Gandak"],
    correct: 1,
    explanation: "Ramganga originates in Chamoli District, Uttarakhand, and meets Ganga at Kannauj."
  },
  {
    question: "Gomti River originates in which district?",
    options: ["Chamoli", "Pilibhit", "West Champaran", "Dehradun"],
    correct: 1,
    explanation: "Gomti originates at Pilibhit in Uttar Pradesh and meets Ganga at Ghazipur."
  },
  {
    question: "Which left bank tributary of Ganga joins it near Patna?",
    options: ["Kosi", "Gandak", "Both Gandak and Son", "Burhi Gandak"],
    correct: 2,
    explanation: "Both Gandak (left bank) and Son (right bank) join Ganga near Patna, making it a significant confluence point."
  },
  {
    question: "What are the major tributaries of Ghaghara?",
    options: ["Sarda, Saryu, Rapti, Choti Gandak", "Kali Gandak, Trishuli", "Arun, Tumar, Sun Kosi", "Chambal, Sind, Ken"],
    correct: 0,
    explanation: "Ghaghara's major tributaries are Sarda, Saryu, Rapti, and Choti Gandak."
  }
];

// Combine all quiz questions
export const allQuizQuestions = [...quizQuestions, ...additionalQuestions];

export default {
  riverSystems,
  riverFacts,
  quizQuestions: allQuizQuestions
};
