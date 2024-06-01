import React, { useEffect, useState } from "react";
// import Particles from "react-tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import imageOne from "../../Images/animals.jpg";
import imageTwo from "../../Images/gettyimages-1183414292-1-_slide-30784f99ac10f059c242d37e91d05ead475854f4.jpg";
import imageThree from "../../Images/pexels-wendywei-1190298.jpg";
import imageFour from "../../Images//weddign.jpg";

import "./gallery.css";

function Gallery() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <div className="hero-section">
        {init && (
          <Particles
            id="tsparticles"
            className="particles"
            particlesLoaded={particlesLoaded}
            options={{
              fullScreen: false,
              background: {
                color: {
                  value: "#0d47a1",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
        <div className="services-section">
          <div className="services-part">
            <div className="services-box-img">
              <img src={imageOne} alt="" />
            </div>

            <div className="services-box-img">
              <img src={imageTwo} alt="" />
            </div>

            <div className="services-box-img">
              <img src={imageThree} alt="" />
            </div>

            <div className="services-box-img">
              <img src={imageFour} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
