import { motion } from "framer-motion";

export default function FloatingCard({ title, items, className }) {
  return (
    <motion.div
      animate={{
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
                      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-3xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-2xl p-6 shadow-[0_0_35px_rgba(34,211,238,0.15)] ${className}`}
    >
      <h3 className="text-cyan-400 tracking-[0.25em] text-sm mb-4">
        {title}
      </h3>

      {items.map((item, i) => (
        <p key={i} className="text-gray-300 mb-2">
          {item}
        </p>
      ))}
    </motion.div>
  );
}