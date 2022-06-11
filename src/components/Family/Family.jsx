import React from 'react';
import './family.css';
import elantra_2 from '../../assets/elantra_2.jpg'

const Family = () => {
  return (
    <div className="family_container">
        <div className="family_text">
            <h1>The Elantra family</h1>
        </div>
        <div className="types_container">
            <div className="type">
                <h1>Elantra</h1>
                <p>Gas, performance and efficiency.</p>
            </div>
            <div className="type">
                <h1>Elantra Hybrid</h1>
                <p>Hybrid. To go the distance.</p>
            </div>
            <div className="type">
                <h1>Elantra N Line</h1>
                <p>N Line. Sport performance and design.</p>
            </div>
        </div>
    </div>
  )
}

export default Family