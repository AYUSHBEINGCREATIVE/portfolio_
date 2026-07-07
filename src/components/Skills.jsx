import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  { title: "Programming", items: ["Python (Advanced)", "SQL", "R", "MongoDB (NoSQL)"] },
  { title: "ML / AI", items: ["Machine Learning", "Data Mining", "Bioinformatics Pipelines", "NCBI Entrez API"] },
  { title: "Domains", items: ["Computational Biology", "Drug Discovery", "Biomedical Device Design", "Molecular Docking", "Microfluidics"] },
  { title: "Instrumentation", items: ["HPLC", "TLC", "GC", "PCR / qPCR", "Electrophoresis", "Microscopy"] },
  { title: "Wet Lab", items: ["DNA/RNA Extraction", "Cell Culture", "Chromatography", "Enzyme Assays"] },
  { title: "Embedded", items: ["Arduino (C/C++)", "8051 / AVR", "Electronics Fundamentals"] },
  { title: "Tools & Infra", items: ["MongoDB", "PyMOL", "AutoDock Vina", "Power BI", "Cytoscape", "Ubuntu / Linux"] },
  { title: "Languages", items: ["English", "Hindi", "Marathi", "German (learning)", "Japanese (learning)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-[#04040a] scroll-mt-20 overflow-hidden">
      <img
        src="/skills-network.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.35] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <SectionHeading tag="Skills & Domains" title="Technical" accent="Arsenal" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#050a14]/70 backdrop-blur-sm p-6 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-colors duration-300">
                <h3 className="text-cyan-400 text-sm tracking-[2px] uppercase mb-4">{g.title}</h3>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-violet-400" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}