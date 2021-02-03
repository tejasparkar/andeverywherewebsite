import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
export default function () {
    const Productionlottie = useRef(null);
    
    useEffect(()=>{
        lottie.loadAnimation({
            container : Productionlottie.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('./Production.json')
          },
          )
         
    })
    return (
        <div className="image" ref={Productionlottie}>
            
        </div>
    )
}
