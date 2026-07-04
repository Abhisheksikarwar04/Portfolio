export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  keyFeatures: string[];
  techStack: string[];
  challengesSolved: string;
  architecture: string;
  github: string;
  demo: string;
  category: string; // 'MERN' | 'React' | 'Backend' | 'Full Stack' | 'Java' | 'API' | 'Database'
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  university: string;
  college: string;
  year: string;
  cgpa: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

export interface CodingProfile {
  id: string;
  platform: 'LeetCode' | 'HackerRank' | 'CodeChef' | 'Codeforces' | 'GeeksforGeeks';
  username: string;
  rating: string;
  solved: number;
  badges: string[];
  rank: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  feedback: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage: string;
}
