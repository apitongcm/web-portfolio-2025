import React from 'react'
import { motion } from "framer-motion";





function MoreAboutMe() {

     
  return (
    <>
    <motion.div
  className="grid place-items-center max-w-6xl mx-auto px-4 relative min-h-[90vh] sm:min-h-screen "
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center sm:text-left">
    <p className="text-lg sm:text-xl md:text-2xl text-black max-w-xl mx-auto">
      I have experience developing both embedded and web-based projects where maintaining accuracy, stability,
      and effective risk mitigation was paramount. My background allows me to approach software development with
      a strong tester's mindset, focusing on anticipating failures, validating complex edge cases, and proactively
      improving overall quality before the product's release.
    </p>

    <p className="text-lg sm:text-xl md:text-2xl text-black max-w-xl mx-auto">
      I am currently pursuing a Master’s degree in Computer Science and have hands-on experience with test
      automation, scripting, and system troubleshooting. I enjoy working on projects where quality, reliability,
      and engineering discipline matter.
    </p>
  </div>
</motion.div>

    </>
  )
}

export default MoreAboutMe