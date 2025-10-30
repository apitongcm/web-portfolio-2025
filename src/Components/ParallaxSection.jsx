import { motion, useScroll, useTransform } from "framer-motion";
import bgLayer from "../assets/datacenter.jpg";
import midLayer from "../assets/smoke.png";
import frontLayer from "../assets/Hero.png";

export default function ParallaxHero() {
  const { scrollY } = useScroll();

  // Responsive parallax motion for different layers
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const yMid = useTransform(scrollY, [0, 500], [0, -80]);
  const yFront = useTransform(scrollY, [0, 500], [0, 250]);
  const yCaption = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative h-[120vh] xs:h-[100vh] sm:h-[140vh] md:h-[160vh] overflow-hidden flex items-center justify-center bg-black">
      {/* BACKGROUND LAYER */}
      <motion.div
        style={{ backgroundImage: `url(${bgLayer})`, y: yBg }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      />

      {/* MIDGROUND LAYER */}
      <motion.div
        style={{ backgroundImage: `url(${midLayer})`, y: yMid }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-black/30"
      />

      {/* FOREGROUND LAYER */}
      <motion.div
        style={{ backgroundImage: `url(${frontLayer})`, y: yFront }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-black/40"
      />

      {/* HERO TEXT */}
      <motion.div
        className="relative z-10 text-center text-white px-4 sm:px-6 md:px-10"
        style={{ y: yCaption }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-2xl md:text-3xl opacity-90 drop-shadow-xl leading-snug"
        >
          From Firmware to Frameworks—Innovation with Security in Mind.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold mt-3 leading-tight drop-shadow-xl"
        >
          Bridging Hardware <br />
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
            Code.
          </span>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 text-base sm:text-xl px-8 sm:px-12 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gradient-to-r from-red-500 to-pink-500 transition duration-300"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
}
