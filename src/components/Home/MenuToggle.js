"use-client";
import React, { useEffect, useState } from "react";

const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let bar = document.getElementById("icon");
    let menu = document.getElementById("menu");

    const clickHandler = () => {
      if (menuOpen) {
        bar.className = "fa fa-bars";
        menu.style.right = "-1000px";
      } else {
        bar.className = "fa fa-times";
        menu.style.right = 0;
      }

      // Toggle the menu state
      setMenuOpen(!menuOpen);
    };

    bar.addEventListener("click", clickHandler);

    // Cleanup event listener when component unmounts
    return () => {
      bar.removeEventListener("click", clickHandler);
    };
  }, [menuOpen]);

  return null;
};

export default MenuToggle;


