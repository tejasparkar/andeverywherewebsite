import { gsap } from 'react-gsap';
const { useRef, useEffect } = React;

export const Ball = () => {
    useEffect(() => {      
      gsap.to('.ball', {x:250, duration: 5})
  }, []);
  return (
    <>
      <div className="ball"></div>
    </>
  );
}
