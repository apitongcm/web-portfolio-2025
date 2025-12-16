import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch("https://api.github.com/users/apitongcm/repos?sort=updated");
      const data = await res.json();
      const filtered = data.filter((repo) => !repo.fork).slice(0, 6);
      const reposWithLangs = await Promise.all(
        filtered.map(async (repo) => {
          const langRes = await fetch(repo.languages_url);
          const langData = await langRes.json();
          const languages = Object.keys(langData);
          return { ...repo, languages };
        })
      );
      setRepos(reposWithLangs);
    };
    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0a0a0a] py-24 px-6 overflow-hidden"
    >
      {/* Faint Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#e11d48 1px, transparent 1px), linear-gradient(90deg, #e11d48 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
      >
        Projects & <span className="text-blue-600">Experiments</span>
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {repos.map((repo, i) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, borderColor: "#1d6fe1" }}
            transition={{ type: "spring", stiffness: 150, delay: i * 0.05 }}
            className="relative p-6 border border-gray-800 rounded-xl bg-gradient-to-b from-[#111] to-[#000]
                       shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(225,29,72,0.2)] 
                       transition-all duration-300 w-16 h-16"
          >
            <h3 className="text-xl font-semibold text-white mb-2 truncate">{repo.name}</h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
              {repo.description || "Technical exploration and code experiment."}
            </p>

            {/* Hardware-style Language Chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              {repo.languages.map((lang, i) => (
                <span
                  key={i}
                  className="text-[11px] tracking-wide uppercase border border-blue-600 text-cyan-400 px-2 py-[2px] rounded-sm bg-[#1a1a1a]"
                >
                  {lang}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-sm hover:text-blue-500 transition-colors"
              >
                View Repository →
              </a>
            </div>

            {/* Tiny hardware LED pulse */}
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(225,29,72,0.6)]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
