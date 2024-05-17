import { useState } from "react";
import "../navBar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logoNav.png"; 
import logomilieu from "../assets/logoNavmilieu.png";
import logoprincipal from "../assets/logoprincipal.png";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={`flex text-l text-black justify-between h-20 border border-green-700 ml-4 mr-4 mt-4 bg-gradient-to-br ${
        showLinks ? "showNav" : "hideNav"
      }`}
    >
      <img src={logo} alt="Logo CheminVert" className="h-full px-5 my-auto md:w-32 lg:w-40 w-28 hidden md:block lg:block" style={{ height: '3rem' }} />
      <img src={logoprincipal} alt="Logoprincipal" className="h-full px-5 my-auto md:w-32 lg:w-40 w-28 md:hidden lg:hidden" style={{ height: '3rem' }} />
      <img src={logomilieu} alt="Logomilieu" className="h-full px-5 my-auto ml-20 md:w-32 lg:w-48 w-28 md:h-12 lg:h-12 hidden md:block lg:block" />

      <ul className="text-black navBarLinks flex px-8 my-auto gap-3" onClick={handleShowLinks}>
        <li className="navBarItem slideInDown-1 md:border md:border-green-700 md:rounded">
          <Link className="navBarLink" to="/">
            Accueil
          </Link>
        </li>
        <li className="navBarItem slideInDown-2 md:border md:border-green-700 md:rounded">
          <Link className="navBarLink" to="/About">
            À propos
          </Link>
        </li>
        <li className="navBarItem slideInDown-3 md:border md:border-green-700 md:rounded">
          <Link className="navBarLink" to="/Activities">
            Activités
          </Link>
        </li>
        <li className="navBarItem slideInDown-4 md:border md:border-green-700 md:rounded">
          <Link className="navBarLink" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
      <button className="navBarBurger mt-4 mr-1" onClick={handleShowLinks}>
        <span className="burgerBar"></span>
      </button>
    </nav>
  );
}

