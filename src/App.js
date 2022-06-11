import React from 'react';
import { Navbar, Header, Specifications, Body, Versions, Family } from "./components/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar id="Navbar" />
      <Header />
      <Specifications />
      <Body />
      <Versions />
      <Family />
    </div>
  );
}

export default App;
