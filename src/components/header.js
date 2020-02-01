import React from "react"
import { Link } from "gatsby"
import Resume from "../assets/resume.pdf"

import Icon from "../images/icon.png"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div style={{ margin: "1rem 0 1.75rem 0" }}>
      <Link to="/">
        {" "}
        <img style={{ width: "2.25rem", float: "left" }} src={Icon} />
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
    </div>
  )
}

export default Header
