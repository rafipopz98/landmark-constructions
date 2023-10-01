'use client'
import React, { useEffect } from "react";

const MenuToggle = () => {
  useEffect(() => {
    let bar = document.getElementById("icon");
    let menu = document.getElementById("menu");

    const clickHandler = () => {
      if (bar.className === "fa fa-bars") {
        bar.className = "fa fa-times";
        menu.style.right = 0;
      } else {
        bar.className = "fa fa-bars";
        menu.style.right = "-1000px";
      }
    };

    bar.addEventListener("click", clickHandler);

    // Cleanup event listener when component unmounts
    return () => {
      bar.removeEventListener("click", clickHandler);
    };
  }, []);

  return null;
};

export default MenuToggle;
