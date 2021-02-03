
import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
export default function () {
    const Marketing = useRef(null);
  
    useEffect(()=>{
        lottie.loadAnimation({
            container : Marketing.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('../contract.json')
          },
          )
         
    })
    return (
        <div className="image"  ref={Marketing}>
       
        </div>
    )
}
