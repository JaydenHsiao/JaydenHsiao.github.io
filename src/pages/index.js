import React from "react"

import Typing from "react-typing-animation"
import { Fade } from "react-slideshow-image"
import Slideshow from "../components/slideshow"
import ProjectPage from "../components/project"
import AdditionalProjectPage from "../components/addproject"

import Layout from "../components/layout"
import Head from "../components/head"
import Description from "../components/description"
import Chat from "../components/chat"
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.slideRef = React.createRef()
  }
  onBeforeType = () => {
    this.slideRef.current.goNext()
  }
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <h1 style={{ margin: "25vh 0 5vh 0" }}>
          Hello, I'm Jayden - a <br />
          <Typing loop={true} onBeforeType={this.onBeforeType}>
            <div style={{ color: "#4895EA" }}>
              <span>Product Designer</span>
              <Typing.Delay ms={800} />
              <Typing.Backspace count={17} />
              <span>Photographer</span>
              <Typing.Delay ms={1600} />
              <Typing.Backspace count={13} />
              <span>Pianist</span>
              <Typing.Delay ms={2600} />
              <Typing.Backspace count={8} />
              <span>Acapella Enthusiast</span>
              <Typing.Delay ms={1100} />
              <Typing.Backspace count={20} />
              <span>Friend</span>
              <Typing.Delay ms={2700} />
              <Typing.Backspace count={7} />
            </div>
          </Typing>
          <Slideshow ref={this.slideRef} />
        </h1>
        <Description />
        <Chat />
        <ProjectPage />
        <AdditionalProjectPage />
      </Layout>
    )
  }
}

export default IndexPage
