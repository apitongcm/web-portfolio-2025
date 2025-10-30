import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Profile from "../assets/profile.png";
import CardText from "./CardText";
import CardBack from "./CardBack";

function RotatingItem() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Scroll-linked transforms
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
  <div
    ref={ref}
    className="relative min-h-[150vh] sm:min-h-[180vh] md:h-[200vh] bg-cover bg-center mt-20 sm:mt-30 xs:mt-0"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1517055729445-fa7d27394b48?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074)",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="sticky top-0 flex justify-center items-center h-screen backdrop-blur-sm px-4 sm:px-8">
      <motion.div
        className="relative sm:w-[70vw] md:w-[50vw] aspect-4/3 xs:aspect-3/"
        style={{
          rotateY,
          scale,
          opacity,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        {/* Front face */}
        <div
          className="sm:flex absolute w-full h-full rounded-2xl bg-white bg-opacity-90 shadow-2xl backface-hidden flex flex-col sm:flex-row justify-center items-center overflow-hidden sm:h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full sm:w-1/2 h-1/2 sm:h-full">
            <img
              src={Profile}
              alt="Profile Picture"
              className="w-full h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
            />
          </div>

          <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex items-center justify-center px-4 sm:px-6">
            <CardText />
          </div>
        </div>

        {/* Back face */}
        <div
          className="absolute w-full h-full rounded-2xl bg-white bg-opacity-90 text-black shadow-2xl flex flex-col justify-center items-center px-4 sm:px-8"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <CardBack />
        </div>
      </motion.div>
    </div>
  </div>
);
}

export default RotatingItem;
