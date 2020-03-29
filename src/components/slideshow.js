import React from "react"
import { Fade } from "react-slideshow-image"
import slideshowStyles from "./slideshow.module.scss"

import productDesigner from "../images/product_designer.jpg"
import photographer from "../images/photographer.jpg"
import pianist from "../images/pianist_filtered.png"
import acapellaEnthusiast from "../images/acapella_enthusiast.jpg"
import friend from "../images/friend.jpg"

const fadeImages = [
  productDesigner,
  photographer,
  pianist,
  acapellaEnthusiast,
  friend,
]

const fadeProperties = {
  duration: 3000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`)
  },
}

const Slideshow = React.forwardRef((props, ref) => (
  <div className={slideshowStyles.slideContainer}>
    <Fade {...fadeProperties} ref={ref}>
      <div className={slideshowStyles.eachFade}>
        <div className={slideshowStyles.imageContainer}>
          <img
            src={fadeImages[0]}
            alt="Jayden presenting a wireframe to his coworkers"
          />
        </div>
      </div>
      <div className={slideshowStyles.eachFade}>
        <div className={slideshowStyles.imageContainer}>
          <img
            src={fadeImages[1]}
            alt="Jayden taking a photograph with his camera"
          />
        </div>
      </div>
      <div className={slideshowStyles.eachFade}>
        <div className={slideshowStyles.imageContainer}>
          <img src={fadeImages[2]} alt="Jayden performing a piano piece" />
        </div>
      </div>
      <div className={slideshowStyles.eachFade}>
        <div className={slideshowStyles.imageContainer}>
          <img
            src={fadeImages[3]}
            alt="Jayden with his university acapella group"
          />
        </div>
      </div>
      <div className={slideshowStyles.eachFade}>
        <div className={slideshowStyles.imageContainer}>
          <img src={fadeImages[4]} alt="Jayden with his friends!" />
        </div>
      </div>
    </Fade>
  </div>
));

export default Slideshow
