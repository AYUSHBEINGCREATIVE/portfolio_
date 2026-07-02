import { Code2, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "NCBI Gene Data Pipeline",
    desc: "Automated pipeline fetching Alzheimer's-related gene records via Biopython's Entrez API. Parses XML/GenBank data into analysis-ready CSV as the first stage of a drug-repurposing pipeline.",
    tech: ["Python", "Biopython", "NCBI Entrez API", "MongoDB"],
    link: "https://github.com/AYUSHBEINGCREATIVE/ncbi-gene-pipeline",
  },
  {
    title: "Rosalind Bioinformatics Problem Set",
    desc: "Collection of Rosalind bioinformatics solutions including DNA string operations, GC content, Hamming distance, RNA transcription, and complementary strands.",
    tech: ["Python", "Algorithms", "Sequence Analysis"],
    link: "https://github.com/AYUSHBEINGCREATIVE/rosalind-solutions",
    status: "ACTIVE",
  },
  {
    title: "Real-Time Data Dashboard",
    desc: "Live pipeline connecting MongoDB with Plotly Dash and Power BI featuring KPI cards, interactive charts, and filterable tables.",
    tech: ["Python", "MongoDB", "Plotly Dash", "Power BI"],
  },
  {
    title: "Medicine Supply Chain Optimization",
    desc: "Smart healthcare logistics platform for counterfeit detection, inventory prediction, and cold-chain monitoring.",
    tech: ["Healthcare", "Software", "Supply Chain"],
    status: "SIH 2024",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[#050816] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeading
          tag="Projects"
          title="Built &"
          accent="Shipped"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>

                  {project.status && (
                    <span className="text-[10px] tracking-wider text-cyan-400 border border-cyan-400/30 rounded-full px-2 py-1">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-violet-500/10 text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <Code2 size={16} />
                    <span>View on GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                )}

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}