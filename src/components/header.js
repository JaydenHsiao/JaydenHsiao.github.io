import React from "react"
import { Link } from "gatsby"
import Resume from "../assets/resume.pdf"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
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
  )
}

export default Header
