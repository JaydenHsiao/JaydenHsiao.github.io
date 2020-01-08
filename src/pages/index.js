import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>
        My name is Jayden, and I'm currently learning how to create my portfolio
        with Gatsby
      </h2>
      <p>
        Need a designer? <Link to="/contact">Contact me here!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
