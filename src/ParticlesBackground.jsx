import React from "react";
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
      color: "#00000000",
    },
    particles: {
      color: { value: "#ff7f00" },
      number: { value: 130, density: { enable: true, area: 800 } },
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

   
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
        },
        grab: {
          distance: 150,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 8,
          duration: 2,
          opacity: 1,
        },
      },
    },
  }}
/>
  )
};

export default ParticlesBackground;
