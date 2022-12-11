import React from "react";
import "./Details.css";

const Details = () => {

  return (
    <div className="Details_container">
      <div className="Details_header">
        <div className="Details_section">
          <p>Starting MSRP</p>
          <p>$20,200</p>
        </div>
        <div className="Details_section">
          <p>Fuel Economy</p>
          <p>37 MPG Combined</p>
        </div>
        <div className="Details_section">
          <p>Wheels available</p>
          <p>18 Inch Wheels</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
