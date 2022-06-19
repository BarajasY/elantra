import React from 'react';
import { Navbar, Carousel, Details, NACTOY, Specifications, Versions } from "./components/index";
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Details />
      <NACTOY />
      <Specifications />
      <Versions />
    </div>
  );
}

export default App;
