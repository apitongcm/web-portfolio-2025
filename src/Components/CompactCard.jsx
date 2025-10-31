import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/profile.png";
import CardText from "./CardText";
import CardBack from "./CardBack";

export default function CompactCard() {
  return (
    <section
      className="block lg:hidden min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-[#0a0f1c] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] bg-repeat"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-2xl max-[641px]:max-w-md w-full  bg-gradient-to-br from-blue-900/30 via-slate-800/20 to-transparent backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 shadow-[0_0_40px_-10px_rgba(0,255,255,0.3)]"
      >
        {/* Neon edge glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10 pointer-events-none"></div>

        {/* Top circuit detail line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent rounded-t-3xl"></div>

        <motion.img
          src={Profile}
          alt="Profile"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-52 h-52 mx-auto rounded-full object-cover border-4 border-cyan-400/40 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
        />


        <p className="mt-2 text-cyan-100 text-center text-sm leading-relaxed opacity-90">
          <CardText />
          <CardBack/>
        </p>

        {/* Divider line like a PCB trace */}
        <div className="w-20 mx-auto my-6 border-t-2 border-cyan-400/40 rounded-full"></div>

        {/* Call-to-action */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,255,255,0.5)" }}
          onClick={() => {
                const aboutSection = document.getElementById("contact");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Connect with Me
        </motion.button>

        {/* Decorative circuit nodes */}
        <div className="absolute -top-3 left-6 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.6)]"></div>
        <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(0,0,255,0.5)]"></div>
      </motion.div>
    </section>
  );
}
