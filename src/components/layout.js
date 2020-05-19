import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import "../styles/index.css"
import "../styles/tailwind.generated.css"
import layoutStyles from "./layout.module.scss"
import AOS from "aos"
import "aos/dist/aos.css"

import { window, document, exists } from "browser-monads"

if (exists(window) && exists(document)) {
  AOS.init()
  // console.log("animate on scroll is successful!")
}

const Layout = props => {
  return (
    <React.Fragment>
      <Header location={props.location} />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
