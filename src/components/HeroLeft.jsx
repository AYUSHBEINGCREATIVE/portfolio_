import { motion } from "framer-motion";
import { ArrowRight, Download, Mouse } from "lucide-react";

export default function HeroLeft() {
  const tags = ["AI ENGINEER", "BIOINFORMATICS", "MACHINE LEARNING", "COMPUTER VISION"];

  return (
    <div className="relative z-20 flex gap-6">
      <div className="hidden md:flex flex-col items-center pt-4">
        <span className="text-cyan-400 text-xs font-mono">01</span>
        <div className="w-px flex-1 bg-gradient-to-b from-cyan-400/60 to-transparent mt-3" />
      </div>

      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] text-cyan-400 text-xs font-medium mb-6"
        >
          Engineering Intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-6xl md:text-7xl font-bold text-white leading-[0.95]"
        >
          FOR
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold leading-[0.95] bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent"
        >
          BIOLOGY.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-1 text-gray-400 text-sm tracking-wider"
        >
          {tags.map((t) => <p key={t}>{t}</p>)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-black tracking-wide shadow-[0_0_25px_rgba(34,211,238,.5)] hover:scale-105 transition-transform">
            EXPLORE RESEARCH <ArrowRight size={16} />
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition-colors">
            DOWNLOAD CV <Download size={16} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center gap-2 text-gray-500 text-xs tracking-wider"
        >
          <Mouse size={16} className="text-cyan-400" />
          SCROLL DOWN
        </motion.div>
      </div>
    </div>
  );
}