import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
const navbar = () => {
  return (
    <header>
      
        <FontAwesomeIcon icon={faHouse} color="#7065ee"/> Estatery
      <nav>
        <ul className="nav__links">
        <li><a href="#">Rent</a></li>
        <li><a href="#">Buy</a></li>
        <li><a href="#">Sell</a></li>
        <li><a href="#">Manage Property</a></li>
        <li><a href="#">Resources</a></li>
        </ul>
      </nav>
      <a className="cta" href="#"><button>Login</button></a>
      <a className="cta" href="#"><button>Signup</button></a>
    </header>
  );
};

export default navbar;
