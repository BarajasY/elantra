import React from "react";
import "./body.css";

const Body = () => {
  return (
    <div className="body_container">
      <div className="body_header">
        <a
          href="https://northamericancaroftheyear.org/nactoy-reveals-winners-of-the-2021-north-american-car-truck-and-utility-vehicle-of-the-year/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="img"></div>
        </a>
        <div className="body_content">
          <h1>
            Hyundai Elantra, recognized as the 2021 North American Car of the
            Year
          </h1>
          <p>
            ELANTRA takes top honors for its forward-thinking design and
            next-level technology. Looking boss and loaded with features like
            big, bold digital displays and wireless everything, it’s easy to see
            why ELANTRA is a 100% winner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
