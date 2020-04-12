import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import Resume from "../assets/resume.pdf"
import Headroom from "react-headroom"

import Icon from "../images/icon.png"

import headerStyles from "./header.module.scss"

import { window, document, exists } from "browser-monads"

var maxWidth

if (exists(window) && exists(document)) {
  if (window.matchMedia("(min-width: 992px)").matches) {
    maxWidth = "77vw"
  } else if (window.matchMedia("(min-width: 375px)").matches) {
    maxWidth = "100vw"
  }
}

const Header = ({ location }) => {
  const navIndicatorRef = useRef(null)
  const linkRefs = [useRef(null), useRef(null)]

  useEffect(() => {
    if (location.pathname === "/" && linkRefs[0]) {
      focusNavLink(linkRefs[0].current)
    } else if (location.pathname === "/about" && linkRefs[1]) {
      focusNavLink(linkRefs[1].current)
    }
  }, [location, linkRefs])

  const focusNavLink = el => {
    if (navIndicatorRef.current.style.left) {
      navIndicatorRef.current.classList.add(headerStyles.transition)
    } else {
      navIndicatorRef.current.classList.remove(headerStyles.transition)
    }

    navIndicatorRef.current.style.width = `${el.offsetWidth}px`
    navIndicatorRef.current.style.left = `${el.offsetLeft}px`
    navIndicatorRef.current.style.backgroundColor = el.getAttribute(
      "activeColor"
    )
  }

  return (
    <Headroom
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        maxWidth: `${maxWidth}`,
        padding: "1rem",
        position: "fixed",
        transition: "all 0.2s ease-in-out 0s",
      }}
    >
      <Link to="/">
        {" "}
        <img
          style={{
            width: "2.25rem",
            float: "left",
            margin: "0.25rem 0 -0.5rem 0",
          }}
          src={Icon}
          alt="The icon for my portfolio"
        />
      </Link>
      <header className={headerStyles.header}>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              {" "}
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.isActive}
                activeColor="#4895EA"
                activeStyle={{ color: "#4895EA" }}
                to="/"
                ref={linkRefs[0]}
              >
                Portfolio
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.isActive}
                activeColor="orange"
                activeStyle={{ color: "orange" }}
                to="/about"
                ref={linkRefs[1]}
              >
                About
              </Link>
            </li>
            <li>
              <a
                className={headerStyles.navItem}
                activeClassName={headerStyles.isActive}
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
          <span class={headerStyles.navIndicator} ref={navIndicatorRef}></span>
        </nav>
      </header>
    </Headroom>
  )
}

export default Header
