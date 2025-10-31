import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
        
        {/* Brand Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-white tracking-wide">
            Carl Marwin J. Apitong
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            QA Engineer | Electronics Engineering | System Developer | Cybersecurity Enthusiast
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center sm:justify-end gap-4 flex-wrap text-sm">
          <a
            href="#about"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end gap-5 text-xl">
          <a
            href="https://github.com/apitongcm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://ph.linkedin.com/in/apitongcm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="#contact"
            className="hover:text-pink-400 transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Carl Marwin J. Apitong | Powered by React and TailwindCSS
      </div>
    </footer>
  );
}

export default Footer;
