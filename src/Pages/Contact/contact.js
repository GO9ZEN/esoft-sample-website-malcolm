import React, { useEffect, useRef, useState } from "react";
// import Particles from "react-tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./contact.css";

function Contact() {
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

  /////////////////////////////
  const notify = () =>
    toast.success("Message sent successfully", {
      className: "toast-message",
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
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
        <div className="contact-section">
          <div className="contact-part">
            <div className="contact-header">
              <div className="hr-part"></div>
              <span>Contact Me</span>
              <div className="hr-part"></div>
            </div>

            <div className="contact-details">
              <div className="contact-email">
                <i class="fa-solid fa-envelope"></i>
                <span>malcolmli09@gmail.com</span>
              </div>

              <div className="contact-number">
                <i class="fa-solid fa-square-phone"></i>
                <span>+94767545321</span>
              </div>
            </div>

            <div className="contact-boxes">
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your E-mail"
                    required
                  />
                </div>

                <div className="message-box">
                  <textarea
                    name="Message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button className="contact-boxes-button" onClick={notify}>
                  Submit
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
