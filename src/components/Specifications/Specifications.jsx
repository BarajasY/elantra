import React from "react";
import "./specifications.css";

const Specifications = () => {
  return (
    <div className="specifications_container">
      <div className="specifications_header">
        <div className="specifications_section">
          <p className="title">Starting MSRP</p>
          <p>$20,200</p>
        </div>
        <hr />
        <div className="specifications_section">
          <p className="title">Fuel Economy</p>
          <p>37 MPG Combined</p>
        </div>
        <hr />
        <div className="specifications_section">
          <p className="title">Wheels available</p>
          <p>18 Inch Wheels</p>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
