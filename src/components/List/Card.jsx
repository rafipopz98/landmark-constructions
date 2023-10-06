"use client";
import React from "react";
import "./Card.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { truncate } from "lodash";
const Card = ({ item }) => {
  const router = useRouter();
  return (
    <div className="card">
      <div className="images_card">
        <img
         loading="lazy"
          alt="image"
          src={item.images[0]}
          className="mainImage"
          width={280}
          height={400}
          onClick={() => router.push(`/project/${item._id}`)}
        />

        {/* <Image src={item.img2} className="secondImage"  width={280} height={400}/>  */}
      </div>
      <h2 className="primaryText">{item.name}</h2>
      <div className="prices_cards">
        <p className="secondaryText">{truncate(item.desc, {length: 25})}</p>
      </div>
    </div>
  );
};

export default Card;
