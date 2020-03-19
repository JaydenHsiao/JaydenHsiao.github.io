import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import AOS from "aos"
import "aos/dist/aos.css"

import { window, document, exists } from "browser-monads"

if (exists(window) && exists(document)) {
  AOS.init()
  console.log("animate on scroll is successful!")
}

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
