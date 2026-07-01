import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "AI Engineer", 1800,
        "Bioinformatics Researcher", 1800,
        "Computer Vision Developer", 1800,
        "Building AI for Healthcare", 2200,
      ]}
      speed={50}
      repeat={Infinity}
      className="text-4xl font-bold text-cyan-400"
    />
  );
}