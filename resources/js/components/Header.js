import React,{useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import  ScrollAnimation from 'react-animate-on-scroll';
function Header() {
    return (
        <React.Fragment>
        
        <ScrollAnimation animateIn='flipInX' delay={1000}
        initiallyVisible={false}
        animateOnce={true}>
        <header id="header" className="d-flex align-items-center">
        <div className="container">
    
       
          <div className="logo d-block d-lg-none">
            <a href="/"><img src="assets/img/logo-black.png" alt="" class="img-fluid"/></a>
          </div>
       
          <nav className="nav-menu d-none d-lg-block">
            <ul className="nav-inner">
              <li className="active"><a href="index.html">Home</a></li>
              <li className="drop-down"><a href="#services">Services</a>
                <ul>
                  <li><a href="/technologies">Technologies</a></li>
                  <li><a href="/marketing">Marketing</a></li>
                  <li><a href="/production">Production</a></li>
                  
                </ul>
              </li>
             
    
              <li className="nav-logo"><a href="/"><img src="assets/img/logo-black.png" alt="" class="img-fluid"/></a></li>
    
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
    
            </ul>
          </nav>
    
        </div>
      </header>
     </ScrollAnimation>
    
        </React.Fragment>
    );
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
