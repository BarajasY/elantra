import React from 'react';
import { Navbar, Carousel, Details, NACTOY,  Versions2 } from "./components/index";
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Details />
      <NACTOY />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,106.7C672,75,768,53,864,48C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <Versions2 />
    </div>
  );
}

export default App;
