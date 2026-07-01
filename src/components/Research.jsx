import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const research = [
  {
    title: "Non-Invasive Blood Group Detection Device",
    tag: "SIH Ideathon 2024 · Optical Biosensing",
    desc: "A wearable optical sensor tuned to the spectral fingerprints of A, B, and H surface antigens on red blood cells — classifying blood group in real time without needles or reagents.",
  },
  {
    title: "Temperature-Controlled Bone Drilling System",
    tag: "MEDHA · IIT Bombay · Orthopaedic Device",
    desc: "Active-cooling drill using a co-axial TiO₂ nanofluid channel to keep bone temperature below the 47°C thermal-necrosis threshold, with closed-loop real-time monitoring.",
  },
  {
    title: "Bamboo–Plastic Composite Road Panels",
    tag: "SIH 2025 · Winner, ICRTB Expo 2026",
    desc: "Modular, flood-resilient road panels for North-East India combining bamboo's tensile strength with plastic's water resistance — single-panel field repair, no heavy machinery needed.",
    badge: "Winner",
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-32 bg-[#050816] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeading
          tag="Research"
          title="Biomedical"
          accent="Engineering"
          sub="Where biology meets hardware — devices and materials designed to solve real clinical and infrastructure problems."
        />

        <div className="space-y-6">
          {research.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-violet-400/40 transition-colors duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-white text-xl font-semibold">{r.title}</h3>
                  {r.badge && (
                    <span className="text-[10px] tracking-wider text-black bg-cyan-400 rounded-full px-2 py-1 font-semibold">
                      {r.badge}
                    </span>
                  )}
                </div>
                <p className="text-violet-300 text-xs tracking-wider mb-3">{r.tag}</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}