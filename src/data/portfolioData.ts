import type { Project, SkillCategory, ExperienceItem, AchievementItem, EducationInfo } from '../types';

export const personalInfo = {
  name: 'Gnaneshwaran S',
  role: 'Aspiring Software Engineer',
  tagline: 'Building intelligent software with purpose.',
  heroDescription:
    "I'm Gnaneshwaran S, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I build software products that combine clean engineering, intelligent systems, and practical problem solving.",
  aboutParagraphs: [
    "I'm Gnaneshwaran S, an aspiring software engineer currently pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at Vels Institute of Science, Technology and Advanced Studies.",
    "My interests lie at the intersection of software development, artificial intelligence, and product building. I enjoy taking an idea, understanding the problem behind it, and turning it into a practical technology solution.",
    "Through academic projects, hackathons, internships, and continuous experimentation, I've been building experience across software development, web technologies, machine learning, and product design.",
    "My long-term goal is to become a strong software engineer and eventually build technology products as an entrepreneur.",
  ],
  currently: [
    '3rd Year B.Tech CSE (AI/ML)',
    'Exploring software engineering',
    'Building AI-powered products',
    'Learning through real-world projects',
  ],
  contacts: {
    email: 'sgnaneshwaran577@gmail.com',
    github: 'https://github.com/gnanesh-200716',
    linkedin: 'https://www.linkedin.com/in/gnaneshwarans/',
    location: 'Chennai, India',
  },
  careerDirection: {
    heading: "What I'm Building Toward",
    immediate:
      'My immediate goal is to grow into a strong software engineer by continuously improving my engineering fundamentals and building real-world products.',
    longTerm:
      'In the long term, I want to use that experience to create meaningful technology products and pursue entrepreneurship.',
    pillars: [
      {
        title: 'Engineering Fundamentals',
        description: 'Writing maintainable, clean code and mastering core computer science principles.',
      },
      {
        title: 'Applied Intelligence',
        description: 'Integrating machine learning and computer vision to solve tangible problems.',
      },
      {
        title: 'Product Mindset',
        description: 'Building intuitive user experiences that turn complex systems into accessible solutions.',
      },
    ],
  },
};

export const projectsData: Project[] = [
  {
    id: 'parktrove',
    number: '01',
    name: 'ParkTrove',
    category: 'AI • Computer Vision • Smart Parking',
    tagline: 'AI-Powered Smart Parking Availability & Detection Platform',
    description:
      'An AI-powered smart parking platform designed to help users discover parking availability and reduce the time and congestion associated with finding parking spaces.',
    concept:
      'Combines parking availability detection with a user-facing platform. Uses computer vision and IR sensor data to identify whether parking spaces are occupied or available, presenting real-time information through an intuitive web interface with smart navigation and cashless workflows.',
    keyProblem: 'Finding available parking efficiently in crowded locations and reducing urban traffic congestion.',
    technologies: [
      'Python',
      'Machine Learning / Computer Vision',
      'React',
      'FastAPI',
      'SQL',
      'AI-based Object Detection',
      'IR Sensors',
    ],
    features: [
      'Real-time parking slot occupancy monitoring',
      'Computer vision-based vehicle detection pipeline',
      'Interactive visual slot map and reservation preview',
      'FastAPI backend with structured database storage',
    ],
    githubUrl: 'https://github.com/gnanesh-200716',
    isDominant: true,
  },
  {
    id: 'cinematch',
    number: '02',
    name: 'CineMatch',
    category: 'Web Development • Recommendation System • Movie Discovery',
    tagline: 'Streamlined Movie Discovery and Preference-Based Recommendations',
    description:
      'A movie discovery and recommendation platform designed to help users discover films based on their interests and preferences with intuitive browsing and filtering.',
    concept:
      'Utilizes TMDB API data and recommendation logic to surface films tailored to user taste profiles, providing a modern, responsive interface for cinema exploration.',
    keyProblem: 'Overcoming decision fatigue in streaming media through streamlined genre, rating, and preference filtering.',
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'TMDB API',
      'Recommendation Logic',
    ],
    features: [
      'Curated category and genre discovery streams',
      'Dynamic film search with responsive details modal',
      'Taste-based matching score visualization',
      'Lightweight, responsive clientside state management',
    ],
    githubUrl: 'https://github.com/gnanesh-200716',
  },
  {
    id: 'axon-band',
    number: '03',
    name: 'Axon Control Band',
    category: 'Wearable Technology • Human-Computer Interaction • IoT',
    tagline: 'EMG Gesture-Driven Wearable Interface for Accessible Control',
    description:
      'A wearable technology concept developed during a national-level hackathon, designed to allow users to control computers and home appliances using hand gestures.',
    concept:
      'Explores wearable technology, gesture recognition, human-computer interaction, and smart device control. Captures EMG (muscle) signals to enable touch-free interface commands and accessible device operation.',
    keyProblem: 'Improving human-computer interaction and accessibility for physically challenged users through touch-free, gesture-driven controls.',
    technologies: [
      'AI',
      'EMG Signal Processing',
      'Bluetooth',
      'Gesture Recognition',
      'Human-Computer Interaction',
      'Smart Device Control',
    ],
    features: [
      'Hand gesture pattern recognition concept',
      'Wireless signal transmission via Bluetooth protocol',
      'Touch-free appliance and computer interface control',
      'Accessibility-first assistive interaction model',
    ],
    context: 'National-level Hackathon Project',
    githubUrl: 'https://github.com/gnanesh-200716',
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Core languages for systems, data structures, and application logic.',
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Development',
    description: 'Frontend and full-stack interfaces with clean architecture and responsive design.',
    skills: ['HTML', 'CSS', 'React', 'Full-Stack Web Development'],
  },
  {
    title: 'AI / Machine Learning',
    description: 'Applied machine learning, computer vision, and intelligent data pipelines.',
    skills: [
      'Machine Learning',
      'Python-based data/ML workflows',
      'AI-driven Application Development',
      'EMG Signal Processing',
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Engineering workflows, version control, and design tooling.',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code'],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Full-Stack Development Internship',
    organization: 'Mindenious',
    collaboration: 'In collaboration with Wipro',
    description:
      'Participated in a full-stack development internship at Mindenious, in collaboration with Wipro, gaining practical exposure to software development and full-stack application workflows.',
    highlights: [
      'Gained hands-on experience in full-stack architecture and modular frontend engineering',
      'Learned industry-standard software development workflows and debugging techniques',
      'Collaborated on practical application modules adhering to modern web standards',
    ],
    skills: ['React', 'JavaScript', 'Full-Stack Development', 'Collaboration'],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'nptel',
    title: 'Python for Data Science',
    metric: '75%',
    category: 'Verified Academic Certification',
    institution: 'NPTEL / IIT Madras',
    description:
      'Completed the verified academic course in Python for Data Science offered by IIT Madras through NPTEL, earning a 75% score with foundational mastery in numerical computation, data handling, and scientific Python.',
    badge: 'Score: 75%',
  },
  {
    id: 'avishkar',
    title: 'Avishkar — Inter-College Symposium',
    metric: 'Finalist (2x)',
    category: 'Technical Symposium',
    institution: 'Avishkar Inter-College Symposium',
    description:
      'Selected as a finalist at Avishkar, an inter-college technical symposium, for two consecutive editions in recognition of innovative technical problem-solving and presentation.',
    badge: 'Finalist — 2 Consecutive Times',
  },
  {
    id: 'hackathon',
    title: 'Axon Control Band Hackathon',
    metric: 'National Level',
    category: 'Hackathon Innovation',
    institution: 'National-Level Hackathon',
    description:
      'Engineered and pitched the Axon Control Band concept at a national-level hackathon, showcasing an EMG-based gesture control system for accessible human-computer interaction and smart appliance automation.',
    badge: 'National-Level Hackathon',
  },
];

export const educationData: EducationInfo = {
  degree: 'B.Tech — Computer Science and Engineering',
  specialization: 'Artificial Intelligence and Machine Learning',
  institution: 'Vels Institute of Science, Technology and Advanced Studies (VISTAS)',
  location: 'Pallavaram, Chennai, Tamil Nadu',
  status: '3rd Year Student',
  graduationYear: '2028',
  cgpa: '7.5',
  coursework: [
    'Data Structures & Algorithms',
    'Artificial Intelligence & Machine Learning',
    'Object-Oriented Programming (Java)',
    'Database Management Systems (SQL)',
    'Computer Networks & Operating Systems',
    'Full-Stack Web Development',
  ],
};
