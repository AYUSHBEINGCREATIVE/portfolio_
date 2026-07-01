import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      className="fixed inset-0 -z-20"
      options={{
        background: {
          color: "#050816",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#22d3ee",
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.4,
          },
          opacity: {
            value: 0.35,
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
      }}
    />
  );
}