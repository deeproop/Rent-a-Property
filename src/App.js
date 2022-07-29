import React from 'react';
import './App.scss';

import { Navbar, Header, Filter, Property } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      
      <Filter />

      <Property />

    </div>
  );
}

export default App;
