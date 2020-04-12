import React from "react"

import Head from "../components/head"

const ContactPage = () => {
  return (
    <React.Fragment>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>
        You can email me at{" "}
        <a href="mailto:jthsiao57@gmail.com">jthsiao57@gmail.com</a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/jthsiao57/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my LinkedIn profile as well!
        </a>
      </p>
    </React.Fragment>
  )
}

export default ContactPage
