import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Typed from 'react-typed';
const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
    color : white
  }
  
  .panel.blue {
    backgroundImage: "url(assets/img/clients/client-1.png)";
    background-color: #3883d8;
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
  .panel.green {
    background-color: #22d659;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }
`;

const SectionWipes2 = () => (
  <SectionWipes2Styled >
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section    className="panel blue">
          <Typed
          strings={['<span>Search Engine Optimization</span>']}
          typeSpeed={40}
          backSpeed={40}
          loop
      >
  
</Typed></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise">
            <Typed
                    strings={['<span>Social Media Marketing</span>']}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                >
            
          </Typed>
            </section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section   className="panel green">
            <Typed className="show-mobile-none"
            strings={['<span>Technologies</span>']}
            typeSpeed={40}
            backSpeed={40}
            loop
        >
    
  </Typed>
          </section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section   className="panel bordeaux">
            <Typed
                    strings={['<span id=`white` >Production</span>']}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                >
            
          </Typed></section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default SectionWipes2;



