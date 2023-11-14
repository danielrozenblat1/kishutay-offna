import styles from "./RunningImages.module.css"
import { Carousel } from 'react-responsive-carousel';
import ImageMagnify from 'react-image-magnify';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const CustomThumbnail = ({ src, onClick }) => (
  <div onClick={onClick}>
    <img className={styles.thumbnail} src={src} alt="Thumbnail" />
  </div>
);

const RunningImages=(props)=>{
    const images=props.images

    return (
       <div className={styles.width}> <Carousel
          showArrows={true} // Show arrows for navigation
          infiniteLoop={true} // Allow infinite loop of slides
          autoPlay={true} // Enable auto-play
          interval={3000} // Set the time interval between slides (in milliseconds)
          showThumbs={true} // Hide thumbnail navigation
          showStatus={true} // Hide status indicator (e.g., "1 of 3")
          renderThumbs={() =>
            images.map((image, index) => (
              <CustomThumbnail
                key={index}
                src={`http://localhost:8000/images/${image}`}
              />
            ))}
        >
         {images.map((image, index) => (
 <div key={index}>
 <ImageMagnify
 hoverDelayInMs={1000}

   enlargedImagePosition="over"
   {...{
     smallImage: {
       alt: 'Zoom Image',
       isFluidWidth: true,
       src: `http://localhost:8000/images/${image}`,
     },
     largeImage: {
       src: `http://localhost:8000/images/${image}`,
       width: 1000,
       height: 800,
     },
   }}
 />
</div>
))}

        </Carousel></div>
      );
    
  };
export default RunningImages
//<img className={styles.image} src={`http://localhost:8000/images/${image}`} alt={`Img ${index + 1}`} />