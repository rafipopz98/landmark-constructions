"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import * as fbq from "../../../lib/fpixel";
const HomePage = () => {
  const handleClick = () => {
    fbq.event("contact u from mail", { currency: "USD", value: 10 });
  };
  const handleClick2 = () => {
    fbq.event("tried to call u from navbar (9740237732)", {
      currency: "USD",
      value: 10,
    });
  };
  const handleClick3 = () => {
    fbq.event("tried to call u from navbar (8105703792)", {
      currency: "USD",
      value: 10,
    });
  };
  return (
    <header id="home">
      <div className="container_content">
        <div className="container">
          <div
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            data-aos-offset="300"
            className="icon flex1"
          >
            <div className="box">
              <a
                href="https://alvo.chat/25Gv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-comments-o"></i>
              </a>
              <a
                href="https://www.instagram.com/landmarkconstructions_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.google.com/maps/place/Landmark+construction/@12.7419933,75.4693818,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba4e9a761e83793:0x8198abfc6c572860!8m2!3d12.7419933!4d75.4693818!16s%2Fg%2F11v6_5cw4n?hl=en-IN&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-map-marker"></i>
              </a>
            </div>
            <div className="box">
              <a href="mailto:landmarkgroupco@yahoo.com" onClick={handleClick}>
                <i className="fa fa-envelope"></i>
                <label style={{ cursor: "pointer" }}>
                  landmarkgroupco@yahoo.com
                </label>
              </a>
              <a href="tel:+919740237732" onClick={handleClick2}>
              <i className=" fa fa-phone"></i>
                <label style={{ cursor: "pointer" }}>+91 9740237732</label>
              </a>
              <a href="tel:+918105703792" onClick={handleClick3}>
                <label style={{ cursor: "pointer" }}>+91 8105703792</label>
              </a>
            </div>
          </div>
          <hr />

          <Navbar />

          <div className="home">
            <h3
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="linear"
              data-aos-delay="500"
            >
              EXTERIOR DESIGN COMPANY
            </h3>
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="700"
              data-aos-offset="300"
            >
              Experience Exterior <br /> Design
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
