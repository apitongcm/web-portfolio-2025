import React from 'react'
import { motion } from "framer-motion";
import { ChartNetwork, Bug, BadgeCheck, Cpu, Search, FileCode } from 'lucide-react';




function MoreAboutMe() {

     const competencies = [
        { Icon: Bug , caption: "Software Testing & Automation", 
            details: "Drove quality via UI/API automation, functional, integration, system, performance testing, and integrating test frameworks." },
        { Icon: Cpu , caption: "Systems & Embedded Validation", 
            details: "Experience validating safety-critical embedded systems, including ECU communication, diagnostics, and fault analysis." },
        { Icon: BadgeCheck, caption: "Industry & Quality Standards", 
            details: "Experience working within structured engineering and quality processes, including safety and compliance-driven environments." },
        { Icon:ChartNetwork, caption: "Security Assurance and Compliance", 
            details: "Validated information and systems for ISMS and GDPR compliance, assuring alignment with critical security policies." },
        { Icon: Search, caption: "Diagnostics & Troubleshooting", 
            details: "Root-cause analysis using logs, protocol analyzers, and system-level debugging techniques." },
        { Icon: FileCode, caption: "Scripting & Tools", 
            details: "JavaScript, Python, CAPL, VBA, Bash scripting, and automation tooling for testing, validation, and workflow efficiency." },
      ];
  return (
    <>
     <section className="min-h-screen bg-white py-24 px-6 ">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-400 mb-16 tracking-tight"
      >
        Core <span className="text-blue-600">Competencies</span>
      </motion.h2>


    <motion.div
  className="
    grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto
  "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  }}
>
  {competencies.map(({ Icon, caption, details }, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, borderColor: "#1d6fe1" }}
        transition={{ type: "spring", stiffness: 150, delay: i * 0.05 }}
    
      className="
        bg-white border border-neutral-800 
        rounded-3xl 
        p-12 h-64
        flex flex-col items-center justify-center
        hover:shadow-[0_0_15px_rgba(225,29,72,0.2)] 
        transition-all duration-300
      "
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
      >
        <Icon size={42} className='text-blue-700' />
      </div>
      <h3 className='text-lg text-center font-semibold'>
        {caption}
      </h3>
      <p className="text-sm mt-4 text-center font-medium tracking-wide">
        {details}
      </p>
    </motion.div>
  ))}
</motion.div>
     </section>
    </>
  )
}

export default MoreAboutMe