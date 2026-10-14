export const personalInfo = {
  fullName: "GNANESHWARAN",
  subName: "Gnaneshwaran S.",
  role: "Software Engineer & AI/ML Developer",
  headlineLine1: "Building useful AI.",
  headlineLine2: "Making ideas real.",
  bio: "Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at VISTAS, Chennai. Passionate about software engineering, backend systems, intelligent applications, and building polished products from ideas.",
  location: "Chennai, India",
  email: "sgnaneshwaran577@gmail.com",
  phone: "+91 9080090632",
  github: "https://github.com/gnanesh-200716",
  linkedin: "https://www.linkedin.com/in/gnaneshwarans/",
  availability: "Available for Software Engineering & AI Internships"
};

export const featuredProjects = [
  {
    id: "cinematch",
    number: "01",
    title: "CineMatch",
    category: "AI Movie Recommendation Platform",
    tagline: "Content-based movie discovery driven by TF-IDF vectorization and cosine similarity.",
    description: "A content-based movie recommendation platform that uses TF-IDF and cosine similarity to recommend movies based on their content and user preferences. Integrated with TMDB REST API for dynamic metadata, posters, ratings, and live search.",
    dataset: "4,804 Movies",
    technologies: ["React", "Vite", "FastAPI", "Python", "Scikit-learn", "TMDB API"],
    coverImage: "/images/cinematch-cover.webp",
    fallbackImage: "/images/cinematch-cover.jpg",
    accentColor: "#FFF36A",
    highlights: [
      { label: "Dataset Scope", value: "4,804 titles in vector space" },
      { label: "Core Algorithm", value: "TF-IDF + Cosine Similarity" },
      { label: "Backend API", value: "Python & FastAPI REST server" },
      { label: "Frontend", value: "React & Vite with client filtering" }
    ],
    contributions: [
      "Implemented a content-based recommendation approach using TF-IDF vectorization and cosine similarity across genres, overviews, and keywords.",
      "Engineered vector matrices over a curated 4,804-title film catalog with sub-50ms inference.",
      "Integrated TMDB REST API data for dynamic movie discovery, poster imagery, and rich metadata.",
      "Developed an intuitive web interface connecting search and recommendation endpoints to the user experience."
    ],
    github: "https://github.com/gnanesh-200716",
    status: "Implemented & Active"
  },
  {
    id: "java-pdf-rag",
    number: "02",
    title: "Java PDF-RAG",
    category: "Document Retrieval and Question Answering",
    tagline: "High-dimensional enterprise PDF ingestion, semantic chunking, and embedding pipeline.",
    description: "A document-processing application that extracts PDF content, splits it into semantic chunks, generates high-dimensional embeddings using Gemini, and supports context-aware question answering with Spring AI.",
    dataset: "43 Semantic Chunks • 3,072-D",
    technologies: ["Java 17", "Spring Boot", "Spring AI", "Gemini Embeddings", "React", "REST APIs", "Postman"],
    coverImage: "/images/java-pdf-rag-cover.webp",
    fallbackImage: "/images/java-pdf-rag-cover.jpg",
    accentColor: "#FFF36A",
    highlights: [
      { label: "Chunks Processed", value: "43 semantic chunks" },
      { label: "Vector Dimensions", value: "3,072 dimensions per embedding" },
      { label: "Framework", value: "Java 17 & Spring Boot 3" },
      { label: "AI Integration", value: "Spring AI & Gemini Embeddings" }
    ],
    contributions: [
      "Built clean multi-part REST API endpoints in Spring Boot for PDF upload, streaming, and validation.",
      "Implemented document chunking logic to extract structured passages while preserving semantic cohesion.",
      "Successfully processed test documents into 43 chunks and generated 43 embeddings with 3,072 dimensions each.",
      "Thoroughly tested and debugged backend endpoints using Postman, connecting to a React frontend client."
    ],
    github: "https://github.com/gnanesh-200716",
    status: "Core Pipeline Implemented"
  }
];

export const skillCategories = [
  {
    category: "Frontend",
    icon: "💻",
    skills: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Java", "Spring Boot", "Python", "FastAPI", "REST APIs"]
  },
  {
    category: "AI and machine learning",
    icon: "🧠",
    skills: ["Scikit-learn", "TF-IDF", "Cosine similarity", "Retrieval-augmented generation", "Embeddings", "Gemini API integration"]
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Postman", "Vite"]
  }
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "Mindenious (in collaboration with Wipro)",
    period: "March 2025 – April 2025",
    location: "Remote / Chennai",
    type: "Internship",
    description: "Built a responsive e-commerce web application using HTML, CSS, JavaScript, and Bootstrap during a one-month hands-on development internship. Implemented product-focused UI components, responsive layouts, and interactive features while practicing collaborative development workflows and exploring Generative AI and RAG concepts."
  }
];

export const education = {
  degree: "Bachelor of Technology (B.Tech) — Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  institution: "VELS Institute of Science, Technology & Advanced Studies (VISTAS)",
  location: "Chennai, Tamil Nadu",
  period: "2024 – 2028",
  cgpa: "7.5",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Applied Machine Learning"
  ]
};

export const certifications = [
  {
    title: "Python for Data Science",
    institution: "NPTEL — IIT Madras",
    score: "75%",
    year: "2024",
    status: "Certified"
  }
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Gnaneshzz",
    url: "https://leetcode.com/u/Gnaneshzz/",
    highlight: "Regular Data Structures & SQL Practice",
    badge: "Problem Solving"
  },
  {
    platform: "HackerRank",
    username: "sgnaneshwaran577",
    url: "https://www.hackerrank.com/profile/sgnaneshwaran577",
    highlight: "5★ Gold Rating in Java",
    badge: "5★ Java"
  },
  {
    platform: "GeeksforGeeks",
    username: "gnaneshsizcou",
    url: "https://www.geeksforgeeks.org/profile/gnaneshsizcou?from=explore&tab=overview",
    highlight: "Core DSA & Computer Science Practice",
    badge: "Algorithms"
  }
];
