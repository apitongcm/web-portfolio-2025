import React from 'react'
import { motion } from "framer-motion";
import { ChartNetwork, Bug, BadgeCheck, Cpu, Search, FileCode } from 'lucide-react';




function MoreAboutMe() {

     const competencies = [
        { Icon: ChartNetwork , caption: "Communication Protocols", 
            details: "Expert in CAN, LIN, CXPI, and Ethernet protocols essential for automotive ECU communication and diagnostics" },
        { Icon: Bug , caption: "Test Automation", 
            details: "Proficient in developing automated test frameworks using Javascript, Python, Matlab, CANoe, and Vector tools for comprehensive validation" },
        { Icon: BadgeCheck, caption: "Industry Standards", 
            details: "Deep understanding of JASO, JMAAB modeling guidelines, AUTOSAR, ISO 26262 functional safety, and OSEK process frameworks" },
        { Icon:Cpu, caption: "Embedded Systems", 
            details: "Experienced in firmware development and debugging for microcontroller platforms using C and assembly language" },
        { Icon: Search, caption: "Diagnostics & Troubleshooting", 
            details: "Skilled in UDS diagnostics, fault analysis, and root cause investigation using oscilloscopes and protocol analyzers" },
        { Icon: FileCode, caption: "Scripting & Tools", 
            details: "Advanced capabilities in Javascript, Python, CAPL scripting, and CI/CD pipeline integration for continuous testing" },
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
      <h3 className='text-lg font-semibold'>
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