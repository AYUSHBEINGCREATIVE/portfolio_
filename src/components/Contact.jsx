import { Mail, Phone, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#050816] scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto px-8 text-center">
        <SectionHeading
          tag="Contact"
          title="Let's"
          accent="Talk"
        />

        <Reveal>
          <p className="text-gray-400 mb-12">
            Open to internships, research collaborations, and anything at the
            intersection of AI and Biology.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="mailto:ayush.dhote.mitbio@gmail.com"
              className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-4 text-cyan-300 hover:bg-cyan-400/20 transition-colors"
            >
              <Mail size={18} />
              ayush.dhote.mitbio@gmail.com
            </a>

            <a
              href="tel:+919890381693"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-gray-300 hover:border-white/40 transition-colors"
            >
              <Phone size={18} />
              +91 9890381693
            </a>

            <a
              href="https://github.com/AYUSHBEINGCREATIVE"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-gray-300 hover:border-white/40 transition-colors"
            >
              <Code2 size={18} />
              AYUSHBEINGCREATIVE
            </a>

          </div>
        </Reveal>
      </div>
    </section>
  );
}