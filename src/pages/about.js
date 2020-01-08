import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I am currently 17 years old and I am attending the University of
        Waterloo as a Systems Design Engineer
      </p>
      <p>
        <Link to="/contact">Interested? Contact me!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
