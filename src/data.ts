import { Project, Experience, Education, Certification, CodingProfile, Testimonial, BlogPost } from './types';

export const personalInfo = {
  name: "Abhishek Singh Sikarwar",
  title: "Software Developer",
  tagline: "Building responsive web applications and secure software architectures.",
  role: "Software Developer",
  status: "Open to exceptional opportunities",
  objective: "To design and deploy resilient, responsive, and user-friendly software applications while solving complex programmatic problems.",
  summary: "Entry-level Software Developer and Computer Science Engineering student with hands-on experience in Java, React.js, and JavaScript. Skilled in building responsive web applications, solving problems, and working with modern development tools.",
  specializations: [
    "Frontend Web Development (React.js)",
    "Object-Oriented Programming (Java)",
    "Cybersecurity & Threat Mitigation",
    "Database Management (MySQL)",
    "Data Structures & Algorithms"
  ],
  softSkills: [
    "Problem-Solving & Critical Thinking",
    "Teamwork & Collaboration",
    "Effective Communication",
    "Adaptability & Active Learning",
    "Analytical Reasoning"
  ],
  location: "Agra, India",
  email: "Sikarwarabhi8479@gmail.com",
  phone: "+91-8445911979",
  github: "https://github.com/Abhisheksikarwar04",
  linkedin: "https://linkedin.com/in/abhishek-singh-sikarwar04",
  resumeUrl: "#", // Placeholder
  avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80" // High quality professional male developer avatar
};

export const skillsData = {
  Frontend: [
    { name: "React.js", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 85 }
  ],
  Backend: [
    { name: "Node.js", level: 82 },
    { name: "Express.js", level: 80 },
    { name: "REST APIs", level: 85 }
  ],
  Databases: [
    { name: "MySQL", level: 90 }
  ],
  "Programming Languages": [
    { name: "Java", level: 92 },
    { name: "JavaScript", level: 90 }
  ],
  Tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 }
  ],
  Deployment: [
    { name: "Vercel", level: 80 },
    { name: "GitHub Pages", level: 85 }
  ]
};

export const projectsData: Project[] = [
  {
    id: "digital-footprint-analyzer",
    title: "Digital Footprint Analyzer",
    description: "An AI-assisted Digital Footprint Analyzer using modern web technologies to monitor online identity exposure, detect potential data leaks, and provide personalized security recommendations.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=450&q=80",
    keyFeatures: [
      "AI-assisted scanning algorithms to map online identity footprints and data vulnerability",
      "Comprehensive leak detection mechanics scanning compromised public repositories",
      "Personalized security advisory system that generates actionable defense measures",
      "Dynamic data charts presenting threat exposures by vector",
      "Secure dashboard interface built with MERN for managing user checks"
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Recharts"],
    challengesSolved: "Reducing page latency during extensive external API search queries. Solved by implementing an asynchronous debounced check flow on the Express router.",
    architecture: "Three-tier architecture comprising a modular React single page application, a decoupled Node/Express backend API gateway, and structured document schemas in MongoDB.",
    github: "https://github.com/Abhisheksikarwar04/digital-footprint-analyzer",
    demo: "https://github.com/Abhisheksikarwar04/digital-footprint-analyzer",
    category: "MERN",
    featured: true
  },
  {
    id: "car-rental-system",
    title: "Car Rental System",
    description: "A robust menu-driven Java application for car rental operations, featuring real-time vehicle availability tracking, booking confirmation workflows, customer data management, and rental transaction processing.",
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&h=450&q=80",
    keyFeatures: [
      "Real-time vehicle availability tracking with automatic reservation states",
      "Structured workflows facilitating seamless customer booking confirmations",
      "In-memory customer data management module for reliable details logging",
      "Automated transaction processor calculating total rates based on renting periods",
      "Clean menu-driven console design optimized for swift administrators use"
    ],
    techStack: ["Java", "MySQL", "OOPs", "Data Structures"],
    challengesSolved: "Designing robust, state-synchronized data flows inside menu loops. Resolved by structuring pure Object-Oriented models and encapsulation rules.",
    architecture: "Consolidated Object-Oriented Java application built with cohesive class abstractions (Car, Customer, Rental) and robust MySQL data integration.",
    github: "https://github.com/Abhisheksikarwar04/car-rental-system",
    demo: "https://github.com/Abhisheksikarwar04/car-rental-system",
    category: "Java",
    featured: true
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "Infosys Springboard Virtual Internship 6.0",
    role: "Intern",
    duration: "Feb 2026 - Apr 2026",
    responsibilities: [
      "Engineered a Unified Digital Banking Interface featuring intelligent transaction monitoring and comprehensive account management solutions.",
      "Designed responsive and modular user interface screens for banking actions using React.js and modern styling principles.",
      "Collaborated with virtual workspace peers and mentors to validate transaction flows, error conditions, and state transitions.",
      "Implemented client-side data validation schemas to ensure secure transfer of financial and personal user records."
    ],
    technologies: ["React.js", "Java", "JavaScript", "HTML5", "CSS3", "Git"],
    achievements: [
      "Successfully completed Infosys Springboard Virtual Internship 6.0 program and passed all performance review metrics.",
      "Secured Certificate of Completion for building advanced digital banking components under expert mentorship."
    ]
  }
];

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology in Computer Science Engineering",
    university: "Anand Engineering College, AKTU",
    college: "Department of Computer Science Engineering",
    year: "2022 - Present",
    cgpa: "7.3 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Front-end Developer",
    issuer: "Coursera",
    date: "2025",
    link: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&h=200&q=80"
  },
  {
    id: "cert-2",
    title: "Google CyberSecurity",
    issuer: "Coursera",
    date: "2025",
    link: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&h=200&q=80"
  },
  {
    id: "cert-3",
    title: "Intro to CyberSecurity - Fundamentals",
    issuer: "Cisco",
    date: "2025",
    link: "https://cisco.com",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&h=200&q=80"
  }
];

export const codingProfilesData: CodingProfile[] = [
  {
    id: "cp-1",
    platform: "LeetCode",
    username: "Abhisheksikarwar04",
    rating: "Active Problem Solver",
    solved: 80,
    badges: ["50 Days Streak", "Problem Solving Star"],
    rank: "Consistent Contributor",
    link: "https://leetcode.com"
  },
  {
    id: "cp-2",
    platform: "GeeksforGeeks",
    username: "Abhisheksikarwar04",
    rating: "Active Contributor",
    solved: 50,
    badges: ["Daily Solver Star"],
    rank: "Technical Explorer",
    link: "https://geeksforgeeks.org"
  },
  {
    id: "cp-3",
    platform: "HackerRank",
    username: "Abhisheksikarwar04",
    rating: "5 Star Java Certification",
    solved: 90,
    badges: ["Gold Problem Solving Badge", "5 Star Java Badge"],
    rank: "Top Ranker in Java Core",
    link: "https://hackerrank.com"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Rohan Sharma",
    designation: "Project Mentor at Infosys Springboard",
    feedback: "Abhishek is a quick learner with great analytical skills. He demonstrated solid understanding of Java, modular designs, and React during the Unified Digital Banking Interface project.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-2",
    name: "Dr. K. P. Singh",
    designation: "Professor, CSE Dept. at Anand Engineering College",
    feedback: "Abhishek stands out as an exceptional problem solver. His projects like the Digital Footprint Analyzer and Car Rental System show a great blend of cybersecurity awareness and system design principles.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const achievementsStats = [
  { label: "Projects Completed", value: "5+", suffix: "", key: "projects" },
  { label: "DSA Problems Solved", value: "350+", suffix: "", key: "dsa" },
  { label: "GitHub Contributions", value: "450+", suffix: "", key: "contributions" },
  { label: "Technical Certifications", value: "3", suffix: "", key: "certifications" },
  { label: "B.Tech CGPA", value: "7.3", suffix: "/10", key: "cgpa" }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building a Menu-Driven Car Rental System in Java",
    excerpt: "How to structure Object-Oriented Models, encapsulate car properties, and design transaction logs in clean console-based Java applications.",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    tags: ["Java", "OOPs", "Data Structures"],
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    id: "blog-2",
    title: "Securing Personal Data: Designing an OSINT Identity Exposure Tool",
    excerpt: "A deep dive into building an AI-assisted Digital Footprint Analyzer using React, Express, and cybersecurity databases to check for data leaks.",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    tags: ["MERN", "Cybersecurity", "React"],
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    id: "blog-3",
    title: "Understanding Core Java Concepts for Technical Interviews",
    excerpt: "Explaining Polymorphism, Abstraction, and memory allocation in Java alongside daily DSA problem solving.",
    date: "Mar 05, 2026",
    readTime: "5 min read",
    tags: ["Java", "DSA", "OOPs"],
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&h=250&q=80"
  }
];
