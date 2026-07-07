import { motion } from "framer-motion";
import { ArrowRight, Download, User } from "lucide-react";
import TechStack from "./TechStack";

export default function HeroLeft() {
  return (
    <div className="relative z-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-white leading-tight"
      >
        Ayush Dhote
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
      >
        Bioinformatics & AI Engineer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 text-gray-400 text-sm mt-6 flex-wrap"
      >
        <User size={16} className="text-cyan-400" />
        <span>Bioengineering Student</span>
        <span className="text-gray-600">|</span>
        <span>Problem Solver</span>
        <span className="text-gray-600">|</span>
        <span>Researcher</span>
        <span className="text-gray-600">|</span>
        <span>Developer</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 text-base leading-relaxed mt-6 max-w-lg"
      >
        I build intelligent solutions at the intersection of biology and
        technology. My work spans bioinformatics, machine learning, and software
        engineering to solve real-world challenges in healthcare, genomics, and
        biomedical research.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-black tracking-wide shadow-[0_0_25px_rgba(34,211,238,.5)] hover:scale-105 transition-transform"
        >
          EXPLORE MY WORK
          <ArrowRight size={16} />
        </a>

        <a
          href="/Ayush_Dhote_CV.pdf"
          download
          className="flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition-colors"
        >
          DOWNLOAD CV
          <Download size={16} />
        </a>
      </motion.div>

      <TechStack />
    </div>
  );
}