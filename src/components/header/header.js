import React from 'react';
import './header.scss';

const header = () => {
  return (
    <div className='container'><h1>Search properties to rent</h1>
    <input className='search-box' placeholder='Search with Search Bar'></input></div>
  )
}

export default header;