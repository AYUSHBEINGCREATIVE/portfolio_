import Reveal from "./Reveal";

export default function SectionHeading({ tag, title, accent, sub }) {
  return (
    <Reveal className="mb-16 text-center">
      <p className="text-cyan-400 text-xs tracking-[4px] uppercase mb-4">{tag}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{accent}</span>
      </h2>
      {sub && <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{sub}</p>}
    </Reveal>
  );
}