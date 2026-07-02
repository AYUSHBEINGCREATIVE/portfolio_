import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const timeline = [
  { year: "2023", title: "Started B.Tech Bioengineering", desc: "MIT ADT University, Pune — School of Bioengineering Sciences & Research." },
  { year: "2024", title: "Hackathon Era Begins", desc: "Smart India Hackathon, MEDHA (IIT Bombay) — designing real biomedical devices under pressure." },
  { year: "2024–25", title: "NPTEL IIT Madras — Bioinformatics", desc: "Certified. Started the shift from wet-lab to computational biology." },
  { year: "2025–26", title: "Python + Bioinformatics Sprint", desc: "Built NCBI gene pipelines, Rosalind solutions, and live data dashboards." },
  { year: "2026", title: "ICRTB Expo Winner", desc: "Bamboo–Plastic Composite Road Panels — first place for NER flood-resilient infrastructure." },
  { year: "2027", title: "Target: AI Drug Repurposing Pipeline", desc: "Gene retrieval → PDB fetch → AutoDock Vina docking → MongoDB → publication-grade results." },
];

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="relative py-32 bg-[#050816] scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeading tag="About" title="Engineering" accent="Intelligence" />

        <Reveal className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-gray-300 leading-relaxed">
            I'm a final-year Bioengineering student bridging computation and biology — hands-on with
            Python pipelines, machine learning, molecular docking, and biomedical device design.
            Currently building toward an AI-driven drug repurposing pipeline targeting neglected
            tropical diseases. Active GitHub contributor, NPTEL IIT Madras Bioinformatics certified,
            and experienced across both wet-lab and computational research.
          </p>
        </Reveal>

        <div ref={containerRef} className="relative pl-8">
          {/* faint static track */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
          {/* glowing progress line that draws in as you scroll */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-cyan-400 via-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-14 last:mb-0"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 + 0.15, ease: "backOut" }}
                className="absolute -left-[37px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]"
              />
              <p className="text-cyan-400 text-xs tracking-[3px] mb-1">{item.year}</p>
              <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm max-w-xl">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}