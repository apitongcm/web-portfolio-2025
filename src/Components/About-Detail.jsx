import React from 'react'
import { motion } from "framer-motion";





function MoreAboutMe() {

     
  return (
    <>
     <section className="min-h-screen bg-white py-24 px-6 ">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-400 mb-16 tracking-tight"
      >
        More <span className="text-blue-600">About me</span>
      </motion.h2>


    <motion.div
  className="
    grid-cols-2 gap-4 max-w-6xl mx-auto
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
    <div className='mb-6 px-4 sm:px-8 md:px-16 text-center sm:text-left'>

    <p className="text-lg sm:text-xl md:text-2xl text-black max-w-xl mx-auto sm:mx-0  ">
       I have experience developing both embedded and web-based projects where maintaining accuracy, stability, 
       and effective risk mitigation was paramount. My background allows me to approach software development with 
       a strong tester's mindset, focusing on anticipating failures, validating complex edge cases, and proactively 
       improving overall quality before the product's release.
    </p>
    </div>

      <div className='mb-6 px-4 sm:px-8 md:px-16 text-center sm:text-left'>

    <p className="text-lg sm:text-xl md:text-2xl text-black max-w-xl mx-auto sm:mx-0 ">
      I am currently pursuing a Master’s degree in Computer Science and
       have hands-on experience with test automation, scripting, and system troubleshooting. 
       I enjoy working on projects where quality, reliability, and engineering discipline matter.
    </p>
    </div>
</motion.div>
     </section>
    </>
  )
}

export default MoreAboutMe