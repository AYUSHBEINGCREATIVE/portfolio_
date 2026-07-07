import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Star, GitFork, Terminal } from "lucide-react";
import Reveal from "./Reveal";

const GITHUB_USERNAME = "AYUSHBEINGCREATIVE";
const FEATURE_TOPIC = "portfolio";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
          {
            headers: {
              Accept: "application/vnd.github.mercy-preview+json",
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch repositories");

        const data = await res.json();

        const featured = data.filter(
          (repo) => !repo.fork && repo.topics?.includes(FEATURE_TOPIC)
        );

        setRepos(featured);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-32 bg-[#04040a] scroll-mt-20 overflow-hidden"
    >
      {/* Background */}
      <img
        src="/icons-hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-screen pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-cyan-400 text-xs tracking-[4px] uppercase mb-4 text-center flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Featured Work
          </h2>

          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            A selection of projects at the intersection of bioinformatics,
            data science, and real-world impact.
          </p>
        </Reveal>

        {loading && (
          <p className="text-center text-gray-500">Loading projects...</p>
        )}

        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="text-center text-gray-500">
            No featured repos found. Add the <b>portfolio</b> topic to a GitHub
            repository.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <Reveal key={repo.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative rounded-2xl border border-white/10 bg-[#050a14]/60 backdrop-blur-sm p-6 h-full flex flex-col hover:border-cyan-400/40 transition-colors overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl border border-cyan-400/30 bg-cyan-400/5 flex items-center justify-center">
                    <Terminal size={18} className="text-cyan-400" />
                  </div>

                  {repo.language && (
                    <span className="text-[10px] uppercase tracking-wider text-cyan-400 border border-cyan-400/30 rounded-full px-3 py-1">
                      {repo.language}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">
                  {repo.name.replace(/-/g, " ")}
                </h3>

                <div className="w-8 h-px bg-cyan-400 mb-4"></div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5 text-gray-500 text-xs">
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </span>

                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks_count}
                  </span>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Code2 size={14} />
                    Code
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}