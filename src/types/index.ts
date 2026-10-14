export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  keyProblem: string;
  concept: string;
  technologies: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  context?: string;
  isDominant?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  collaboration: string;
  period?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  metric?: string;
  category: string;
  institution: string;
  description: string;
  badge: string;
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  status: string;
  graduationYear: string;
  cgpa: string;
  coursework: string[];
}
