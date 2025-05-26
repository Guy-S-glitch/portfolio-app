export interface Project {
    name: string;
    description: string;
    technologies: string[];
    sourceUrl: string;
    images?: string[];
    videoUrl?: string;
    isSelf?:boolean;
  }