import React from "react";
import "./Service.css";
import s1 from "../image/s1.png";
import s2 from "../image/s2.png";
import s3 from "../image/s3.png";
import Image from "next/image";
const Service = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <p className="section-subtitle">Our Services</p>

        <h2  className="h2 section-title">Our Main Focus</h2>

        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <Image src={s1} alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Buy a home</a>
              </h3>

              <p className="card-text">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>

              <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Image src={s2} alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Rent a home</a>
              </h3>

              <p className="card-text">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>

              <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Image src={s3} alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Sell a home</a>
              </h3>

              <p className="card-text">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>

              <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
