"use client";
import React from "react";
import "./Project.css";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import ImageSlider from "../ImageSlider/ImageSlider";
import Navbar from "../Navbar/Navbar";
import Slider from "../SLide/Slider";
import { FaBed } from "react-icons/fa";

const containerStyles = {
  width: "840px",
  height: "480px",
  margin: "2rem auto",
};

const slicer = containerStyles.width.split("p")[0];
console.log(slicer, "help me borooooooooooooooooooooooooooooooooooooo");
// console.log(data)
const Project = ({ item }) => {
  const slides = item.images;
  console.log("nja ude ulle aca", item);
  return (
    <div className="deta-wrapper">
      <div className="conn">
        <Navbar slides={slides} />
      </div>
      {/* image */}
      {/* <div style={containerStyles} > */}
      {/* <ImageSlider slides={slides} parentWidth={slicer} /> */}
      {/* </div> */}
      <div style={{ padding: "2rem" }}>
        <Slider item={item} />
      </div>
      <div className="downDetails">
        <h1
          style={{ textAlign: "center", fontSize: "2rem" }}
          className="primaryText"
        >
          {item.name}
        </h1>
        <div style={{ display: "flex" }} className="flexStart facilities">
          {/* bathrooms */}

          {/* parkings */}
          <div className="flexStart facility">
            <FaBed size={20} color="#1F3E72" />
            &nbsp; &nbsp;
            <span>{item?.bed} Bedrooms</span>
            {/* <span> Parking</span> */}
          </div>

          {/* rooms */}
          <div className="flexStart facility">
            <MdMeetingRoom size={20} color="#1F3E72" />
            &nbsp; &nbsp;
            <span>{item?.room} </span>
          </div>
        </div>

        <div
          className="secondaryText"
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          {item.desc}
        </div>
        <a href="tel:+919740237732">
          <button
            style={{ padding: "1rem", background: "orange", color: "white" }}
            className="button"
          >
            Call Us and Build your Dream House
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;

// <div className="flexCenter property-details">
// {/* left */}
// <div className="flexColStart left">
//   {/* head */}
//   <div className="flexStart head">
//     <span className="primaryText">{data.name}</span>
//     {/* <span className="orangeText" style={{ fontSize: "1.5rem" }}>
//     $ {data?.price}
//   </span> */}
//   </div>

//   {/* facilities */}
//   <div className="flexStart facilities">
//     {/* bathrooms */}
//     <div className="flexStart facility">
//       <FaShower size={20} color="#1F3E72" />
//       {/* <span>{data?.facilities?.bathrooms} Bathrooms</span> */}
//       <span>2 Bathrooms</span>
//     </div>
//     {/* parkings */}
//     <div className="flexStart facility">
//       <AiTwotoneCar size={20} color="#1F3E72" />
//       {/* <span>{data?.facilities.parkings} Parking</span> */}
//       <span> Parking</span>
//     </div>

//     {/* rooms */}
//     <div className="flexStart facility">
//       <MdMeetingRoom size={20} color="#1F3E72" />
//       <span>3 Room/s</span>
//     </div>
//   </div>

//   {/* description */}

//   <span className="secondaryText" style={{ textAlign: "justify" }}>
//     {data.detail}
//   </span>

//   {/* address */}

//   {/* booking button */}

//   <button className="button">Book your visit</button>
// </div>
// </div>
