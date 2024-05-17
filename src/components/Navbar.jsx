import React from "react";
import "../navBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={` bg-green-700 flex text-l text-white justify-between h-20 ${
        showLinks ? "showNav" : "hideNav"
      }`}
    >
      <span className="text-3xl px-5 my-auto">CheminVert</span>
      <ul
        className="bg-green-700 navBarLinks flex px-5 my-auto"
        onClick={handleShowLinks}
      >
        <li className="navBarItem slideInDown-1">
          <Link className="navBarLink" to="/">
            Accueil
          </Link>
        </li>
        <li className="navBarItem slideInDown-2">
          <Link className="navBarLink" to="/About">
            À propos
          </Link>
        </li>
        <li className="navBarItem slideInDown-3">
          <Link className="navBarLink" to="/Activities">
            Activités
          </Link>
        </li>
      </ul>
      <button className="navBarBurger my-auto" onClick={handleShowLinks}>
        <span className="burgerBar"></span>
      </button>
    </nav>
  );
}
