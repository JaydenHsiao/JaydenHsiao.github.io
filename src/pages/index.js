import React from "react"

import Typing from "react-typing-animation"

import Slideshow from "../components/slideshow"
import ProjectPage from "../components/project"
import AdditionalProjectPage from "../components/addproject"

import Head from "../components/head"
import Description from "../components/description"
import Chat from "../components/chat"

var letters = 0
var word = 0

var words = [
  "Product Designer",
  "Photographer",
  "Pianist",
  "Acapella Enthusiast",
  "Friend",
]

var word1 = words[0]
var word2 = words[1]
var word3 = words[2]
var word4 = words[3]
var word5 = words[4]

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.slideRef = React.createRef()
  }
  onBeforeType = () => {
    letters++
    // console.log("letters is " + letters)
    // console.log("word is " + word)
    if (letters === words[word].length) {
      // console.log(`finished typing word`)
    }
    if (letters === words[word].length * 2 - 3) {
      this.slideRef.current.goNext()
    }
    if (letters === words[word].length * 2 + 1) {
      letters = 0
      word++
    }
    if (word === words.length) {
      letters = 0
      word = 0
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <h1 style={{ margin: "25vh 0 5vh 0" }}>
          Hello, I'm Jayden - a <br />
          <Typing loop={true} onBeforeType={this.onBeforeType}>
            <div style={{ color: "#4895EA" }}>
              <span>{`${word1}`}</span>
              <Typing.Delay ms={800} />
              <Typing.Backspace count={`${word1.length + 1}`} />
              <span>{`${word2}`}</span>
              <Typing.Delay ms={1600} />
              <Typing.Backspace count={`${word2.length + 1}`} />
              <span>{`${word3}`}</span>
              <Typing.Delay ms={2600} />
              <Typing.Backspace count={`${word3.length + 1}`} />
              <span>{`${word4}`}</span>
              <Typing.Delay ms={1100} />
              <Typing.Backspace count={`${word4.length + 1}`} />
              <span>{`${word5}`}</span>
              <Typing.Delay ms={2700} />
              <Typing.Backspace count={`${word5.length + 1}`} />
            </div>
          </Typing>
          <Slideshow ref={this.slideRef} />
        </h1>
        <Description />
        <Chat />
        <ProjectPage />
        <AdditionalProjectPage />
      </React.Fragment>
    )
  }
}

export default IndexPage
