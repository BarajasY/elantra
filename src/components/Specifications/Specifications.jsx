import React from "react";
import "./Specifications.css";
import { Version } from './data.js';

const Versions = () => {
  return (
    <div className="Specifications_container">
      <div className="Specifications_content">
        <div className="Specifications_text">
          <h1>Multiple versions for multiple people</h1>
        </div>
        <div className="Specifications">
          {Version.map((record, index) => (
            <div className="Specifications_info">
              <h1 className="Specifications_name">{record.name}</h1>
              <p>{record.phrase}</p>
              <h1>${record.MSRP}</h1>
              <p>Key Specifications</p>
              <div className="Specifications_section">
                {record.specifications.map((data, key) => (
                  <>
                    <li>{data.one}</li>
                    <li>{data.two}</li>
                    <li>{data.three}</li>
                    <li>{data.four}</li>
                    <li>{data.five}</li>
                    <li>{data.six}</li>
                  </>
                )
                )}
                <div className="buttons">
                  <a href={record.url} target="_blank" rel="noreferrer"><button className="individual_button">Learn More</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Versions;
