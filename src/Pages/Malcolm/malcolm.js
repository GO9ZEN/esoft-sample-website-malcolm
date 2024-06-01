import React, { useEffect, useState } from "react";
// import Particles from "react-tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";
import porfilepic from "../../Images/profilePicture.jpg";
import { loadSlim } from "@tsparticles/slim";
import Typical from "react-typical";
import { Link } from "react-router-dom";

import "./malcolm.css";

function Malcolm() {
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
        <div className="my-data">
          <div className="profile-picture">
            <img src={porfilepic} alt="" />
          </div>

          <div className="data-header">
            <span>Hi, I'm </span>
            <span className="data-header-name">
              <Typical
                className="data-header-writer"
                steps={["Malcolm", 2000, "Malcolm Lismore", 4000]}
                loop={Infinity}
                wrapper="b"
              />
            </span>
          </div>

          <div className="data-carrier">
            <span>PHOTOGRAPHER</span>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-square-youtube"></i>
            </a>
          </div>

          {/* <a href={PDF} target="_blank" rel="noopener noreferrer"> */}
          <Link to="/contact">
            <button className="download-cv">Contact Me</button>
          </Link>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default Malcolm;
