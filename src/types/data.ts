export interface DeveloperProfile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  social: {
    github: string;
    email: string;
    location: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface PortfolioData {
  profile: DeveloperProfile;
  projects: Project[];
  skills: Skill[];
}
