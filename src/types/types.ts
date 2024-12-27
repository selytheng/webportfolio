export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  period: string;
  company: string;
  description: string[];
}
export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  hostLink?: string;
  frameworks: string[];
  category: 'web' | 'security' | 'infrastructure';
}
