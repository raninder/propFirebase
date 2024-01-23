
import {useState} from 'react'
import {imagesProp1} from './Data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../styles/carousel.css'

const CarouselComp = () => {
const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  const renderSlides = imagesProp1.map((image,index) => (
    <div key={index}>
      <img src={image} alt={"property"} />
    </div>
  ));
  return (
    <div className="carousel-container">
     
      <Carousel
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
        selectedItem={imagesProp1[currentIndex]}
        onChange={handleChange}
        className="carousel"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}

export default CarouselComp
