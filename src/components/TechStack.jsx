import { motion } from "framer-motion";

const stack = [
  { label: "Python", color: "#3572A5" },
  { label: "MongoDB", color: "#4DB33D" },
  { label: "R", color: "#276DC3" },
  { label: "PyMOL", color: "#22D3EE" },
  { label: "AutoDock", color: "#F97316" },
  { label: "Power BI", color: "#F2C811" },
];

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-10"
    >
      <p className="text-gray-500 text-xs tracking-[3px] uppercase mb-3">Tech Stack Highlights</p>
      <div className="flex flex-wrap gap-3">
        {stack.map((t) => (
          <span
            key={t.label}
            className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-gray-300"
            style={{ borderColor: `${t.color}40` }}
          >
            {t.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}