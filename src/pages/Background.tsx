import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

const Background = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (_?: Container) => {
      return new Promise<void>(() => {})
  };

  if (init) {
    return <Particles id="tsparticles" url="/Background.json" particlesLoaded={particlesLoaded} className="-z-10" />;
  }

  return <></>;
};


export default Background;
