import React from "react";
import "./versions.css";

const Versions = () => {
  return (
    <div className="versions_container">
      <div className="versions_content">
        <div className="versions_text">
          <h1>Multiple versions for multiple people</h1>
        </div>
        <div className="versions">
          <div className="version_g">
            <h1 className="version_name">SE</h1>
            <p>The base trim with lots of great standard features.</p>
            <h1>MSRP</h1>
            <p>$20,200</p>
            <hr />
            <p>Key Specifications</p>
            <div className="details_section">
              <li>37 MPG Combined, 33 City/43 Hwy</li>
              <li>147-Hp 2.0L 4-cylinder engine</li>
              <li>Wireless Android Auto & Apple CarPlay</li>
              <li>Forward Collision-Avoidance ASsist with Pedestrian Detection (FCA-Ped)</li>
              <li>Blind-Spot Collision-Avoidance Assist</li>
              <li>8-inch color touchscreen display audio</li>
              <div className="buttons">
                <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra/se" target="_blank" rel="noreferrer"><button className="individual_button">Learn More</button></a>
              </div>
            </div>
          </div>
          <div className="version_g">
            <h1 className="version_name">SEL</h1>
            <p>The balanced trim with plenty must-have features.</p>
            <h1>MSRP</h1>
            <p>$21,450</p>
            <hr />
            <p>Key Specifications</p>
            <div className="details_section">
              <li>35 MPG Combined, 31 City/41 Hwy</li>
              <li>147-hp 2.0L 4-cylinder engine</li>
              <li>Hands-free smart trunk release</li>
              <li>Bluelink Connected Car System</li>
              <li>Proximity Key with push button start</li>
              <li>16-inch alloy wheels</li>
              <div className="buttons">
                <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra/sel" target="_blank" rel="noreferrer"><button className="individual_button">Learn More</button></a>
              </div>
            </div>
          </div>
          <div className="version_g">
            <h1 className="version_name">N Line</h1>
            <p>The sporty trim with race inspired style.</p>
            <h1>MSRP</h1>
            <p>$24,350</p>
            <hr />
            <p>Key Specifications</p>
            <div className="details_section">
              <li>28 MPG Combined, 25 City/34 Hwy</li>
              <li>201-hp 1.6L Turbo GDI 4-cylinder</li>
              <li>18-inch alloy wheels</li>
              <li>Multi-link independent rear suspension</li>
              <li>Hyundai digital key</li>
              <li>N Line sport seats</li>
              <div className="buttons">
                <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra/n-line" target="_blank" rel="noreferrer"><button className="individual_button">Learn More</button></a>
              </div>
            </div>
          </div>
          <div className="version_g">
            <h1 className="version_name">Limited</h1>
            <p>The premium trim with high end features.</p>
            <h1>MSRP</h1>
            <p>$25,950</p>
            <hr />
            <p>Key Specifications</p>
            <div className="details_section">
              <li>35 MPG Combined, 31 City/41 Hwy</li>
              <li>147-hp 2.0L 4-cylinder engine</li>
              <li>10.25-inch touchscreen navigation</li>
              <li>Dynamic Voice Recognition</li>
              <li>Parkin Collision-Avoidance Assist - Reverse</li>
              <li>Leather-trimmed seating</li>
              <div className="buttons">
                <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra/limited" target="_blank" rel="noreferrer"><button className="individual_button">Learn More</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Versions;
