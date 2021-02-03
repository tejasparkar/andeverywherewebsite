import React, { Component } from 'react'

import Seolottie from '../Seolottie';
import Techlottie from '../Techlottie';
import svg from '../svgs/eating.svg'
import Codinglottie from '../lotties/Codinglottie';
export class Sectiontwo extends Component {
    render() {
        return (
            <section>
            
           <div className="container">
            <div className="section-title">
            <h1 >Andeverywhere Technologies</h1>
            </div>
          <div  className="row">
          
          
          
          <div className="col-lg-6 order-2 order-lg-1">
          <div className="card" style={{ "width": "100%" }}>
          <Seolottie/>
          <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
          
          </div>
          <div className="col-lg-6 order-2 order-lg-1">
          <div className="card" style={{ "width": "100%" }}>
          <Techlottie/>
          <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
          
          </div>
          <div className="col-lg-6 order-2 order-lg-1">
          <div className="card" style={{ "width": "100%" }}>
          <Codinglottie/>
          <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
          
          </div>
          <div className="col-lg-6 order-2 order-lg-1">
          <div className="card" style={{ "width": "100%" }}>
          <Codinglottie/>
          <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
          
          </div>
           </div>
          
          
           </div>
           </section>
        )
    }
}

export default Sectiontwo;


