import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Connect() {
  return (
    <div className="flex items-center gap-6 justify-center p-4">
      <a
        href="https://github.com/apitongcm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition-transform transform hover:scale-110"
      >
        <FaGithub className="text-4xl sm:text-5xl md:text-6xl"  />
      </a>

      <a
        href="https://ph.linkedin.com/in/apitongcm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-700 transition-transform transform hover:scale-110"
      >
        <FaLinkedin className="text-4xl sm:text-5xl md:text-6xl" />
      </a>

      <a
        href="#contact"
        className="text-gray-600 hover:text-red-500 transition-transform transform hover:scale-110"
      >
        <FaEnvelope className="text-4xl sm:text-5xl md:text-6xl" />
      </a>
    </div>
  )
}

export default Connect