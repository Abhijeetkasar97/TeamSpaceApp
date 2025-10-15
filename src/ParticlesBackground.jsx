import { useCallback } from "react";
import { loadFull } from "tsparticles"; // Import loadFull function
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000", // Black theme
        },
        particles: {
          color: { value: "#ff7f00" }, // Orange particles
          number: { value: 80, density: { enable: true, area: 800 } },
          links: {
            color: "#ff7f00",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
