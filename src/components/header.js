import React from "react"
import { Link } from "gatsby"
import Resume from "../assets/resume.pdf"
import Headroom from "react-headroom"

import Icon from "../images/icon.png"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <Headroom
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        maxWidth: "77vw",
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
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Portfolio
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <a
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  )
}

export default Header
