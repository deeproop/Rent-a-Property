import React from 'react'
import './filter.scss';

const filter = () => {
  return (
    <div className='container filter-box'>
      <div>
        <h5>Location</h5>
        New York,USA
      </div>
      <div>
        <h5>When</h5>
        Select Move-in Date
      </div>
      <div>
        <h5>Price</h5>
        $500-$2,500
      </div>
      <div>
        <h5>Property Type</h5>
        Houses
      </div>
      
      <button>Search</button>
    </div>
  )
}

export default filter;