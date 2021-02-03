import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from "react-tsparticles";
export default function Secone() {
    return (
        <React.Fragment>
            
        <ScrollAnimation animateIn="zoomIn">
        <section id="hero-mark" >
     
        <Particles
        id="tsparticles"
        options={{
          
          fpsLimit: 60,
          particles: {
            number: {
              value: window.innerWidth/25,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: "#ff0000",
              animation: {
                enable: true,
                speed: 20,
                sync: true
              }
            },
            
            stroke: {
              width: 0
            },
            opacity: {
              value: 0.5,
              random: false,
              animation: {
                enable: false,
                speed: 2,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: false,
                speed: 10,
                minimumValue: 0.1,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
              },
              repulse: {
                distance: 200
              },
              push: {
                quantity: 4
              },
              remove: {
                quantity: 2
              }
            }
          },
          detectRetina: true,
         
        }}
      />
      
       
        </section>
      
           </ScrollAnimation>
        </React.Fragment>
    )
}
