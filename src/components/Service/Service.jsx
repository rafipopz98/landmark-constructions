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

        <h2 className="h2 section-title">Our Main Focus</h2>

        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <Image src={s1} alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Planning As Per Vastu</a>
              </h3>

              <p className="card-text">
                Celebrate our Indian heritage by building in harmony with Vastu
                principles. Our homes are designed to channel positive vibes,
                attract prosperity, and nurture well-being. Your peace of mind
                is our guiding philosophy
              </p>

              <a href="#" className="card-link">
                <span>Building Constructions</span>

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
                <a href="#">Interior Designing</a>
              </h3>

              <p className="card-text">
                Interior design that breathes life into your spaces. Our
                meticulous craftsmanship and creativity transform your vision
                into stunning, functional interiors. Your dream home, our design
                expertise.
              </p>

              <a href="#" className="card-link">
                <span>Find A Design</span>

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
                <a href="#">Building Constructions</a>
              </h3>

              <p className="card-text">
                Elevate your dream structure with our meticulous construction
                services. Our expert builders and state-of-the-art technology
                ensure quality and precision in every brick. Your vision, our
                commitment.
              </p>

              <a href="#" className="card-link">
                <span>Explore More</span>

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
                <a href="#">Consultancy</a>
              </h3>

              <p className="card-text">
                Unlock your dream home&apos;s potential with expert guidance.
                Our seasoned consultants are your trusted partners in realizing
                a home that&apos;s uniquely yours, from blueprint to finishing
                touches.
              </p>

              <a href="#" className="card-link">
                <span>Contact Us</span>

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
                <a href="#">Building Permission</a>
              </h3>

              <p className="card-text">
              We handle the red tape so you can focus on your dream home. Our team liaises with local and taluq offices to secure the necessary building permissions hassle-free.
              </p>

              <a href="#" className="card-link">
                <span>Ping Us</span>

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
