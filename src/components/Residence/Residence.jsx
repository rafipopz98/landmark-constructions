"use client";
import React from "react";
import data from "./data.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residence.css";
import { sliderSettings } from "./SliderSettings";
import PropertyCard from "../Property/PropertyCard";
const Residencies = () => {
  return (
    <div className="App">
      <div id="residencies" className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="flexColStart r-head">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {/* slider */}
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <PropertyCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
