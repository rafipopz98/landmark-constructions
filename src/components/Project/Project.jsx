"use client";
import React from "react";
import "./Project.css";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import ImageSlider from "../ImageSlider/ImageSlider";
import image from "../image/back.jpg";
const data = {
  name: "Citralan Puri Serang",
  price: "35,853",
  detail:
    "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
  image: "./r3.png",
};
const slides = [
  {
    title: "Aliva Priva Jardin",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/bf32ea180512873.650bf78c9237c.jpg",
  },
  {
    title: "Aliva Priva Jardin",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/76cfa3178256009.64e4e8b5f27c9.jpg",
  },
  {
    title: "Aliva Priva Jardin",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/bf32ea180512873.650bf78c9237c.jpg",
  },
  {
    title: "Aliva Priva Jardin",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/76cfa3178256009.64e4e8b5f27c9.jpg",
  },
];
console.log(data.name);
const containerStyles = {
  width: "840px",
  height: "380px",
  margin: "6rem auto",
};
// console.log(data)
const Project = () => {
  return (
    <div className="deta-wrapper">
      {/* image */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div className="downDetails">
        <h1 className="primaryText">{data.name}</h1>
        <div className="flexStart facilities">
          {/* bathrooms */}
          <div className="flexStart facility">
            <FaShower size={20} color="#1F3E72" />
            {/* <span>{data?.facilities?.bathrooms} Bathrooms</span> */}
            <span>2 Bathrooms</span>
          </div>
          {/* parkings */}
          <div className="flexStart facility">
            <AiTwotoneCar size={20} color="#1F3E72" />
            {/* <span>{data?.facilities.parkings} Parking</span> */}
            <span> Parking</span>
          </div>

          {/* rooms */}
          <div className="flexStart facility">
            <MdMeetingRoom size={20} color="#1F3E72" />
            <span>3 Room/s</span>
          </div>
        </div>

        <div className="secondaryText" style={{ textAlign: "justify" }}>
          {data.detail}
        </div>
        <button className="button">Book your visit</button>
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
