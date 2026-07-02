import Navbar from "./Navbar";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
   <section id="home" className="relative min-h-screen bg-[#050816] overflow-hidden scroll-mt-20">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(139,92,246,.12),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-violet-600/20 via-cyan-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-8 pt-32 pb-10 min-h-screen">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}