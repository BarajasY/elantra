import React, {useState} from "react";
import "./header.css";
import { ElantraImages } from "./ElantraImages";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Header = () => {

  const [current, setCurrent] = useState(0);
  const length = ElantraImages.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(ElantraImages) || ElantraImages.length <= 0) {
    return null
  }

  return (
    <div className="header_container">
      <div className="text">
      <p className="name">Elantra</p>
      <p className="phrase">The sedan you need</p>
      </div>
      <FaArrowAltCircleLeft id="arrows" className="left_arrow" onClick={prevImage}/>
      <FaArrowAltCircleRight id="arrows" className="right_arrow" onClick={nextImage}/>
      {ElantraImages.map((ElantraImages, index) => {
        return(
        <div className={index === current ? 'elantra_images active' : 'elantra_images'} key={index}>
          {index === current && (
            <img src={ElantraImages.image} alt="car" className="image"></img>
          )}
        </div>
        )
      })}
    </div>
  )
}

export default Header
