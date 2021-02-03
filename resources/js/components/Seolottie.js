import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
export default function () {
    const Seolottie = useRef(null);
    
    useEffect(()=>{
        lottie.loadAnimation({
            container : Seolottie.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('./Seo.json')
          },
          )
         
    })
    return (
        <div className="image" ref={Seolottie}>
            
        </div>
    )
}
