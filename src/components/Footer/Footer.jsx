"use client";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <div className="card-content">
              <h2 className="h2 card-title">Looking for a dream home?</h2>

              <p className="card-text">
                We can help you realize your dream of a new home
              </p>
            </div>
            <button className="btn cta-btn">
              <span>Explore Properties</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo"> 
                {/* <Image
                  src="./assets/images/logo-light.png"
                  alt="Homeverse logo" width={20} height={20}
                /> */}
              </a> 

              <p className="section-text">
                Lorem Ipsum is simply dummy text of the and typesetting
                industry. Lorem Ipsum is dummy text of the printing.
              </p>

              <ul className="contact-list">
                <li>
                  <a href="#" className="contact-link">
                    <ion-icon name="location-outline"></ion-icon>

                    <address>Brooklyn, New York, United States</address>
                  </a> 
                </li>

                <li>
                  <a href="tel:+0123456789" className="contact-link">
                    <ion-icon name="call-outline"></ion-icon>
 
                    <span>+0123-456789</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:contact@homeverse.com"
                    className="contact-link"
                  >
                    <ion-icon name="mail-outline"></ion-icon>

                    <span>contact@homeverse.com</span>
                  </a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Company</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>


                <li>
                  <a href="#" className="footer-link">
                    All Products
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Services</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    My account
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Promotional Offers
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Customer Care</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2023 <a href="#">Muhammad Rafi</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
