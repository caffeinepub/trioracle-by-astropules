export interface Course {
  id: string;
  name: string;
  fee: string;
  feeAmount: number;
  brief: string;
  syllabusCategories: { heading: string; items: string[] }[];
  whatsappText: string;
  icon: string;
}

export const COURSES: Course[] = [
  {
    id: "predictive-nadi",
    name: "Predictive Nadi Astrology",
    fee: "₹10,000",
    feeAmount: 10000,
    brief:
      "Master the ancient art of Nadi Astrology including predictive techniques, timing of events, and comprehensive life analysis covering education, marriage, career, health, and more.",
    icon: "⭐",
    whatsappText: "I am interested in Predictive Nadi Astrology course",
    syllabusCategories: [
      {
        heading: "Rules of Nadi Astrology",
        items: [
          "Ayanamsa, Nirayana Bhava Chalit, Casting Nirayana Bhav Chalit",
          "Dasa, Sub lord, Aspects & Conjunctions",
          "Position & Lordship of Planets",
          "How to Judge a Planet, Strength of Planet",
          "Cusps, Results of Planets",
          "Timing of an Event, Transits of Planets",
          "Negation of an event",
        ],
      },
      {
        heading: "Education",
        items: [
          "Houses, Planets, Combination",
          "No Education, No inclination for Education",
          "Foreign Education, Scholarships",
          "Success in Competition Exams & Interviews",
          "Field of Education, Prizes or Awards, Illustrations",
        ],
      },
      {
        heading: "Litigation",
        items: [
          "Houses, Planets, Combinations & Timing",
          "Imprisonment, Causes of imprisonment",
          "Political confinement, Going underground, House arrest",
          "Kidnapping, Winning in litigation, Illustrations",
        ],
      },
      {
        heading: "Property & Vehicle",
        items: [
          "Purchase of property – Houses, Planets, Combination & Timing",
          "Transits, Purchase through Loan, Purchase in Installments",
          "Location & Status of property, Commercial property",
          "Construction, Rental income, Loss, Partition, Sale of property",
          "Purchase of vehicles, Luxury vehicle, Commercial vehicle",
          "Gift of vehicle, Colour of vehicle, Theft of vehicle",
          "Non repayment of loan & Loss of vehicle, Sale of Vehicle",
        ],
      },
      {
        heading: "Marriage",
        items: [
          "Timing of marriage, Plutonic love, Physical love",
          "Scandalous love, Love marriage, Extra marital affair",
          "Kundali Milan, Divorce, Live-in relationships",
          "Manglik, Gun Milan",
        ],
      },
      {
        heading: "Child Birth",
        items: [
          "Timing of conceiving, Pregnancy periods",
          "Twin Birth, Adoption",
          "Custody of children, Gender of child",
        ],
      },
      {
        heading: "Health",
        items: [
          "Timing of disease",
          "Good health and bad health combinations",
          "Combination of chronic disease and surgery",
          "Improvement in health, Type of disease",
        ],
      },
      {
        heading: "Longevity",
        items: [
          "Timing",
          "Death at the time of marriage",
          "Death while going to pilgrimage",
        ],
      },
      {
        heading: "Travel",
        items: [
          "Getting visa of US, Europe, Canada, Australia, New Zealand",
          "Getting PR, Work Visa and Citizenship",
          "Long Travel, Coming back to motherland",
          "Purpose of Travel",
        ],
      },
      {
        heading: "Professional Career",
        items: [
          "Getting a job, Change in job, Transfer of job",
          "Change to business and vice versa",
          "Type of job or business, Job in foreign",
          "Ups and downs in job/business, Government job",
        ],
      },
      {
        heading: "Prasna Jyotish",
        items: [
          "Answers to specific questions (university, job, etc.)",
          "Answers to same-day events",
          "Answers to mundane questions (wars, weather, etc.)",
        ],
      },
      {
        heading: "Remedies",
        items: [
          "Vastu, Name correction",
          "Mantra, Tantra, Yantra",
          "Graphology, Meditation, Yoga",
          "Fasting, Daan, Pooja, Hawan, Going to pilgrimage",
        ],
      },
      {
        heading: "Muhurat",
        items: ["Muhurat of marriage, Grah Pravesh", "Birth time correction"],
      },
    ],
  },
  {
    id: "advanced-numerology",
    name: "Advanced Numerology",
    fee: "₹17,500",
    feeAmount: 17500,
    brief:
      "Dive deep into predictive numerology merged with Nadi Astrology for advanced life readings, personality analysis, and higher predictive techniques.",
    icon: "🔢",
    whatsappText: "I am interested in Advanced Numerology course",
    syllabusCategories: [
      {
        heading: "Nature of a Person",
        items: [
          "Anxiety, depression, sentimental, drug addict, drunkard",
          "Frustrated, Overconfident, Miser, Spendthrift",
          "Mismanaging funds, Brand cautious",
        ],
      },
      {
        heading: "Personality Combinations",
        items: [
          "Combination of a Cheat and variety in it",
          "Combination of a Conman",
          "Differentiating sex scandal vs financial scandal",
          "Differentiating debts, bankruptcy, litigation combinations",
        ],
      },
      {
        heading: "Hindu Dasa System",
        items: [
          "Vimshottari Dasa, Mahadasa, Antar Dasa, Pratyantar Dasa",
          "Calculation of Dasa, Examples, Exercise",
        ],
      },
      {
        heading: "Notable Combinations",
        items: [
          "Name Correction",
          "Combinations of Billionaires",
          "Combinations of High-end Actors, Actresses, Stage Performers",
          "Combinations of Leaders",
          "Combination of a Dictator",
          "Combination of person who respects parents after marriage",
        ],
      },
      {
        heading: "Business & Finance",
        items: [
          "Combinations of Builders, property buyers, speculators",
          "People who benefit from property",
          "People who win in speculations, share market, casinos",
          "People good in management",
        ],
      },
      {
        heading: "Travel & Foreign",
        items: [
          "Successful and unsuccessful travels",
          "Timing to get Visa, PR, Green Card",
          "Settlement in foreign land",
        ],
      },
      {
        heading: "Love & Relationships",
        items: [
          "True lover vs Cheat in love",
          "Merging Numerology with Nadi Astrology",
          "Higher predictive techniques",
        ],
      },
    ],
  },
  {
    id: "mystery-of-palmistry",
    name: "Mystery of Palmistry",
    fee: "₹15,000",
    feeAmount: 15000,
    brief:
      "Unlock the secrets of the palm — from Panchtattva to medical palmistry, career counselling, compatibility, health, and complete life reading through the lines.",
    icon: "🖐",
    whatsappText: "I am interested in Mystery of Palmistry course",
    syllabusCategories: [
      {
        heading: "Foundation",
        items: [
          "Panchtattva and application to Human evolution",
          "Shape of hands: Earth, Water, Fire and Air",
          "Fingers: Jupiter (Hot water), Saturn (Earth), Sun (Fire), Mercury (Air), Thumb (Space)",
        ],
      },
      {
        heading: "Mounts & Prints",
        items: [
          "Mounts: Venus, Lower Mars, Upper Mars, Neptune, Moon, Sun, Saturn, Jupiter, Mercury",
          "Finger Prints: Earth, Water, Fire, Air, Mix, Composite",
        ],
      },
      {
        heading: "Lines",
        items: [
          "Major Lines: Earth, Water, Fire and Air",
          "Minor & Influence Lines: Griddle of Venus, Via Lasciva, Moon Line, Ambition Line",
          "Sun line, Passion Line, Mercury Line, Mars line, Axe lines",
          "Vertical & Horizontal Lines on Venus and Mars",
          "Emotional Suffocation Lines, Relationship, Children, Medical Stigmata",
        ],
      },
      {
        heading: "Signs & Patterns",
        items: [
          "Predictive Techniques to calculate timing of event",
          "Nails: Shape, Colour, Signs, Thickness",
          "Signs: Star, Cross, Squares, Tridents, Triangle, Bars, Black spots",
          "Solomon Ring, Grill, Temple",
          "Skin Patterns: Raja loop, Seriousness Loops, Bee",
        ],
      },
      {
        heading: "Applications",
        items: [
          "Career & Academics: Self Discovery and Career Counselling",
          "Compatibility: Marriage, Friendship",
          "Travel and Immigration",
          "Litigations and other problems",
        ],
      },
      {
        heading: "Medical Palmistry",
        items: [
          "Depression, BP, IBS, Diabetes",
          "Eye-Sight, Allergy, ENT",
          "Lipid Profile, Metabolism",
          "Problems to Conceive, Lungs & Respiratory",
        ],
      },
      {
        heading: "Miscellaneous",
        items: [
          "Marriage, Compatibility, Divorce",
          "Children possibilities, Sexual Behaviour, Infertility",
          "Career, Business, Services, Jobs",
          "Financial, Traveling and Immigration",
        ],
      },
    ],
  },
  {
    id: "nadi-cards",
    name: "Nadi Cards",
    fee: "₹5,000",
    feeAmount: 5000,
    brief:
      "Learn the mystical Vedic card system using Red, Blue and Yellow cards for intuitive guidance, deep prediction, and spiritual insight.",
    icon: "🃏",
    whatsappText: "I am interested in Nadi Cards course",
    syllabusCategories: [
      {
        heading: "Introduction to Vedic Cards",
        items: [
          "Introduction to Vedic Cards: Red, Blue and Yellow",
          "General interpretation of cards",
        ],
      },
      {
        heading: "Predictive Techniques",
        items: [
          "Predictive techniques using card combinations",
          "Practical reading sessions",
          "Advanced card spread methods",
          "Timing of events using cards",
        ],
      },
    ],
  },
];
