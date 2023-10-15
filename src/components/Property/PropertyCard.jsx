import React from "react";
import "./PropertyCard.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as fbq from "../../../lib/fpixel";

const PropertyCard = ({ card }) => {
  const handleClick = () => {
    router.push("/projects");
    fbq.event("Projects page from popular project section", { currency: "USD", value: 10 });
  };

  const router = useRouter();
  return (
    <div onClick={handleClick} className="flexColStart r-card">
      <img src={card.image} alt="home icon" />
      {/* <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span> */}
      <span className="primaryText">{card.name}</span>
      <span className="secondaryText">{card.detail}</span>
    </div>
  );
};

export default PropertyCard;
