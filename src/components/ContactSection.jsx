import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = ({ isVisible }) => {
  return (
    <>
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
              target="_blank"
              href="https://www.linkedin.com/in/laxmanitstudent/"
              className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-all"
            >
              <Linkedin size={32} className="text-purple-400" />
              <span className="text-sm text-gray-400">/in/laxmanitstudent</span>
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
    </>
  );
};

export default ContactSection;
