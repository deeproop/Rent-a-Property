import React from 'react';
import './App.scss';

import { Navbar, Header, Filter, PropertyCard} from './components';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      
      <Filter />

      <PropertyCard />
      
      </div>
  );
}

export default App;
