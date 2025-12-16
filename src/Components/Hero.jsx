import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Connect from "./Connect";

function TypewriterHero() {
  const words = [
    "Four years of experience in Automotive Software Development",
    "Embedded systems engineer with ECU integration expertise",
    "Master’s degree candidate in Computer Science",
    "Focused on software quality, automation, and security",
    "Bachelor’s degree in Electronics Engineering",
    "Freelance QA engineer and technical specialist",
    "Based in Iloilo City, Philippines"
    ];

  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [speed, setSpeed] = useState(150);

  // Typewriter logic
  useEffect(() => {
    if (wordIndex === words.length) return; // stop if done

    if (subIndex === words[wordIndex].length + 1 && !deleting) {
      setDeleting(true);
      setSpeed(75);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setSpeed(75);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, wordIndex, deleting, speed]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
  <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-[url('/assets/city-hero.jpg')] text-black">
  {/* Overlay for better text contrast */}
  <div className="absolute inset-0 bg-white/30 sm:bg-white/20 backdrop-blur-[1px]"></div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 text-center px-4 sm:px-6 md:px-12"
  >
    <h1 className="mt-10 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">
      Carl Marwin{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
        Apitong
      </span>
    </h1>

    <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl text-gray-700 opacity-90 drop-shadow-md leading-snug">
      {`${words[wordIndex].substring(0, subIndex)}${blink ? "|" : " "}`}
    </h2>

    <div className="mt-6 sm:mt-8">
      <Connect />
    </div>
  </motion.div>
</section>

  );
}

export default TypewriterHero;