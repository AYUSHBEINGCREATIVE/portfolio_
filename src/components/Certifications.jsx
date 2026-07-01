import { Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const certs = [
  "NPTEL IIT Madras — Bioinformatics (Certified)",
  "Smart India Hackathon — 2024, 2025",
  "MEDHA Medical Device Hackathon — IIT Bombay",
  "ICRTB Workshops — 2024, 2025, 2026",
  "Winner — ICRTB Expo 2026",
  "First Runner-Up (Group) — Persona Showstopper 2026",
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 bg-[#050816] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-8">
        <SectionHeading tag="Certifications" title="Recognized" accent="Work" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <Reveal key={c} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 hover:border-cyan-400/40 transition-colors">
                <Award className="text-cyan-400 shrink-0" size={20} />
                <p className="text-gray-300 text-sm">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}