import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <React.Fragment>
      <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home!</Link>
      </p>
    </React.Fragment>
  )
}

export default NotFound
