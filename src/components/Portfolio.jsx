import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code2,
} from "lucide-react";
import skillConstants from "../utility/constants/skillConstants";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment gateway integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics dashboard for tracking social media metrics with data visualization and AI-powered insights.",
      tech: ["React", "Express", "PostgreSQL", "Chart.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team chat, and kanban boards.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "Content creation platform powered by AI for generating blog posts, social media content, and marketing copy.",
      tech: ["React", "Node.js", "OpenAI API", "Redis"],
      github: "#",
      live: "#",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              &lt;Laxman/&gt;
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === item ? "text-purple-400" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-purple-500/20">
            {["home", "about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-purple-500/10"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible.home
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Laxman
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            MERN Stack Developer | Building Scalable Web Solutions
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className=" cursor-pointer px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-purple-500 rounded-full hover:bg-purple-500/10 transition-all"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex gap-6 justify-center text-gray-400">
            <a
              href="#"
              className="hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate MERN stack developer with 3+ years of
                experience building modern, scalable web applications. I love
                turning complex problems into simple, beautiful, and intuitive
                solutions.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My expertise spans across the full stack, from crafting
                pixel-perfect user interfaces to designing robust backend
                architectures. I'm constantly learning and staying up-to-date
                with the latest technologies.
              </p>
              <a
                href="https://drive.google.com/file/d/1iw5njceRpdecrnfCGlDM-6dJs9JRUDcw/view?usp=sharing"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 border border-purple-500 rounded-lg hover:bg-purple-500/30 transition-all"
              >
                Download Resume
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skillConstants.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
                >
                  <skill.icon className="text-purple-400 mb-3" size={32} />
                  <h3 className="font-bold mb-2">{skill.name}</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {skill.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <Code2
                    size={64}
                    className="text-purple-400 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center py-20 px-4"
      >
        <div
          className={`max-w-4xl mx-auto w-full transition-all duration-1000 ${
            isVisible.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <p className="text-center text-lg text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a
                href="mailto:laxman.webdev67@gmail.com"
                className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-all"
              >
                <Mail size={32} className="text-purple-400" />
                <span className="text-sm text-gray-400">
                  laxman.webdev67@gmail.com
                </span>
              </a>
              <a
                href="https://github.com/Laxman67"
                target="_blank"
                className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-all"
              >
                <Github size={32} className="text-purple-400" />
                <span className="text-sm text-gray-400">@Laxman67</span>
              </a>
              <a
                href="https://www.linkedin.com/in/laxmanitstudent/"
                className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-all"
              >
                <Linkedin size={32} className="text-purple-400" />
                <span className="text-sm text-gray-400">
                  /in/laxmanitstudent
                </span>
              </a>
            </div>
            <div className="text-center">
              <a
                href="mailto:laxman.webdev67@gmail.com"
                target="_blank"
                className=" cursor-pointer inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 text-center text-gray-400">
        <p>&copy; 2024 John Doe. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
