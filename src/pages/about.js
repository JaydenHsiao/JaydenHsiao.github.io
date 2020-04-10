import React from "react"
import ReactTooltip from "react-tooltip"

import Layout from "../components/layout"
import Head from "../components/head"

// import Room from "../images/room.png"
import Walls from "../images/walls.png"
import Diploma from "../images/diploma.svg"
import Bed from "../images/bed.png"
import Shelf from "../images/shelf.png"
import Camera from "../images/camera.svg"
import Window from "../images/window.svg"
import Lamp from "../images/lamp.png"
import Large_Plant from "../images/large_plant.png"

import Shelf_Left from "../images/shelf_left.png"
import Shelf_Level from "../images/shelf_level.png"
import Shelf_Shadow from "../images/shelf_shadow.png"
import Shelf_Right from "../images/shelf_right.png"
import Chest from "../images/chest.svg"
import Books from "../images/books.svg"
import Trophy from "../images/trophy.svg"

import Keyboard from "../images/keyboard.svg"
import Laptop_Top from "../images/laptop_top.svg"
import Laptop_Bottom from "../images/laptop_bottom.svg"
import Jayden_Arms from "../images/jayden_arms.svg"
import Jayden_Body from "../images/jayden_body.svg"
import Table from "../images/table.png"
import Sushi from "../images/sushi.svg"

import Keyboard_Tooltip from "../images/keyboard_tooltip.jpg"
import Jayden_Tooltip from "../images/jayden_tooltip.png"
import Camera_Tooltip from "../images/photographer.jpg"
import Diploma_Tooltip from "../images/diploma_tooltip.jpg"
import Laptop_Tooltip from "../images/laptop_tooltip.png"
import Trophy_Tooltip from "../images/trophy_tooltip.jpeg"
import Sushi_Tooltip from "../images/sushi_tooltip.jpg"
import Books_Tooltip from "../images/books_tooltip.png"
import Window_Tooltip from "../images/window_tooltip.jpg"
import Chest_Tooltip from "../images/chest_tooltip.jpg"

import aboutStyles from "./about.module.scss"

const top_rel_adjustment = 100

const ObjectImg = ({ img_alt, src, height, width, top, left }) => {
  const h_orig = 1303.02
  const w_orig = 1449.034

  const width_rel = (width / w_orig) * 100 + "%"
  const left_rel = (left / w_orig) * 100 + "%"

  const height_rel = (height / h_orig) * 100 + "%"
  const top_rel = (top / h_orig) * top_rel_adjustment + "%"
  return (
    <React.Fragment>
      <img
        alt={`${img_alt}`}
        src={`${src}`}
        className={aboutStyles.object}
        style={{
          width: width_rel,
          left: left_rel,
          height: height_rel,
          top: top_rel,
        }}
      />
    </React.Fragment>
  )
}

const TooltipImg = ({
  img_alt,
  src,
  height,
  width,
  top,
  left,
  left_pt_adj,
  top_pt_adj,
  tooltip_alt,
  tooltip_src,
  tooltip_text,
}) => {
  const h_orig = 1303.02
  const w_orig = 1449.034

  const width_rel = (width / w_orig) * 100 + "%"
  const left_rel = (left / w_orig) * 100 + "%"

  const height_rel = (height / h_orig) * 100 + "%"
  const top_rel = (top / h_orig) * top_rel_adjustment + "%"

  const left_pointer = (width / w_orig) * 50 + (left / w_orig) * 100 - 1 + "%"
  const top_pointer = (height / h_orig) * 50 + (top / h_orig) * 100 - 1 + "%"

  const left_pt_adj_per = left_pt_adj + "%"
  const top_pt_adj_per = top_pt_adj + "%"

  const place_result =
    (height / h_orig) * 100 + (top / h_orig) * top_rel_adjustment + "%"

  var place

  if (place_result > 50 + "%") {
    place = "top"
  } else {
    place = "bottom"
  }

  var text = `${tooltip_text}`

  return (
    <React.Fragment>
      <button href="!#" data-tip={`${src}`} data-for={`${src}`}>
        <span className={aboutStyles.tooltipSpan}>
          <img
            alt={`${img_alt}`}
            src={`${src}`}
            className={aboutStyles.tooltipObject}
            style={{
              width: width_rel,
              left: left_rel,
              height: height_rel,
              top: top_rel,
            }}
          />
          <span
            className={aboutStyles.pointer}
            style={{
              position: "absolute",
              left: left_pointer,
              top: top_pointer,
              marginLeft: left_pt_adj_per,
              marginTop: top_pt_adj_per,
            }}
          ></span>
        </span>
      </button>

      <ReactTooltip
        id={`${src}`}
        aria-haspopup="true"
        className={aboutStyles.tooltip}
        place={`${place}`}
        effect="float"
        style={{ opacity: "100 !important" }}
      >
        <span className={aboutStyles.tooltipContent}>
          <img
            alt={`${tooltip_alt}`}
            lassName={aboutStyles.tooltipPic}
            src={`${tooltip_src}`}
          />
          <p>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </p>
        </span>
      </ReactTooltip>
    </React.Fragment>
  )
}

const DualTooltipImg = ({
  title1,
  src1,
  height1,
  width1,
  top1,
  left1,
  title2,
  src2,
  height2,
  width2,
  top2,
  left2,
  zIndex2,
  left_pt_adj,
  top_pt_adj,
  tooltip_alt,
  tooltip_src,
  tooltip_text,
}) => {
  const h_orig = 1303.02
  const w_orig = 1449.034

  const width_rel1 = (width1 / w_orig) * 100 + "%"
  const left_rel1 = (left1 / w_orig) * 100 + "%"
  const height_rel1 = (height1 / h_orig) * 100 + "%"
  const top_rel1 = (top1 / h_orig) * top_rel_adjustment + "%"

  const width_rel2 = (width2 / w_orig) * 100 + "%"
  const left_rel2 = (left2 / w_orig) * 100 + "%"
  const height_rel2 = (height2 / h_orig) * 100 + "%"
  const top_rel2 = (top2 / h_orig) * top_rel_adjustment + "%"

  const left_pointer = (width1 / w_orig) * 50 + (left1 / w_orig) * 100 - 1 + "%"
  const top_pointer = (height1 / h_orig) * 50 + (top1 / h_orig) * 100 - 1 + "%"

  const left_pt_adj_per = left_pt_adj + "%"
  const top_pt_adj_per = top_pt_adj + "%"

  const place_result =
    (height1 / h_orig) * 100 + (top1 / h_orig) * top_rel_adjustment + "%"

  var place

  if (place_result > 50 + "%") {
    place = "top"
  } else {
    place = "bottom"
  }

  var text = `${tooltip_text}`

  return (
    <React.Fragment>
      <button href="!#" data-tip={`${src1}`} data-for={`${src1}`}>
        <span className={aboutStyles.tooltipSpan}>
          <img
            alt={`${title1}`}
            src={`${src1}`}
            className={aboutStyles.tooltipObject}
            style={{
              width: width_rel1,
              left: left_rel1,
              height: height_rel1,
              top: top_rel1,
            }}
          />
          <img
            alt={`${title2}`}
            src={`${src2}`}
            className={aboutStyles.tooltipObject}
            style={{
              width: width_rel2,
              left: left_rel2,
              height: height_rel2,
              top: top_rel2,
              zIndex: zIndex2,
            }}
          />
          <span
            className={aboutStyles.pointer}
            style={{
              position: "absolute",
              left: left_pointer,
              top: top_pointer,
              marginLeft: left_pt_adj_per,
              marginTop: top_pt_adj_per,
              zIndex: "10",
            }}
          ></span>
        </span>
      </button>
      <ReactTooltip
        id={`${src1}`}
        aria-haspopup="true"
        className={aboutStyles.tooltip}
        place={`${place}`}
        effect="float"
      >
        <span className={aboutStyles.tooltipContent}>
          <img
            alt={`${tooltip_alt}`}
            className={aboutStyles.tooltipPic}
            src={`${tooltip_src}`}
          />
          <p>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </p>
        </span>
      </ReactTooltip>
    </React.Fragment>
  )
}

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="About" />
        <h1>About Me</h1>
        <div style={{ position: "relative" }}>
          {/* <img style={{ opacity: "50%" }} src={Room} /> */}
          <img
            alt="The walls of a room"
            style={{
              position: "relative",
              top: "20px",
            }}
            src={Walls}
          />
          <TooltipImg
            img_alt="Diploma"
            src={Diploma}
            width="144.882"
            left="125.292"
            height="182.399"
            top="428.64"
            tooltip_alt="A class photo of Jayden's Systems Design Engineering Class of 2024"
            tooltip_src={Diploma_Tooltip}
            tooltip_text="I am part of University of Waterloo's Systems Design Engineering Class of 2024 🔧 - ninety-six brilliant, innovative students who inspire me to do my best everyday! 🎉"
          />
          <ObjectImg
            img_alt="Bed"
            src={Bed}
            width="527.212"
            left="392.937"
            height="429.075"
            top="383.053"
          />
          <ObjectImg
            img_alt="Shelf"
            src={Shelf}
            width="182.383"
            left="415.048"
            height="157.6"
            top="252.548"
          />
          <TooltipImg
            img_alt="Camera"
            src={Camera}
            width="63.873"
            left="496.082"
            height="59.844"
            top="273.441"
            tooltip_alt="Jayden taking a picture with his camera"
            tooltip_src={Camera_Tooltip}
            tooltip_text="Whether it be landscape 🍃, digital manipulation 💻, or fine art 🎨, photography has always been one of my favourite methods of artistic expression! 📷"
          />
          <TooltipImg
            img_alt="Window"
            src={Window}
            width="155.817"
            left="943.216"
            height="326.001"
            top="278.795"
            left_pt_adj="0.9"
            top_pt_adj="0"
            tooltip_alt="The final comic strip of Calvin and Hobbes, where Calvin exclaims, 'Let's go exploring!'"
            tooltip_src={Window_Tooltip}
            tooltip_text="I have always loved this final panel from Calvin and Hobbes 📚 - ever since I read it as a child, I've tried to apply this same curiosity to explore myself, my work, and the world around me! 🌎"
          />
          <ObjectImg
            img_alt="Lamp"
            src={Lamp}
            width="88.203"
            left="1092.044"
            height="323.453"
            top="481.806"
          />
          <ObjectImg
            img_alt="Shelf side"
            src={Shelf_Left}
            width="64.797"
            left="1171.351"
            height="421.563"
            top="423.51"
          />
          <ObjectImg
            img_alt="Shelf shadow"
            src={Shelf_Shadow}
            width="142.431"
            left="1180.766"
            height="98.04"
            top="828.827"
          />
          <ObjectImg
            img_alt="Shelf level"
            src={Shelf_Level}
            width="183.101"
            left="1187.665"
            height="115.826"
            top="779.11"
          />
          <TooltipImg
            img_alt="Chest"
            src={Chest}
            width="113.543"
            left="1193.234"
            height="105.57"
            top="738.426"
            tooltip_src={Chest_Tooltip}
            tooltip_text="Whether it be planning a checkmate in chess ♟️, crafting the perfect deck in Dominion ⚔️, or monopolizing the sheep trade in Catan 🐑, one of my favourite ways to have fun is through board games!"
          />
          <ObjectImg
            img_alt="Shelf level"
            src={Shelf_Level}
            width="183.101"
            left="1187.665"
            height="115.826"
            top="666.835"
          />
          <TooltipImg
            img_alt="Books"
            src={Books}
            width="62.452"
            left="1199.892"
            height="88.043"
            top="614.167"
            tooltip_src={Books_Tooltip}
            tooltip_text="Luke 6:31 is my favourite quote! 📖 I constantly strive to devote the empathy, kindness, and care highlighted within this passage not only to my design work, but my lifestyle as well. 💙"
          />
          <ObjectImg
            img_alt="Shelf level"
            src={Shelf_Level}
            width="183.101"
            left="1187.665"
            height="115.826"
            top="554.56"
          />
          <TooltipImg
            img_alt="Trophy"
            src={Trophy}
            width="58.789"
            left="1205.505"
            height="84.168"
            top="508.032"
            tooltip_src={Trophy_Tooltip}
            tooltip_text="I always try my best to excel in everything that I do!
            <ul>
            <li>
            <strong>Best Pitch</strong> - StarterHacks 2020 💬
            </li>
            <li>
            <strong>First Class Honours</strong> - Grade 10 Piano Practical Exam 🎹
            </li>
            <li>
            <strong>Honourable Mention</strong> - Jostens Canada Photo Contest 📷
            </li>
            </ul>
            "
          />
          <ObjectImg
            img_alt="Shelf level"
            src={Shelf_Level}
            width="183.101"
            left="1187.665"
            height="115.826"
            top="442.285"
          />
          <ObjectImg
            img_alt="Shelf side"
            src={Shelf_Right}
            width="64.797"
            left="1322.773"
            height="421.563"
            top="511.136"
          />
          <TooltipImg
            img_alt="Keyboard"
            src={Keyboard}
            width="329.984"
            left="867.694"
            height="340.265"
            top="800.998"
            left_pt_adj="0.5"
            top_pt_adj="-6.5"
            tooltip_alt="Jayden performing piano on a stage"
            tooltip_src={Keyboard_Tooltip}
            tooltip_text="I absolutely love music! You can often find me jamming out on the piano 🎹, improvising on the saxophone 🎷, or performing acapella on-campus! 🎤"
          />
          <DualTooltipImg
            title1="Jayden's body"
            src1={Jayden_Body}
            width1="169.855"
            left1="389.488"
            height1="344.375"
            top1="598.128"
            title2="Jayden's arms"
            src2={Jayden_Arms}
            width2="139.541"
            left2="384.592"
            height2="121.758"
            top2="678.873"
            zIndex2="1"
            left_pt_adj="-1"
            top_pt_adj="-4.5"
            tooltip_alt="A memoji of Jayden waving"
            tooltip_src={Jayden_Tooltip}
            tooltip_text="Hi, I'm Jayden! 👋🏽 As a product designer 📱, I strive to improve the lives of others through the skills that I have been blessed with! Thanks for checking out my portfolio! 😊"
          />
          <ObjectImg
            img_alt="Table"
            src={Table}
            width="324.163"
            left="247.313"
            height="352.24"
            top="715.529"
          />
          <TooltipImg
            img_alt="Sushi"
            src={Sushi}
            width="112.465"
            left="425.272"
            height="71.335"
            top="822.686"
            tooltip_alt="Jayden smiling as he holds up hand rolls and sushi on a plate"
            tooltip_src={Sushi_Tooltip}
            tooltip_text="Some of my most treasured memories revolve around food! 😋 So let me know if you know any good restaurants, especially for sushi! 🍣"
          />
          <DualTooltipImg
            title1="Bottom of laptop"
            src1={Laptop_Bottom}
            width1="129.753"
            left1="349.302"
            height1="77.711"
            top1="743.74"
            title2="Top of laptop"
            src2={Laptop_Top}
            width2="91.57"
            left2="330.456"
            height2="100.791"
            top2="719.825"
            zIndex2="2"
            left_pt_adj="-2.5"
            top_pt_adj="-0.75"
            tooltip_alt="A list of what programming languages Jayden knows - ReactJS, GatsbyJS, HTML/CSS, GraphQL, C++, and C#"
            tooltip_src={Laptop_Tooltip}
            tooltip_text="I believe that designers should understand the technical functionality of the products they are designing for. 💭 From C++ to C#, ReactJS to GraphQL, I am equipped to adapt and optimize my designs! ⚙️"
          />
          <ObjectImg
            img_alt="Large plant"
            src={Large_Plant}
            width="258.534"
            left="520.038"
            height="377.34"
            top="791.257"
          />
        </div>
      </Layout>
    )
  }
  componentDidMount() {
    ReactTooltip.rebuild()
    var all = document.getElementsByClassName("__react_component_tooltip")
    for (var i = 0; i < all.length; i++) {
      all[i].style.setProperty("opacity", "0.95", "important")
    }
  }
}

export default AboutPage
