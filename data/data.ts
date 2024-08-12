import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const LINKEDIN_URL = 'https://www.linkedin.com/in/fatihbahadir/';
export const GITHUB_URL = 'https://github.com/fatihbahadir';

export const NAV_ITEMS = [
    {
        href: '/',
        name: 'Home'  
      },
    {
      href: '/about',
      name: 'About'  
    },
    {
        href: '/projects',
        name: 'Projects'  
    },
    {
        href: '/contact',
        name: 'Contact'  
    }
];

export const EDUCATION = [
  {
    id: 1,
    title: 'Maltepe University - Software Engineering',
    date: '2020 - Present',
    description: 'I am a 4th-year student with a 3.38 GPA. Completed prep class and took various programming and software development courses.'
  },
  {
    id: 2,
    title: 'Pendik Anatolian High School',
    date: '2016 - 2020',
    description: 'I graduated from numerical department in high school. Developed a strong interest to mathematics and web programming.'
  },
];

export const EXPERINCE = [
  {
    id: 1,
    title: 'Freelance Developer',
    date: '2022 - Present',
    description: 'Developed websites from simple HTML/CSS sites to complex web applications using React. Worked on various freelance projects.'
  },
  {
    id: 2,
    title: 'Frontend Developer Intern',
    firm: 'JotForm',
    date: 'July 2024 - August 2024',
    description: 'Completed an internship where I developed a live chat application for a no-code app builder using React, Redux, and Redux Saga. Also worked on side projects.'  },
];



export const EXPERIENCE_ITEMS = [
  {
    title: "Experience with",
    description: 'Hands-on experience with these technologies and tools, used in various projects and tasks to deliver effective solutions.',
    items: [
      "Figma",
      "Firebase",
      "Reach Router",
      "Spring Boot",
      "C",
      "C# .NET",
      "Selenium",
      "Tkinter",
      "Vercel"
    ]
  },
  {
    title: "Years of ex with",
    description: 'Extensive experience gained over the years with these technologies, allowing for efficient and robust development practices.',
    items: [
      "Axios",
      "Fetch API",
      "React Context",
      "React Router",
      "JavaScript",
      "NodeJS",
      "Git",
      "GitHub",
      "ExpressJS",
      "Python",
      "NextJS"
    ]
  },
  {
    title: "Work and study",
    description: 'In-depth work and study with these technologies, enhancing both practical skills and theoretical understanding for comprehensive development.',
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind",
      "Bootstrap",
      "Styled Components",
      "Redux",
      "Redux Saga",
      "TypeScript",
      "API RESTful",
      "PostgreSQL",
      "NoSQL Databases"
    ]
  },
];


export const SOCIALS = [
  {
    id: 1,
    Icon: FaLinkedinIn,
    href: LINKEDIN_URL
  },
  {
    id: 2,
    Icon: FaGithub,
    href: GITHUB_URL
  },
  {
    id: 3,
    Icon: FaInstagram,
    href: 'https://www.instagram.com/marksmanofplat/' 
  },
  {
    id: 4,
    Icon: FaXTwitter,
    href: 'https://x.com/lodylol_' 
  },
]


export const PROJECT_ITEMS = [
  {
    id: 1,
    Img: "/project4.png",
    title: "Design Editor",
    description: "This is the design editor, which I consider my biggest project. You can design almost everything. With this editor, you can create, save and download designs like Canva. Currently, I am working on adding video editing features.",
    liveLink: "https://design-editor-ten.vercel.app/",
    githubLink: "https://github.com/fatihbahadir/design-editor",
    year: '2023 - Present',
    role: 'Frontend Developer'
  },
  {
    id: 2,
    Img: "/project5.png",
    title: "CyberSec Application",
    description: "A cybersecurity application that includes a backend for handling data collected by keylogger and email collection scripts from victims’ computers. It supports authentication, authorization, and a frontend dashboard for managing and viewing collected data.",
    backendGithubLink: "https://github.com/fatihbahadir/cyber-security-backend",
    frontendGithubLink: "https://github.com/fatihbahadir/cyber-sec-frontend",
    year: '2024',
    role: 'Fullstack Developer'
  },
  {
    id: 3,
    Img: "/project2.png",
    title: "Landing Page",
    description: "This is the landing page for our YouTube automation project. I developed the landing page, I added animations with AOS, integrated email connections using EmailJS, implemented language switching with i18n, and added dark mode.",
    liveLink: "https://webinen.com",
    year: '2023',
    role: 'Frontend Developer'
  },
  {
    id: 4,
    Img: "/project3.png",
    title: "Thesis Management System",
    description: "It is a thesis management system for our SE307 class. I developed the whole front end. This dashboard allowed us to add and delete theses, filter them by any parameter, add university, institute, related topics and subjects.",
    githubLink: "https://github.com/fatihbahadir/dbm-thesis",
    liveLink: "https://dbm-thesis.vercel.app",
    year: '2024',
    role: 'Fullstack Developer'
  },
  {
    id: 5,
    Img: "/project1.png",
    title: "Process Monitoring",
    description: "With my university friends, we built a system that automatically uploads videos to YouTube. I developed the dashboard. This dashboard allowed us to track uploaded videos with charts, manage accounts, add configurations, and monitor progress.",
    liveLink: "https://monitoring.webinen.com/",
    year: '2023',
    role: 'Frontend Developer'
  }
];
