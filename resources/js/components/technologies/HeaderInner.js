import React,{useEffect, useRef, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import Sectionfour from './Sectionfour';
import { Sectionone } from "./Sectionone";
import Sectionthree from './Sectionthree';
import { Sectiontwo } from "./Sectiontwo";
import  Footer  from "../Footer";
function HeaderInner() {
    return (
        <React.Fragment>
        
       
      <div>
      <header style={{ 'position':'fixed','width':'100%' }} id="header" className="d-flex align-items-center">
      <div className="container white">
      
     
        <div className="logo d-block d-lg-none">
          <a href="/"><img src="assets/img/logo-black.png" alt="" class="img-fluid"/></a>
        </div>
     
        <nav className="nav-menu wrapper d-none d-lg-block white">
          <ul className="nav-inner white ">
            <li><a href="/">Home</a></li>
            <li className="drop-down"><a href="#services">Services</a>
              <ul>
                <li className="active"><a href="/technologies">Technologies</a></li>
                <li><a href="/marketing">Marketing</a></li>
                <li><a href="/production">Production</a></li>
                
              </ul>
            </li>
           
  
            <li className="nav-logo"><a href="/"><img src="assets/img/logo-black.png" alt="" class="img-fluid"/></a></li>
  
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li></li>
          </ul>
        </nav>
        
      </div>
     
    </header>
    
      <React.Fragment>
      <Sectionone/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour/>
      <Footer/>
     </React.Fragment>
     
      </div>
    
        </React.Fragment>
    );
}

export default HeaderInner;

if (document.getElementById('headerinner')) {
    ReactDOM.render(<HeaderInner />, document.getElementById('headerinner'));
}
