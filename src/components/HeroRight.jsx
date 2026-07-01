import { motion } from "framer-motion";
import DNA3D from "./DNA3D";

function Tag({ title, items, className }) {
  return (
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-xl border border-cyan-400/15 bg-[#0a1530]/50 backdrop-blur-md px-4 py-3 ${className}`}
    >
      <p className="text-cyan-400 text-[11px] tracking-[3px] mb-2">{title}</p>
      {items?.map((it) => (
        <p key={it} className="text-gray-400 text-[11px]">{it}</p>
      ))}
    </motion.div>
  );
}

export default function HeroRight() {
  return (
    <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
      {/* soft radial glow, no hard edges */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-400/10 blur-[160px]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[140px] translate-x-20" />

      <div className="absolute inset-0">
        <DNA3D />
      </div>

      <Tag title="DNA ANALYSIS" items={["Sequence", "Genome", "Protein"]} className="top-6 right-2 w-36" />
      <Tag title="SEQUENCE" items={["ATCG—GCTA", "Mapping live"]} className="top-[42%] right-0 w-32" />
      <Tag title="STRUCTURE" items={["Protein fold", "3D model"]} className="bottom-10 left-0 w-32" />
    </div>
  );
}