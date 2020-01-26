import React from "react"

import Typing from "react-typing-animation"
import Slideshow from "../components/slideshow"
import ProjectPage from "../components/project"
import AdditionalProjectPage from "../components/addproject"

import Layout from "../components/layout"
import Head from "../components/head"
import Chat from "../components/chat"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1 style={{ margin: "25vh 0 5vh 0" }}>
        Hello, I'm Jayden - a <br />
        <Typing loop={true}>
          <div style={{ color: "#4895EA" }}>
            <span>Product Designer</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={17} />
            <span>Photographer</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={13} />
            <span>Pianist</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={8} />
            <span>Acapella Enthusiast</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
            <span>Friend</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={7} />
          </div>
        </Typing>
        <Slideshow />
      </h1>
      <h3 style={{ marginBottom: "5vh" }}>
        Systems Design Engineering student at the University of Waterloo. <br />
        Previously a Product Designer at Ontario Digital Service.{" "}
      </h3>
      <Chat />
      <ProjectPage />
      <AdditionalProjectPage />
    </Layout>
  )
}

export default IndexPage
