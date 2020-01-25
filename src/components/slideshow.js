import React from "react"
import { Fade } from "react-slideshow-image"
import slideshowStyles from "./slideshow.module.scss"

import productDesigner from "../images/profile.jpg"
import photographer from "../images/mlh.png"
import pianist from "../images/pianist.png"
import friend from "../images/group.jpg"

const fadeImages = [productDesigner, photographer, pianist, friend]

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`)
  },
}

const Slideshow = () => {
  return (
    <div className={slideshowStyles.slideContainer}>
      <Fade {...fadeProperties}>
        <div className={slideshowStyles.eachFade}>
          <div className={slideshowStyles.imageContainer}>
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className={slideshowStyles.eachFade}>
          <div className={slideshowStyles.imageContainer}>
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className={slideshowStyles.eachFade}>
          <div className={slideshowStyles.imageContainer}>
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow
