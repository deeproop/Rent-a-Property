import React from "react";
import { FaSink } from "react-icons/fa";
import { BiBed, BiArea } from "react-icons/bi";
import "./Card.scss";
import Details from "./property";

function propertyCard() {
  return <div className="wrapper">{Details.map(Card)}</div>;
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.image} className="card__image img" />
        <div className="card_content">
          <h2 className="card__price">{props.price}/month</h2>
          <h2 className="card__title">{props.name}</h2>
          <p className="card__description">{props.address}</p>
        </div>
      </div>
      <div className="icons-home">
        <div className="name-icon">
          <div className="icon">
            <BiBed />
            <span>{props.beds} bedrooms</span>
          </div>
        </div>
        <div className="name-icon">
          <div className="icon">
            <FaSink />
            <span>{props.bathroom} bathrooms </span>
          </div>
        </div>
        <div className="name-icon">
          <div className="icon">
            <BiArea />
            <span>{props.area} m<sup>2</sup></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default propertyCard;
