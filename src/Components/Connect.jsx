import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react";

function Connect() {
  return (
    <div className="flex items-center gap-6 justify-center p-4">
      <a
        href="https://github.com/apitongcm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition-transform transform hover:scale-110"
      >
        <Github size={52} />
      </a>

      <a
        href="https://linkedin.com/in/apitongcm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-700 transition-transform transform hover:scale-110"
      >
        <Linkedin size={52} />
      </a>

      <a
        href="mailto:apitong.carlmarwin@proton.com"
        className="text-gray-600 hover:text-red-500 transition-transform transform hover:scale-110"
      >
        <Mail size={52} />
      </a>
    </div>
  )
}

export default Connect