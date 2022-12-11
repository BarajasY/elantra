import React from 'react';
import { useState } from 'react';
import './New_versions.css';
import gls_ivt from '../../assets/white_car.webp';
import premium_ivt from '../../assets/black_car.webp';
import limited_tech from '../../assets/blue_car.webp';
import elantra_n from '../../assets/n_car.webp';
import hybrid_elantra from '../../assets/hybrid_elantra.webp';

const New_versions = () => {
    const [Active, setActive] = useState(0)

    const activeHandler = (n) => {
        setActive(n);
    }

  return (
    <div className="versions_container">
        <div className="versions_content">
            <div className="brand_column">
                <h1>Elantra</h1>
            </div>
            <div className="versions_column">
                <div className={Active === 1 ? "version active" : "version"} onClick={( () => activeHandler(1))}>
                    <div className="header">
                        <h1>SE</h1>
                        <h1>$20,500</h1>
                    </div>
                    <div className="section1">
                        <img src={gls_ivt} alt="SE" />
                        <h1>37 MPG</h1>
                        <h1>147 HP</h1>
                    </div>
                </div>
                <div className={Active === 2 ? "version active" : "version"} onClick={( () => activeHandler(2))}>
                    <div className="header">
                        <h1>SEL</h1>
                        <h1>$21,750</h1>
                    </div>
                    <div className="section1">
                        <img src={premium_ivt} alt="SEL" />
                        <h1>34 MPG</h1>
                        <h1>147 HP</h1>
                    </div>
                </div>
                <div className={Active === 3 ? "version active" : "version"} onClick={( () => activeHandler(3))}>
                    <div className="header">
                        <h1>Limited</h1>
                        <h1>$26,350</h1>
                    </div>
                    <div className="section1">
                        <img src={limited_tech} alt="Limited" />
                        <h1>34 MPG</h1>
                        <h1>147 HP</h1>
                    </div>
                </div>
                <div className={Active === 4 ? "version active" : "version"} onClick={( () => activeHandler(4))}>
                    <div className="header">
                        <h1>N</h1>
                        <h1>$27,050</h1>
                    </div>
                    <div className="section">
                        <img src={elantra_n} alt="N" />
                        <h1>31 MPG</h1>
                        <h1>201 HP</h1>
                    </div>
                </div>
                <div className={Active === 5 ? "version active" : "version"} onClick={( () => activeHandler(5))}>
                    <div className="header">
                        <h1>Blue</h1>
                        <h1>$24,400</h1>
                    </div>
                    <div className="section"> 
                        <img src={hybrid_elantra} alt="Hybrid" />
                        <h1>54 MPG</h1>
                        <h1>139 HP</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New_versions