"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const burgerMenu = () => {
    console.log("huhuuuh");
    let bar = document.getElementById("icon");
    let menu = document.getElementById("menu");
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      bar.className = "fa fa-bars";
      menu.style.right = "-1000px";
    } else {
      bar.className = "fa fa-times";
      menu.style.right = 0;
      menu.style.display = "block";
    }
  };
  return (
    <nav>
      <div className="barnd ">
        <h1 style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
          Landmark Construction
        </h1>
      </div>
      <div>
        <ul id="menu">
          <li>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/projects")}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#service">SERVICES</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
        </ul>
      </div>
      <i id="icon" className="fa fa-bars" onClick={burgerMenu}></i>
    </nav>
  );
};

export default Navbar;
