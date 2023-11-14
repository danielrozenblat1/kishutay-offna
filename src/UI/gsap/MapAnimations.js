import { useEffect } from "react"
import carIcon from "../../images/carFinal.png"
import "./MapAnimations.css"
import { gsap } from "gsap"
import locationImg from '../../images/locationFinal.png'
import footPrintsImage from '../../images/stepsFinal.png'
const FloatingDirections=()=>{
    useEffect(() => {
        const viewportWidth = window.innerWidth;

        const center = viewportWidth / 2.5;
        gsap.from(".directionImage", { duration: 2, scale: 0.5, ease: "back" });
        gsap.to(".directionImage", { duration: 2, x: `${center}px` }); 
        gsap.from(".car", { scale: 0.5 }); 
        gsap.from(".footPrints", { duration: 2, x: `${center}px`, y: "-40vw", scale: 0.3 }); 
        gsap.to(".footPrints", { duration: 2, x: `${center}px`, y: "-10vw", scale: 0.6 }); 
        gsap.to(".car", { duration: 3, scrollTrigger: ".car", x: "70vw", scale: 0.5 }); 
      }, []);

return <>
<div className="container">
<img className="directionImage" src={locationImg}/>
<img className="footPrints" src={footPrintsImage}/>
<img className="car" src={carIcon} />
</div>
</>
}
export default FloatingDirections
{/* <a className="middle" target="_blank" href="https://www.google.com/maps/place/31%C2%B057'44.4%22N+34%C2%B048'03.1%22E/@31.9623299,34.8030501,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.9623299!4d34.8008614?hl=he&entry=ttu"> */}