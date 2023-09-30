"use client";
import Image from "next/image";
import React from "react";
import logo from "./logo.jpg";
import Button from "../Button/Button";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={36} />
          <h2>Landmark Constructions</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="navItems">
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
        <ul className="navItems">
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul className="navItems">
          <li>
            <a href="#">Our Value</a>
          </li>
        </ul>
        <ul className="navItems">
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className="headerContainer">
        <div className="textContainer">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quam, debitis nobis nostrum doloremque quos perferendis. Ipsam
            tenetur quis voluptates molestiae voluptatibus voluptas!
          </p>
          <div className="buttons">
            <Button>gug</Button>
            <Button>huhuh</Button>
          </div>
        </div>
        <div className="imageContent">
          <div className="image">
            <Image src={logo} width={600} height={600} alt="main" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }
  }
`;
