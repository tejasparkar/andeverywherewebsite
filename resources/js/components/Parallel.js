import React,{useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import { Parallax, Background } from 'react-parallax';
function Parallel() {
    const image = "assets/img/bg.png";
    
    return(
        <React.Fragment>
        <Parallax
        bgImage={image}
        strength={400}
        renderLayer={percentage => (
            <div
                
            />
        )}
    >
        <p style={{ 'height':500 }}>
       </p>
    </Parallax>
            </React.Fragment>
    )
}

export default Parallel;

if (document.getElementById('Parallel')) {
    ReactDOM.render(<Parallel />, document.getElementById('Parallel'));
}
