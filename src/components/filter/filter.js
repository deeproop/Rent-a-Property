import React from 'react'
import './filter.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const filter = () => {
  return (
    <div className='container filter-box'>
      <div className="dropdown">
        <h5>Location</h5>
        <span className="dropbtn">New York,USA <FontAwesomeIcon icon={faCaretDown} /></span>
        <div className="dropdown-content">
              <a href="#">Uttrakhand,India</a>
        </div>
      </div>
      <div className="dropdown">
        <h5>When</h5>
        <span className="dropbtn">Select Move-in Date<FontAwesomeIcon icon={faCaretDown} /></span>
        <div className="dropdown-content">
              <a href="#">5-Aug-2022</a>
        </div>
      </div>
      <div className="dropdown">
        <h5>Price</h5>
        <span className="dropbtn">$500-$2,500 <FontAwesomeIcon icon={faCaretDown} /></span>
        <div className="dropdown-content">
              <a href="#">$100-$500</a>
        </div>
      </div>
      <div className="dropdown">
        <h5>Property Type</h5>
        <span className="dropbtn">Houses <FontAwesomeIcon icon={faCaretDown} /></span>
        <div className="dropdown-content">
              <a href="#">Apartments</a>
        </div>
      </div>
      
      <button>Search</button>
    </div>
  )
}

export default filter;