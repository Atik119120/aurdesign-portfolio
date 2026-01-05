
export type Section = 'home' | 'about' | 'projects' | 'skills' | 'education' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
}
