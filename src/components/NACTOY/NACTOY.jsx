import React from "react";
import "./NACTOY.css";

const NACTOY = () => {

  const handleLink = () => {
    const url = "https://northamericancaroftheyear.org/nactoy-reveals-winners-of-the-2021-north-american-car-truck-and-utility-vehicle-of-the-year/";
    window.open(url)
  }

  return (
    <div className="NACTOY_container">
      <div className="NACTOY_content">
        <div className="NACTOY_image" onClick={handleLink}>
        </div>
        <div className="NACTOY_text">
          <h1>
            Hyundai Elantra, recognized as the 2021 North American Car of the
            Year
          </h1>
          <p>
            ELANTRA takes top honors for its forward-thinking design and
            next-level technology. "Looking boss and loaded with features like
            big, bold digital displays and wireless everything, it’s easy to see
            why ELANTRA is a 100% winner".
          </p>
        </div>
      </div>
    </div>
  );
};

export default NACTOY;
