import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Star, GitFork } from "lucide-react";
import Reveal from "./Reveal";

const GITHUB_USERNAME = "AYUSHBEINGCREATIVE";
const FEATURE_TOPIC = "portfolio";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        if (!res.ok) throw new Error("Failed to fetch repos");

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
      className="relative py-32 bg-[#04040a] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-cyan-400 text-xs tracking-[4px] uppercase mb-4 text-center">
            ● Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured Work
          </h2>
        </Reveal>

        {loading && (
          <p className="text-gray-500 text-center">Loading projects...</p>
        )}

        {error && (
          <p className="text-red-400 text-center">
            Couldn't load projects: {error}
          </p>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="text-gray-500 text-center">
            No featured repos yet — tag a GitHub repo with the
            <span className="text-cyan-400"> "portfolio" </span>
            topic to show it here.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <Reveal key={repo.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 h-full flex flex-col hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <Code2 className="text-cyan-400" size={20} />

                  {repo.language && (
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 border border-white/10 rounded-full px-2 py-0.5">
                      {repo.language}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">
                  {repo.name.replace(/-/g, " ")}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex items-center gap-4 mt-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </span>

                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks_count}
                  </span>
                </div>

                <div className="flex gap-3 mt-5">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Code2 size={14} />
                    Code
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-300 hover:text-cyan-400 transition-colors"
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