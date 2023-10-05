import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = ({ item }) => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        {item.images.map((item, key) => (
          <div key={key} className="image">
            <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
