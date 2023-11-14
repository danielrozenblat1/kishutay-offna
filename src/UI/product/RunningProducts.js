import styles from "./RunningProducts.module.css"

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const RunningProducts=(props)=>{
    const images=props.images

    return (
       <div className={styles.width}> <Carousel
          showArrows={true} // Show arrows for navigation
          infiniteLoop={true} // Allow infinite loop of slides
          autoPlay={true} // Enable auto-play
          interval={3000} // Set the time interval between slides (in milliseconds)
          showThumbs={true} // Hide thumbnail navigation
          showStatus={true} // Hide status indicator (e.g., "1 of 3")
          
        >
         {images.map((image, index) => (
            <div key={index} >
              <img className={styles.image} src={`http://localhost:8000/images/${image}`} alt={`Img ${index + 1}`} />
            </div>
          ))}
        </Carousel></div>
      );
    
  };
export default RunningProducts