"use client"; // <-- Add this line at the top
// page.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Data arrays
const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    title: "Junior BI Manager",
    company: "Appinio GmbH, Hamburg",
    date: "01/2025 - Present",
    description: [
      "Built Tableau dashboards for tracking KPIs & expenses.",
      "Monitored data pipelines via Fivetran, tracking churn & sales.",
      "Optimized data models with Redshift, dbt & SQL.",
    ],
  },
  {
    title: "Master’s Thesis Student",
    company: "DLR, Jena",
    date: "03/2024 - 12/2024",
    description: [
      "Automated prompt generation for document processing.",
      "Used Mistral & Llama2 for AI-driven prompt engineering.",
      "Refined LLM responses via advanced prompting techniques.",
    ],
  },
  {
    title: "Working Student (BI & Data Analysis)",
    company: "EOS GmbH, Munich",
    date: "04/2023 - 01/2025",
    description: [
      "Developed Power BI dashboards for real-time insights.",
      "Optimized reports using DAX & SQL.",
      "Digitized factory plans, improving efficiency by 60%.",
    ],
  },
  {
    title: "Intern (Deep Learning & AI)",
    company: "ISRO, India",
    date: "01/2021 - 04/2021",
    description: [
      "Built a deep learning model for satellite image segmentation.",
      "Preprocessed & trained models with Python & TensorFlow.",
      "Published research in 'High Technology Letters' journal.",
    ],
  },
  {
    title: "Intern (AI & IoT)",
    company: "IIT Kanpur, India",
    date: "05/2019 - 07/2019",
    description: [
      "Developed ML models for stock price forecasting.",
      "Built an IoT-based obstacle detection robot.",
      "Enhanced AI knowledge through hands-on projects.",
    ],
  },
];

const skills = [
  "Python",
  "SQL",
  "Tableau",
  "Power BI",
  "Machine Learning",
  "Prompt Engineering",
  "Data Visualization",
  "Excel",
  "Azure",
  "Redshift",
  "DBT",
  "Large Language Models",
  "AI Powered Analysis",
];

const projects = [
  {
    title: "AI-Driven Insights from Employee Training Data",
    description:
      "Analyzes unstructured employee training requests with AI, reducing manual HR effort by 70% and improving training need identification efficiency by 60%. A Tableau dashboard helps HR teams track and plan training needs faster. 🚀",
    link: "https://github.com/amandeep316/AI-HR-Data-Analysis",
  },
  {
    title: "Global Survey Insights: Data Professionals",
    description:
      "Analyzing survey responses from 630 data professionals across 8 countries, uncovering trends in work-life balance, coding preferences, and salaries—all visualized in an interactive Power BI dashboard. 🌍📊",
    link: "https://github.com/amandeep316/Survey-Data-Dashboard-/tree/main",
  },
  {
    title: "Google Data Analytics Bicycle Case Study",
    description:
      "A case study for Cyclistic, analyzing customer data using Excel, R, and Tableau to identify trends, increase ridership, and explore new business opportunities. Part of the Google Data Analytics Professional Certificate. 🚴📊",
    link: "https://github.com/amandeep316/Google-Data-Analytics-Case-Study",
  },
];

// Back-to-Top Button Component
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 300 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Back to top"
      >
        ↑
      </button>
    )
  );
}

// Header with responsive (hamburger) menu
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-gray-900/70 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Site Name */}
        <div className="text-2xl font-bold text-blue-400">Amandeep</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden bg-gray-900 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// About Section with image hover effect and fade-in animation
function AboutSection() {
  return (
    <section id="about" className="mb-20 text-center animate-fadeIn">
      <div className="inline-block group">
        <Image
          src="/cvpic.png"
          alt="Profile picture of Amandeep Singh Gill"
          width={180}
          height={180}
          className="rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-lg transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>
      <h1 className="text-5xl font-bold mb-2 text-blue-400 glow-text">Amandeep Singh Gill</h1>
      <h2 className="text-2xl text-gray-300 mb-6 glow-subtitle">
        Business Intelligence Manager
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-300">
        I am a Business Intelligence &amp; Data Analytics enthusiast, passionate about turning raw data into insights.
        With 2+ years of experience, I specialize in SQL, Power BI, Python, and cloud platforms like Azure and Redshift.
        Currently, I have a Master’s in AI Engineering at the University of Passau, refining my skills in data modeling,
        automation, and AI-driven analytics.
      </p>
    </section>
  );
}

// Experience Section styled as a timeline with fade-in
function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 animate-fadeIn">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Professional Experience</h2>
        <div className="relative border-l-2 border-blue-400 w-full max-w-2xl">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 pl-8 relative animate-fadeIn delay-100">
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-blue-400 w-3 h-3 rounded-full"></span>
              <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
              <p className="text-sm text-gray-400">
                {exp.company} | {exp.date}
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Section with interactive badges
function SkillsSection() {
  return (
    <section id="skills" className="mb-20 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-lg py-2 px-4 bg-gray-700 hover:bg-gray-600 text-blue-400 transition transform hover:scale-105"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

// Projects Section with animated cards
function ProjectsSection() {
  return (
    <section id="projects" className="mb-20 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} className="group">
            <Card className="h-full bg-gray-800 border-gray-700 transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Contact Section with interactive button
function ContactSection() {
  return (
    <section id="contact" className="text-center animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
      <p className="mb-8 text-lg text-gray-300">
        Interested in collaborating or have a project in mind? Let's connect!
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105">
        Contact Me
      </Button>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="bg-gray-900 py-6 mt-20 animate-fadeIn">
      <div className="container mx-auto px-6 text-center text-gray-400">
        © {new Date().getFullYear()} Amandeep Singh Gill. All rights reserved.
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 text-white">
      <Header />
      <main className="container mx-auto px-6 py-12 space-y-20">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
