import React,{useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import Parallel from './Parallel'
function Video() {
    return (
    <React.Fragment>
    <Parallel/>
    <section id="why-us" className="why-us">
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-stretch">

        <div className="content" data-aos="fade-up">
          <h3>Why Us?<strong>velit pariatur architecto aut nihil</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>

        <div className="accordion-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <a data-toggle="collapse" className="collapse" href="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-1" className="collapse show" data-parent=".accordion-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <a data-toggle="collapse" href="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-2" className="collapse" data-parent=".accordion-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <a data-toggle="collapse" href="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-3" className="collapse" data-parent=".accordion-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
      <div className="col-lg-5 order-1 order-lg-2 align-items-stretch video-box" style={{ 'background-image': 'url("assets/img/why-us.jpg")' }} data-aos="zoom-in">
      <a href="https://www.youtube.com/watch?v=LIqQNG_q2us" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
    </div>
        </div>

      </div>
    </section>
   
    <Parallel/>
    </React.Fragment>
    );
}

export default Video;

if (document.getElementById('Video')) {
    ReactDOM.render(<Video />, document.getElementById('Video'));
}
