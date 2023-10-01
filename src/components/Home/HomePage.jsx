"use client";
import React from "react";
import MenuToggle from "./MenuToggle";
const HomePage = () => {
  return (
    <header id="home">
      <div className="container_content">
        <div className="container">
          <div className="icon flex1">
            <div className="box">
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="http://instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a href="http://x.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="box">
              <i className="fa fa-envelope"></i>
              <label>landmarkgroupco@yahoo.com</label>
              <i className=" fa fa-phone"></i>
              <label>+91 9740237732</label>
              <label>+91 8105703792</label>
            </div>
          </div>
          <hr />
          <nav>
            <div className="barnd">
              <h1>Landmark Construction</h1>
            </div>

            <ul id="menu">
              <li>
                <a href="#HOME">HOME</a>
              </li>
              <li>
                <a href="#ABOUT">ABOUT</a>
              </li>
              <li>
                <a href="#Testimonials">TESTIMONIALS</a>
              </li>
              <li>
                <a href="#BLOG">BLOG</a>
              </li>
              <li>
                <a href="#PHOTO">PHOTO</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
            <i id="icon" className="fa fa-bars"></i>
            <MenuToggle />
          </nav>

          <div className="home">
            <h3>EXTERIOR DESIGN COMPANY</h3>
            <h1>
              Experience Exterior <br /> Design
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
