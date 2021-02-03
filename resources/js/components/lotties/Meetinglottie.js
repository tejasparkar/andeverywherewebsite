import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
export default function () {
    const Technology = useRef(null);
    
    useEffect(()=>{
        lottie.loadAnimation({
            container : Technology.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('./Meeting.json')
          },
          )
         
    })
    return (
        <div className="image" ref={Technology}>
            
        </div>
    )
}
