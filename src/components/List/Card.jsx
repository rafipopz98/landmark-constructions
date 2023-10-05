"use client";
import React from "react";
import "./Card.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Card = ({ item }) => {
  const router = useRouter();
  return (
    <div className="card">
      <div className="images_card">
        <img
          alt="image"
          src={item.images[0]}
          className="mainImage"
          width={280}
          height={400}
          onClick={()=>router.push(`/project/${item._id}`)}
        />

        {/* <Image src={item.img2} className="secondImage"  width={280} height={400}/>  */}
      </div>
      <h2 className="primaryText">{item.name}</h2>
      <div className="prices_cards">
        <p className="secondaryText">{item.desc}</p>
      </div>
    </div>
  );
};

export default Card;
