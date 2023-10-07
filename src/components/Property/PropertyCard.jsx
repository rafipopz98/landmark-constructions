import React from "react";
import "./PropertyCard.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PropertyCard = ({ card }) => {
  const router=useRouter()
  return (
    <div onClick={()=>router.push('/projects')} className="flexColStart r-card">
      <img src={card.image} alt="home icon" />
      {/* <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span> */}
      <span className="primaryText">
        {card.name}
      </span>
      <span className="secondaryText">
        {card.detail}
      </span>
    </div>
  );
};

export default PropertyCard;
