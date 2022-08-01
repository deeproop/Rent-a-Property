import React from 'react';
import propertyDetails from './components/propertyCard/PropertyDetails';
import './App.scss';

import { Navbar, Header, Filter, PropertyCard } from './components';

function createCard(info) {
  return (
    <PropertyCard
      key={info.id}
      name={info.name}
      image={info.image}
      address={info.address}
      bedroom={info.beds}
      bathroom={info.bathroom}  
      area={info.area}
    />
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      
      <Filter />

      <div className='property-card'>
      {propertyDetails.map(PropertyCard)}
      
      </div>
    </div>
  );
}

export default App;
