import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiArduino,
  SiFlask,
  SiLinux,
  SiCypress,
  SiJavascript,
  SiSelenium,
  SiNodedotjs,
  SiJupyter,
  SiPostman,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";

export default function SkillsShowcase() {
  const skills = [
    { Icon: SiReact, name: "React", color: "#61DBFB" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
    { Icon: SiPython, name: "Python", color: "#FFD43B" },
    { Icon: SiCplusplus, name: "C++", color: "#00599C" },
    { Icon: SiArduino, name: "Arduino", color: "#00979D" },
    { Icon: SiFlask, name: "Flask", color: "#ffffff" },
    { Icon: SiLinux, name: "Linux", color: "#FCC624" },
    { Icon: SiCypress, name: "Cypress", color: "#69D3A7" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiSelenium, name: "Selenium", color: "#43B02A" },
    { Icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
    { Icon: SiJupyter, name: "Jupyter", color: "#F37626" },
    { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { Icon: SiCanva, name: "Canva", color: "#00C4CC" },
    { Icon: SiAdobephotoshop, name: "Photoshop", color: "#38BDF8" },
  ];

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-16 tracking-tight"
      >
        Tools & <span className="text-blue-600">Technologies</span>
      </motion.h2>

     <motion.div
  className="
    grid grid-cols-3
    gap-4 max-w-5xl mx-auto
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
  {skills.map(({ Icon, name, color }, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 220, damping: 12 }}
      className="
        bg-neutral-900 border border-neutral-800 
        rounded-3xl 
        p-12 h-64
        flex flex-col items-center justify-center
        hover:border-blue-600/60
        hover:bg-neutral-800/90
        transition-all duration-300
      "
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
        style={{
          background: `linear-gradient(135deg, ${color}33, ${color}11)`,
          boxShadow: `0 0 10px ${color}40`,
        }}
      >
        <Icon size={36} color={color} />
      </div>
      <p className="text-sm text-gray-200 font-medium tracking-wide">
        {name}
      </p>
    </motion.div>
  ))}
</motion.div>
    </section>
  );
}
