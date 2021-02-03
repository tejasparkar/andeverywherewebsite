import React,{useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';
import Sectionfour from './Sectionfour';
import Sectionone from './Sectionone';
import Sectionthree from './Sectionthree';
import Sectiontwo from './Sectiontwo';

function HeaderProd() {
    return (
        <React.Fragment>
        
        
        <header id="header" className="d-flex align-items-center">
        <div className="container">
    
       
          <div className="logo d-block d-lg-none">
            <a href="/"><img src="assets/img/logo-black.png" alt="" class="img-fluid"/></a>
          </div>
       
          <nav className="nav-menu d-none d-lg-block">
            <ul className="nav-inner">
              <li><a href="/">Home</a></li>
              <li className="active" className="drop-down"><a href="#services">Services</a>
                <ul>
                  <li><a href="/technologies">Technologies</a></li>
                  <li><a href="/marketing">Marketing</a></li>
                  <li className="active"><a href="/production">Production</a></li>
                  
                </ul>
              </li>
             
    
              <li className="nav-logo"><a href="index.html"><img src="assets/img/logo-black.png" alt="" class="img-fluid"/></a></li>
    
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
    
            </ul>
          </nav>
    
        </div>
      </header>
      <div>
        <Sectionone/>
        <Sectiontwo/>
        <Sectionthree/>
        <Sectionfour/>
        <Footer/>
      </div>
    
        </React.Fragment>
    );
}

export default HeaderProd;

if (document.getElementById('HeaderProd')) {
    ReactDOM.render(<HeaderProd />, document.getElementById('HeaderProd'));
}
