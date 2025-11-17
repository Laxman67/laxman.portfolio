import { useState, useEffect } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import skills from "../utility/constants/skillConstants";
import ProjectsContainer from "./ProjectsContainer";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import GetInTouchLink from "./GetInTouchLink";
import social from "../utility/constants/socialLinks";

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
                  className={`capitalize hover:text-purple-400 transition-colors cursor-pointer ${
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
            {/* <image src="" */}
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
          {/* Get In Touch Component */}
          <GetInTouchLink socialLinks={social} />
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
                href="https://drive.google.com/file/d/1oynUs3ZOMmqOwf9fZHql7VZgXtkeIeB-/view"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 border border-purple-500 rounded-lg hover:bg-purple-500/30 transition-all"
              >
                Download Resume
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
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
        <ProjectsContainer isVisible={isVisible} />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center py-20 px-4"
      >
        <ContactSection isVisible={isVisible} />
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
