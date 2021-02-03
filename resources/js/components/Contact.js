import React,{useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import  ScrollAnimation from 'react-animate-on-scroll';
function Contact() {
    return (
        <React.Fragment>
        <section id="contact" className="contact section-bg">
        
        <div className="container">
  
         
  
          <div className="row">
          <ScrollAnimation className="section-title col-lg-12" animateIn='bounceInRight'
        animateOut='bounceOutLeft'>  
          
            <h2 style={{ 'color':'white' }}>We Love to Create Experiences!</h2>
            <p style={{ 'fontSize':'18px','fontWeight':'900','color':'white' }}>Let's Talk</p>
          
          </ScrollAnimation>
            <div className="col-lg-4">
              <div className="info d-flex flex-column justify-content-center" data-aos="fade-right">
                <div className="address">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>1006, GOLD CREST BUSINESS CENTER, L.T. ROAD OPP. MANUBHAI JEWELLERS, BORIVALI WEST, MUMBAI</p>
                </div>
  
                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>support@andeverywhere.in</p>
                </div>
  
                <div className="phone">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 98202 50364</p>
                </div>
  
              </div>
  
            </div>
  
            <div className="col-lg-8 mt-5 mt-lg-0">
  
              <form action="" method="post" role="form" className="php-email-form" data-aos="fade-left">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="tel" className="form-control" name="number" id="number" placeholder="Your Number" data-rule="minlen:10" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate"></div>
                </div>
                </div>
                
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
  
            </div>
  
          </div>
  
        </div>
      </section>
      <ScrollAnimation animateIn='bounceInRight'
      delay={0}  animateOut='bounceOutLeft'>  
      <footer id="footer">

    <div className="footer-top">

      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-6">
          <ScrollAnimation animateIn="flipInX" delay={1000} animateOut='fadeOut'>
            <a href="#header" className="scrollto footer-logo"><img src="assets/img/hero-logo.png" alt=""/></a>
            </ScrollAnimation>
            <h3 style={{ 'color':'white' }}>Andeverywhere</h3>
            <p >Group of like-minded millenniel's comming together to help you get <strong>The Recognition you Deserve</strong></p>
            
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
      <div className="credits">
        
        Designed and Developed with <i style={{'color':'red'}} className="icofont-ui-love" aria-hidden="true"></i> by Andeverywhere Technologies
      </div>
    </div>
  </footer>
  </ScrollAnimation>
        </React.Fragment>
    );
}

export default Contact;

if (document.getElementById('Contact')) {
    ReactDOM.render(<Contact />, document.getElementById('Contact'));
}
