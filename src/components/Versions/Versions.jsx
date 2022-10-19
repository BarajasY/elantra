import React, { useState } from 'react';
import './Versions.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import gls_ivt from '../../assets/white_car.png';
import premium_ivt from '../../assets/black_car.png';
import limited_tech from '../../assets/blue_car.png';
import elantra_n from '../../assets/n_car.png';

const Versions = () => {
    const [Count, setCount] = useState(1)

    const handleMinus = () => {
        if (Count === 1) {
            setCount(4);
        }
        else {
            setCount(Count - 1);
        }
    }

    const handleplus = () => {
        if (Count === 4) {
            setCount(1);
        }
        else {
            setCount(Count + 1);
        }
    }

    return (
        <div className="versions_container">
            <div className="versions_content">
                <AnimatePresence>
                    <div className="bar">
                        <AiOutlineArrowLeft onClick={() => handleMinus()} />
                        {{
                            1: <>
                                <div className="bar_circle" style={{ background: '#2cd3b7' }}></div>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" ></div>
                            </>,
                            2: <>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" style={{ background: '#2cd3b7' }}></div>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" ></div>
                            </>,
                            3: <>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" style={{ background: '#2cd3b7' }}></div>
                                <div className="bar_circle" ></div>
                            </>,
                            4: <>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" ></div>
                                <div className="bar_circle" style={{ background: '#2cd3b7' }}></div>
                            </>
                        }[Count]}
                        <AiOutlineArrowRight onClick={() => handleplus()} />
                    </div>
                    <div className="section">
                        {{
                            1:
                                <>
                                    <AnimatePresence>
                                        <div className="versions_img">
                                            <motion.img src={gls_ivt} alt="gls_ivt" exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }} />
                                        </div>
                                        <motion.div className="versions_details" exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: .5 }}>
                                            <h1>$399,900 MXN</h1>
                                            <h1>147-hp 2.0L 4-cylinder engine</h1>
                                            <li>Aluminum 16"</li>
                                            <li>8-inch touchscreen</li>
                                            <li>60/40 folded rear seats</li>
                                            <li>Backuli camera</li>
                                            <li>Anti-lock braking sistem</li>
                                        </motion.div>
                                    </AnimatePresence>
                                </>,

                            2:
                                <>
                                    <div className="versions_img">
                                        <motion.img src={premium_ivt} alt="premium_ivt" exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }} />
                                    </div>
                                    <motion.div className="versions_details" exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }}>
                                        <h1>$459,900 MXN</h1>
                                        <h1>147-hp 2.0L 4-cylinder engine</h1>
                                        <li>10.25-inch touchscreen</li>
                                        <li>Automatic air-conditioning</li>
                                        <li>Leather-trimmed steering wheel</li>
                                        <li>Smart key and engine start button</li>
                                        <li>Anti-lock braking sistem</li>
                                        <li>Wireless charger</li>
                                    </motion.div>
                                </>,

                            3:
                                <>
                                    <AnimatePresence>
                                        <div className="versions_img">
                                            <motion.img src={limited_tech} alt="limited_tech" exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }} />
                                        </div>
                                        <motion.div className="versions_details" exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }}>
                                            <h1>$519,900 MXN</h1>
                                            <h1>147-hp 2.0L 4-cylinder engine</h1>
                                            <li>Aluminum 17"</li>
                                            <li>Forward Collision-Avoidance Assist - Junction Turning</li>
                                            <li>Blind-Spot Collision-Avoidance Assist</li>
                                            <li>Electric adjustable seats</li>
                                            <li>Lane Following Assist</li>
                                            <li>Premium BOSE sound system</li>
                                        </motion.div>
                                    </AnimatePresence>
                                </>,

                            4:
                                <>
                                    <div className="versions_img">
                                        <motion.img src={elantra_n} alt="elantra_n" exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }} style={{ width: '600px', height: '400px' }} />
                                    </div>
                                    <motion.div className="versions_details" exit={{ opacity: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }}>
                                        <h1>$540,537 MXN</h1>
                                        <h1>276-hp 2.0L 4-cylinder engine</h1>
                                        <li>Aluminum 18"</li>
                                        <li>Multi-link independent rear suspension</li>
                                        <li>Hyundai Digital Key</li>
                                        <li>N Line sport seats</li>
                                    </motion.div>
                                </>
                        }[Count]}
                    </div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Versions