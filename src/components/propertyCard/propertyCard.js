import React from 'react'
import {BiBath, BiBed } from "react-icons/bi";      
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSink,
  faVectorSquare
} from "@fortawesome/free-solid-svg-icons";

import './propertyCard.scss';
const propertyCard = (props) => {
  return (
    <div class="containerr">
    <div class="cards">
      <section class="card">
      <figure>
          <div class="img-overlay hot-home">
            <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg" alt="Trulli" />
            <div class="overlay"><a href="#">view property</a></div>
            <div class="cont">
              
            </div>
          </div>
          <div className="price">
            <h3>{props.price} </h3> /month
          </div>
          <figcaption>{props.name}</figcaption>
        </figure>

        <div class="card-content">
          <p>{props.address}</p>

          <section class="icons-home">
            <div class="name-icon">
              <div class="icon">
              <BiBed />
                <span>{props.bedroom}</span>
              </div>
            </div>
            <div class="name-icon">
              <div class="icon">
              <BiBath />
                <span>2 Bathrooms</span>
              </div>
            </div>
            <div class="name-icon">
              <div class="icon">
                <FontAwesomeIcon icon={faVectorSquare} />
                <span>5x7 m<sup>2</sup></span>
              </div>
            </div>
          </section>
          
        </div>
      </section>
    </div>
</div>
  )
}

export default propertyCard;


