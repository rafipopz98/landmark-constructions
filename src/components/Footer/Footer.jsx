"use client";
import Image from "next/image";
import "./Footer.css";
import { useRouter } from "next/navigation";
import logo from "../../../public/logo.png";
const Footer = () => {
  const router = useRouter();
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
              <span onClick={() => router.push("/projects")}>
                Explore Properties
              </span>
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
                <Image src={logo} alt="Homeverse logo" width={60} height={60} />
              </a>

              <p className="section-text">
                Unlock the potential of your dream home with our expert 3D
                architectural exterior design. Transform concepts into reality
                with precision, creativity, and attention to detail that
                redefine living spaces.
              </p>

              <ul className="contact-list">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Landmark+construction/@12.7419933,75.4693818,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba4e9a761e83793:0x8198abfc6c572860!8m2!3d12.7419933!4d75.4693818!16s%2Fg%2F11v6_5cw4n?hl=en-IN&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <ion-icon name="location-outline"></ion-icon>

                    <address>Kadaba, Near Federal Bank, </address>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+919740237732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <ion-icon name="call-outline"></ion-icon>
                    <span>+91 9740237732</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918105703792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <ion-icon name="call-outline"></ion-icon>
                    <span>+91 8105703792</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:landmarkgroupco@yahoo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <ion-icon name="mail-outline"></ion-icon>

                    <span>landmarkgroupco@yahoo.com</span>
                  </a>
                </li>
              </ul>

              <ul className="social-list">
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
                  <a href="#about" className="footer-link">
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    onClick={() => router.push("/projects")}
                    className="footer-link"
                  >
                    All Projects
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
                  <a href="#about" className="footer-link">
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
              &copy; 2023 <a href="#">Mohan Thilak</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
