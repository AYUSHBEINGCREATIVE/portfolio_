import Navbar from "./Navbar";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#000000] overflow-hidden scroll-mt-20">
      <Navbar />

      <img
        src="/dna-hero.png"
        alt="DNA helix"
        className="absolute right-[-10%] top-0 h-full w-auto max-w-none object-cover z-0 opacity-90"
        style={{
          maskImage:
            "linear-gradient(115deg, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(115deg, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-8 pt-32 pb-20 min-h-screen">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}