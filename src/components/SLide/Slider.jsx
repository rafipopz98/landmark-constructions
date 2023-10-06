import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = ({ item }) => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        {item.images.map((item, key) => (
          <div key={key} className="image">
            <img style={{objectFit:"cover"}} src={item} alt="" effect="blur" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
