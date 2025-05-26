export interface Project {
    name: string;
    description: string;
    technologies: string[];
    sourceUrl: string;
    images?: string[];         // Optional: for image galleries
    videoUrl?: string;         // Optional: for video preview
  }