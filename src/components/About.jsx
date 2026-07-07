import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { GraduationCap, Pill, BarChart3, Dna, Trophy, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import StatsCounter from "./StatsCounter";

const timeline = [
  { icon: GraduationCap, year: "2023 – 2027", title: "B.Tech Bio Engineering", subtitle: "MIT ADT University, Pune", desc: "Focused on Bioinformatics, Computational Biology, and Biomedical Signal Processing.", color: "#22d3ee" },
  { icon: Pill, year: "2024", tag: "PROJECT", title: "Medicine Supply Chain Optimization", subtitle: "Smart India Hackathon 2024", desc: "Platform optimizing pharmaceutical logistics, reducing wastage and improving distribution efficiency.", color: "#f472b6" },
  { icon: BarChart3, year: "2024", tag: "PROJECT", title: "Real-Time Data Dashboard", subtitle: "MongoDB · Plotly Dash · Power BI", desc: "Multi-source real-time data visualization pipeline with interactive dashboards and analytics.", color: "#a78bfa" },
  { icon: Dna, year: "2023 – Ongoing", tag: "PROJECT", title: "Rosalind Bioinformatics Problem Set", subtitle: "Python · Algorithms · Bioinformatics", desc: "Active pursuit of algorithmic bioinformatics challenges — DNA/RNA manipulation, sequence alignment.", color: "#f59e0b" },
  { icon: Trophy, year: "2026", tag: "WINNER", title: "ICRTB Expo — Road Panels", subtitle: "Bamboo–Plastic Composite", desc: "Award-winning flood-resilient road panel design for North-East India infrastructure.", color: "#facc15" },
  { icon: Rocket, year: "2027", tag: "GOAL", title: "AI Drug Repurposing Pipeline", subtitle: "Target project", desc: "Gene retrieval → PDB fetch → AutoDock Vina docking → MongoDB → publication-grade results.", color: "#34d399" },
];

export default function About() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section id="about" className="relative py-32 bg-[#04040a] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div>
          <Reveal>
            <p className="text-cyan-400 text-xs tracking-[4px] uppercase mb-4">● About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Engineering Intelligence <br />
              for <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Healthcare.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I'm a bioengineering student passionate about leveraging Artificial Intelligence,
              Bioinformatics, and Computational Biology to develop scalable tools for genomics,
              biomedical imaging, drug discovery, and healthcare automation.
            </p>
          </Reveal>

          <div className="mt-12">
            <StatsCounter />
          </div>

         <Reveal delay={0.15}>
            <img
              src="/icons-hero.png"
              alt="Bioinformatics research network"
              className="w-full max-w-lg mx-auto mt-12 mix-blend-screen"
              style={{
                maskImage:
                  "radial-gradient(ellipse 65% 65% at center, black 50%, transparent 90%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 65% 65% at center, black 50%, transparent 90%)",
              }}
            />
          </Reveal>
        </div>

        <div>
          <p className="text-violet-400 text-xs tracking-[4px] uppercase mb-8">● Education & Projects</p>
          <div className="relative pl-14" ref={timelineRef}>
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10" />
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent shadow-[0_0_8px_rgba(34,211,238,.6)]"
            />

            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="relative mb-10 last:mb-0">
                <div
                  className="absolute -left-14 top-0 w-10 h-10 rounded-xl border flex items-center justify-center"
                  style={{ borderColor: `${item.color}50`, background: `${item.color}15` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>

                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="text-gray-500 text-xs">{item.year}</span>
                  {item.tag && (
                    <span
                      className="text-[10px] tracking-wider rounded-full px-2 py-0.5 font-semibold"
                      style={{ background: `${item.color}20`, color: item.color }}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-1">{item.subtitle}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}