import React,{useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import lottie from 'lottie-web';
import ScrollAnimation from 'react-animate-on-scroll';
import Components from './Component';
import Tilt from 'react-tilt'


function Secone() {
    const container = useRef(null);
   
    useEffect(()=>{
        lottie.loadAnimation({
            container : container.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('../contactus.json')
          },
          
          )
          
    })
    return (
        <React.Fragment>
       
        <ScrollAnimation animatePreScroll="false" animateIn='zoomIn'
        animateOut='zoomOut' >
        <section id="about" className="about">
        <div className="container">
  
          <div className="section-title" >
            <h2 >WHO WE ARE</h2>
            <p>GROUP OF LIKE-MINDED MILLENNIEL'S COMMING TOGETHER TO HELP YOU GET THE RECOGNITION YOU DESERVE</p>
          </div>
         
          <div className="row">
          
            <div className="col-lg-6" >
            <Tilt >
            <ScrollAnimation animatePreScroll="false" animateIn='flipInX'
            animateOut='fadeOut'>
            <div className="image" ref={container}>
                
            </div>
            </ScrollAnimation>
            </Tilt>
            </div>
           
            <div className="col-lg-6" >
              <div className="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
                <h3>Voluptatem dignissimos provident quasi corporis</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            
          </div>
         
  
        </div>
        <section id="clients" className="clients">
        <div className="container">
    
          <div className="row">
    
            <div className="col-lg-2 col-md-4 col-6" data-aos="zoom-in">
              <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/>
            </div>
    
            <div className="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="100">
              <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/>
            </div>
    
            <div className="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
            </div>
    
            <div className="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="300">
              <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
            </div>
    
            <div className="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="400">
              <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
            </div>
    
            <div className="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="500">
              <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
            </div>
    
          </div>
    
        </div>
      </section>
      </section>
     
        
        </ScrollAnimation>
        <ScrollAnimation animatePreScroll="false" animateIn='bounceInRight'
        animateOut='bounceOutLeft'>  
       <div className="section-title">
            <h2>Services</h2>
            <p>With the help of Neuromarketing & Behavioral Science, we fill in the gaps left by traditional marketing & design methods.</p>
            </div>
            </ScrollAnimation>
           
            <Components/>
        </React.Fragment>
    );
}

export default Secone;

if (document.getElementById('Secone')) {
    ReactDOM.render(<Secone />, document.getElementById('Secone'));
}
