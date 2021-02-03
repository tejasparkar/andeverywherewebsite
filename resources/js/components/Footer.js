import React from 'react'
import  ScrollAnimation from 'react-animate-on-scroll';
export default function Footer() {
    return (
        
        <React.Fragment>
        
      <ScrollAnimation animateIn='bounceInRight'
      delay={0}  animateOut='bounceOutLeft'>  
      <footer id="footer-dark">

    <div className="footer-top">

      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-6">
          <ScrollAnimation animateIn="flipInX" delay={1000} animateOut='fadeOut'>
            <a href="#header" className="scrollto footer-logo"><img src="assets/img/logo-black.png" alt=""/></a>
            </ScrollAnimation>
            <h3 style={{ 'color':'black' }}>Andeverywhere</h3>
            <p style={{ 'color':'black' }} >Group of like-minded millenniel's comming together to help you get <strong>The Recognition you Deserve</strong></p>
            
            </div>
        </div>

        <div className="row footer-newsletter justify-content-center">
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" placeholder="Enter your Email"/><input className="suscribebtn" type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>

        <div class="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>

      </div>
    </div>

    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright <strong><span>Andeverywhere</span></strong>. All Rights Reserved
      </div>
      <div style={{ 'color':'black' }} className="credits">
        
        Designed and Developed with <i style={{'color':'red'}} className="icofont-ui-love" aria-hidden="true"></i> by Andeverywhere Technologies
      </div>
    </div>
  </footer>
  </ScrollAnimation>
        </React.Fragment>
       
    )
}
