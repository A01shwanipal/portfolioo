
export const profileData = {
  name: 'Ashwani Pal',
  title: 'Java Backend Developer',
  avatar: '/myimg2.jpg',
  email: 'ashwani56740@gmail.com',
  phone: '9327192863',
  birthday: 'Oct 20, 2004',
  location: 'Bhopal, India',
  social: {
    github: 'https://github.com/account',
    Linkedin: 'www.linkedin.com/in/ashwanipal7',
    instagram: 'https://instagram.com/Ashwan812',
   
  },
}

export const aboutData = {
  description: [
    "Aspiring Java Backend Developer with hands-on experience in building scalable backend applications using Java, Spring Boot, REST APIs, Microservices, and MySQL.",
    "Completed a backend development internship at Naman Digital Pvt. Ltd., where I worked on API development, integration, and database management. Passionate about building clean, secure, and high-performance backend systems.",
  ],

  services: [
    {
      icon: 'Code',
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    
    {
      icon: 'Zap',
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side solutions with Node.js and modern frameworks.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Development',
      description: 'Professional development of mobile applications with React Native and modern tools.',
    },
    {
      icon: 'PenTool',
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that enhance user experience.',
    },
  ],
  testimonials: [
    {
      avatar: '/professional-man.jpg',
      name: 'Daniel Lewis',
      text: 'John was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Jessica Miller',
      text: 'John was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.',
    },
    {
      avatar: '/professional-man.jpg',
      name: 'Michael Chen',
      text: 'Outstanding work! John delivered a high-quality product that exceeded our expectations. His attention to detail is remarkable.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Sarah Johnson',
      text: 'Professional, creative, and highly skilled. John is the developer you want on your team for any complex project.',
    },
  ],
  clients: [
    { name: 'TechCorp', logo: '/tech-company-logo.jpg' },
    { name: 'StartupHub', logo: '/startup-logo.png' },
    { name: 'DesignStudio', logo: '/design-agency-logo.png' },
    { name: 'CodeLabs', logo: '/software-company-logo.png' },
    { name: 'WebSolutions', logo: '/web-agency-logo.jpg' },
    { name: 'AppMakers', logo: '/app-development-logo.jpg' },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'B.Tech - Computer Science Engineering (SAGE University, Bhopal)',
      period: '2022 — Present',
      description: 'Focused on Java Backend Development, Spring Boot, and Microservices.',
    },
  ],

  experience: [
    {
      title: 'Software Development Intern',
      company: 'Naman Digital Pvt. Ltd.',
      period: 'Jun 2025 — Aug 2025',
      description:
        'Developed and tested REST APIs using Java and Spring Boot. Worked on backend modules, API integration, and MySQL database operations following industry standards.',
    },
  ],

  skills: [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'Hibernate', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'REST APIs', level: 88 },
    { name: 'Microservices', level: 75 },
  ],
}




export const portfolioData = {
  categories: ['all', 'web development', 'applications'],

  projects: [
    {
      title: 'Student CRM System',
      category: 'web development',
      description:
        'Full-stack CRM system for managing student data with Admin & User modules.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      image: '/crm.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#', // optional
    },

    {
      title: 'Multi-Vendor Course Platform',
      category: 'web development',
      description:
        'Microservices-based marketplace platform with authentication and course management.',
      tech: ['Spring Boot', 'Spring Cloud', 'React', 'MySQL'],
      image: '/course.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },

    {
      title: 'Weather Web Application',
      category: 'applications',
      description:
        'Real-time weather app using REST APIs to display temperature, humidity, and conditions.',
      tech: ['Java', 'Spring Boot', 'REST API', 'MySQL'],
      image: '/weather.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },

    {
      title: 'Quiz Application',
      category: 'applications',
      description:
        'Desktop quiz application with login system, MCQs, and score tracking.',
      tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
      image: '/quiz.png',
      githubUrl: 'https://github.com/A01shwanipal',
      liveUrl: '#',
    },
  ],
}




export const blogData = {
  posts: [
    {
      title: 'Building Modern Web Applications with Next.js 15',
      category: 'Development',
      date: 'Mar 15, 2024',
      readTime: '8 min',
      image: '/web-development-coding.png',
      excerpt: 'Deep dive into Next.js 15 features and App Router enhancements.',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'building-modern-web-apps-nextjs-15',
    },
    {
      title: 'Microservices Architecture: A Complete Guide',
      category: 'Architecture',
      date: 'Mar 8, 2024',
      readTime: '12 min',
      image: '/software-architecture.jpg',
      excerpt: 'Design scalable microservices with real-world examples.',
      tags: ['Architecture', 'Backend', 'DevOps'],
      slug: 'microservices-architecture-guide',
    },
   
    
  ],
}

export const contactData = {
  email: 'ashwani56740@gmail.com',
  phone: '9327192863',
  location: 'Bhopal M.P India',
  mapEmbedUrl:
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.21580453702!2d77.3318895!3d23.2599333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42f2d9c1e4f5%3A0x8f0b1b5b0b6e5c3!2sBhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
}
