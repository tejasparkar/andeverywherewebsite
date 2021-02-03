import React,{useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import  ScrollAnimation from 'react-animate-on-scroll';
import  Productionlottie from './Productionlottie'
import Tilt from 'react-tilt'
import Techlottie from './Techlottie';
import Seolottie from './Seolottie';
import Marketing from './Marketing';

function Cons() {

  
    return (
        <React.Fragment>
        <section id="featured" className="featured" >
        <div className="container">
        <ScrollAnimation animateIn='bounceInRight'
        animateOut='bounceOutLeft'>  
        <div className="section-title">
            <h2 style={{ 'color':'white' }}>BENIFITS</h2>
            <p style={{ 'color':'white' }}>It Must be Hard without Us?</p>
        </div>
        </ScrollAnimation>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <figure>
                  <Tilt>
                
                    <Techlottie />
               
                </Tilt>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-2">
                  <figure>
                  <Tilt>
                  
                      <Seolottie />
                 
                  </Tilt>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-3">
                  <figure>
                  <Tilt>
               
                    <Marketing/>
              
                </Tilt>
                  </figure>
                </div>
                <div className="tab-pane" id="tab-4">
                  <figure>
                  <Tilt>
                 
                      <Productionlottie />
                  
                  </Tilt>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0" >
              <ul className="nav nav-tabs flex-column">
              
                <li className="nav-item">
                  <a className="nav-link active show" data-toggle="tab" href="#tab-1">
                    <h4>Technologies</h4>
                    <p>Solve your Problems and business solutions with ease.</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" data-toggle="tab" href="#tab-2">
                    <h4>Designing</h4>
                    <p>We are the artist to create the ArtWork you need.</p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" data-toggle="tab" href="#tab-3">
                    <h4>Search Engine Otimization </h4>
                    <p><ul><li>Getting leads and ranking is our responsibility.</li>
                    
                    <li>Digital Presence will make your business boom with leads</li></ul></p>
                  </a>
                </li>
                <li className="nav-item mt-2">
                  <a className="nav-link" data-toggle="tab" href="#tab-4">
                    <h4>Production</h4>
                    <p>Get the best video and images produced for the corporate level poc done with ease</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
        </div>
      </section>
        </React.Fragment>
    );
}

export default Cons;

if (document.getElementById('Cons')) {
    ReactDOM.render(<Cons />, document.getElementById('Cons'));
}
