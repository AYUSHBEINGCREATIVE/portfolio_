import { Mail, Code2, MapPin } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#04040a] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            LET&apos;S BUILD SOMETHING
          </h2>
          <p className="text-gray-400 mb-16 max-w-xl mx-auto">
            Open to research collaborations, AI/biotech opportunities, and
            interesting projects.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Reveal delay={0.05}>
            <a
              href="mailto:ayush.dhote.mitbio@gmail.com"
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-cyan-400/40 transition-colors h-full"
            >
              <div className="w-11 h-11 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <Mail className="text-cyan-400" size={20} />
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Email
              </p>
              <p className="text-white text-sm break-all">
                ayush.dhote.mitbio@gmail.com
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="https://github.com/AYUSHBEINGCREATIVE"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-cyan-400/40 transition-colors h-full"
            >
              <div className="w-11 h-11 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <Code2 className="text-cyan-400" size={20} />
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                GitHub
              </p>
              <p className="text-white text-sm">
                github.com/AYUSHBEINGCREATIVE
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-8 h-full">
              <div className="w-11 h-11 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <MapPin className="text-cyan-400" size={20} />
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Location
              </p>
              <p className="text-white text-sm">Pune, India</p>
            </div>
          </Reveal>
        </div>

        <p className="text-gray-600 text-xs mt-16">
          © 2026 Ayush Dhote · MIT ADT University · Built with precision.
        </p>
      </div>
    </section>
  );
}