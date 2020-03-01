import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

import emailLogo from "../images/email.png"
import githubLogo from "../images/github.png"
import linkedinLogo from "../images/linkedin.png"
import instagramLogo from "../images/instagram.png"
import dribbbleLogo from "../images/dribbble.png"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            email
            github
            linkedin
            instagram
            dribbble
          }
        }
      }
    }
  `)

  return (
    <footer
      className={footerStyles.footer}
      data-aos="fade-in"
      data-aos-once="false"
    >
      <h2 style={{ lineHeight: "1", marginBottom: "3vh" }}>
        Like what you see?
      </h2>
      <h3 style={{ marginBottom: "2.5vh" }}>
        Let's keep the conversation going!
      </h3>
      <div className={footerStyles.iconDiv}>
        <a
          href={`mailto: ${data.site.siteMetadata.social.email}`}
          rel="noopener noreferrer"
        >
          {" "}
          <img style={{ order: "0" }} src={emailLogo} alt="Email Icon" />
        </a>
        <a
          href={`https://github.com/${data.site.siteMetadata.social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img style={{ order: "1" }} src={githubLogo} alt="Github Icon" />
        </a>
        <a
          href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img style={{ order: "2" }} src={linkedinLogo} alt="LinkedIn Icon" />
        </a>
        <a
          href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            style={{ order: "3" }}
            src={instagramLogo}
            alt="Instagram Icon"
          />
        </a>
        <a
          href={`https://www.dribbble.com/${data.site.siteMetadata.social.dribbble}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img style={{ order: "4" }} src={dribbbleLogo} alt="Dribbble Icon" />
        </a>
      </div>
      <p>
        Designed and developed with love{" "}
        <span role="img" aria-label="Blue Heart">
          💙
        </span>{" "}
        © {data.site.siteMetadata.author} 2020
      </p>
    </footer>
  )
}

export default Footer
