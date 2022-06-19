import React from 'react';
import './Versions.css';

const Versions = () => {
    return (
        <div className="Versions_container">
            <div className="Versions_text">
                <h1>The Elantra family</h1>
            </div>
            <div className="types_container">
                <div className="type">
                    <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra" target="_blank" rel="noreferrer" className="image_link">
                        <h1>Elantra</h1>
                        <p>Gas, performance and efficiency.</p>
                    </a>
                </div>
                <div className="type">
                    <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra-hybrid" target="_blank" rel="noreferrer" className="image_link">
                        <h1>Elantra Hybrid</h1>
                        <p>Hybrid. To go the distance.</p>
                    </a>
                </div>
                <div className="type">
                    <a href="https://www.hyundaiusa.com/us/en/vehicles/elantra-n" target="_blank" rel="noreferrer" className="image_link">
                        <h1>Elantra N Line</h1>
                        <p>N Line. Sport performance and design.</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Versions