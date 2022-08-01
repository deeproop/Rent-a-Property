import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
<script src="https:kit.fontawesome.com/a076d05399.js"></script>;
const navbar = () => {
  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faHouse} color="#7065ee" />
        <strong> Estatery</strong>
      </div>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#">Rent</a>
          </li>
          <li>
            <a href="#">Buy</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
          <li className="dropdown">
            <span className="dropbtn">Manage Property <FontAwesomeIcon icon={faCaretDown} /></span>
            <div className="dropdown-content">
              <a href="#">xyz</a>
              <a href="#">abc</a>
            </div>
          </li>
          <li className="dropdown">
            <span className="dropbtn">Resources <FontAwesomeIcon icon={faCaretDown} /></span>
            <div className="dropdown-content">
              <a href="#">xyz</a>
              <a href="#">abc</a>
            </div>
          </li>
        </ul>
      </nav>

      <div className="buttons">
        <a className="cta" href="#">
          <button className="login">Login</button>
        </a>
        <a className="cta" href="#">
          <button>Signup</button>
        </a>
      </div>
    </header>
  );
};

export default navbar;

<label for="" className="button">
  Manage Property
</label>;
