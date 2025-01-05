export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  hostLink?: string;
  frameworks: string[];
  category: string;
}
