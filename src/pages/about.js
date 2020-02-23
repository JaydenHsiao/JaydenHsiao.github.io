import React from "react"
import ReactTooltip from "react-tooltip"

import Layout from "../components/layout"
import Head from "../components/head"

import Room from "../images/room.png"
import Walls from "../images/walls.png"
import Diploma from "../images/diploma.png"
import Bed from "../images/bed.png"
import Shelf from "../images/shelf.png"
import Camera from "../images/camera.png"
import Window from "../images/window.png"
import Lamp from "../images/lamp.png"
import Large_Plant from "../images/large_plant.png"

import Shelf_Left from "../images/shelf_left.png"
import Shelf_Level from "../images/shelf_level.png"
import Shelf_Shadow from "../images/shelf_shadow.png"
import Shelf_Right from "../images/shelf_right.png"
import Chest from "../images/chest.png"
import Books from "../images/books.png"
import Trophy from "../images/trophy.png"

import Keyboard from "../images/keyboard.png"
import Laptop_Top from "../images/laptop_top.png"
import Laptop_Bottom from "../images/laptop_bottom.png"
import Jayden_Arms from "../images/jayden_arms.png"
import Jayden_Body from "../images/jayden_body.png"
import Table from "../images/table.png"
import Sushi from "../images/sushi.png"

import Keyboard_Tooltip from "../images/keyboard_tooltip.jpg"
import Jayden_Tooltip from "../images/jayden_tooltip.png"
import Camera_Tooltip from "../images/camera_tooltip.jpg"
import Diploma_Tooltip from "../images/diploma_tooltip.jpg"
import Laptop_Tooltip from "../images/laptop_tooltip.jpg"

import aboutStyles from "./about.module.scss"

const top_rel_adjustment = 100

const ObjectImg = ({ src, height, width, top, left }) => {
  const h_orig = 1303.02
  const w_orig = 1449.034

  const width_rel = (width / w_orig) * 100 + "%"
  const left_rel = (left / w_orig) * 100 + "%"

  const height_rel = (height / h_orig) * 100 + "%"
  const top_rel = (top / h_orig) * top_rel_adjustment + "%"
  return (
    <React.Fragment>
      <img
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
  src,
  height,
  width,
  top,
  left,
  left_pt_adj,
  top_pt_adj,
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

  // const place_result =
  //   (height / h_orig) * 100 + (top / h_orig) * top_rel_adjustment + "%"

  // var place

  // if (place_result > 50 + "%") {
  //   place = "bottom"
  // } else {
  //   place = "top"
  // }

  var place = "top"

  return (
    <React.Fragment>
      <a data-tip={`${src}`} data-for={`${src}`}>
        <span className={aboutStyles.tooltipSpan}>
          <img
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
      </a>

      <ReactTooltip
        id={`${src}`}
        aria-haspopup="true"
        className={aboutStyles.tooltip}
        place={`${place}`}
        effect="float"
      >
        <span className={aboutStyles.tooltipContent}>
          <img className={aboutStyles.tooltipPic} src={`${tooltip_src}`} />
          <p>{`${tooltip_text}`}</p>
        </span>
      </ReactTooltip>
    </React.Fragment>
  )
}

const DualTooltipImg = ({
  src1,
  height1,
  width1,
  top1,
  left1,
  src2,
  height2,
  width2,
  top2,
  left2,
  zIndex2,
  left_pt_adj,
  top_pt_adj,
  tooltip_src,
  tooltip_text,
}) => {
  const h_orig = 1303.02
  const w_orig = 1449.034

  const i = 1

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

  // const place_result =
  //   (height1 / h_orig) * 100 + (top1 / h_orig) * top_rel_adjustment + "%"

  // var place

  // if (place_result > 50 + "%") {
  //   place = "bottom"
  // } else {
  //   place = "top"
  // }

  var place = "top"

  return (
    <React.Fragment>
      <a data-tip={`${src1}`} data-for={`${src1}`}>
        <span className={aboutStyles.tooltipSpan}>
          <img
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
      </a>
      <ReactTooltip
        id={`${src1}`}
        aria-haspopup="true"
        className={aboutStyles.tooltip}
        place={`${place}`}
        effect="float"
      >
        <span className={aboutStyles.tooltipContent}>
          <img className={aboutStyles.tooltipPic} src={`${tooltip_src}`} />
          <p>{`${tooltip_text}`}</p>
        </span>
      </ReactTooltip>
    </React.Fragment>
  )
}

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <div style={{ position: "relative" }}>
        {/* <img style={{ opacity: "50%" }} src={Room} /> */}
        <img
          style={{
            position: "relative",
            top: "20px",
          }}
          src={Walls}
        />
        <TooltipImg
          src={Diploma}
          width="144.882"
          left="125.292"
          height="182.399"
          top="428.64"
          tooltip_src={Diploma_Tooltip}
          tooltip_text="I am part of University of Waterloo's Systems Design Engineering Class of 2024 🔧 - ninety-six brilliant, innovative students who inspire me to do my best everyday! 🎉"
        />
        <ObjectImg
          src={Bed}
          width="527.212"
          left="392.937"
          height="429.075"
          top="383.053"
        />
        <ObjectImg
          src={Shelf}
          width="182.383"
          left="415.048"
          height="157.6"
          top="252.548"
        />
        <TooltipImg
          src={Camera}
          width="63.873"
          left="496.082"
          height="59.844"
          top="273.441"
          tooltip_src={Camera_Tooltip}
          tooltip_text="Whether it be landscape 🍃, digital manipulation 💻, or fine art 🎨, photography has always been one of my favourite methods of artistic expression! 📷"
        />
        <ObjectImg
          src={Window}
          width="155.817"
          left="943.216"
          height="326.001"
          top="278.795"
        />
        <ObjectImg
          src={Lamp}
          width="88.203"
          left="1092.044"
          height="323.453"
          top="481.806"
        />
        <ObjectImg
          src={Shelf_Left}
          width="64.797"
          left="1171.351"
          height="421.563"
          top="423.51"
        />
        <ObjectImg
          src={Shelf_Shadow}
          width="142.431"
          left="1180.766"
          height="98.04"
          top="828.827"
        />
        <ObjectImg
          src={Shelf_Level}
          width="183.101"
          left="1187.665"
          height="115.826"
          top="779.11"
        />
        <TooltipImg
          src={Chest}
          width="113.543"
          left="1193.234"
          height="105.57"
          top="738.426"
          tooltip_src
          tooltip_text
        />
        <ObjectImg
          src={Shelf_Level}
          width="183.101"
          left="1187.665"
          height="115.826"
          top="666.835"
        />
        <TooltipImg
          src={Books}
          width="62.452"
          left="1199.892"
          height="88.043"
          top="614.167"
          tooltip_src
          tooltip_text
        />
        <ObjectImg
          src={Shelf_Level}
          width="183.101"
          left="1187.665"
          height="115.826"
          top="554.56"
        />
        <TooltipImg
          src={Trophy}
          width="58.789"
          left="1205.505"
          height="84.168"
          top="508.032"
          tooltip_src
          tooltip_text
        />
        <ObjectImg
          src={Shelf_Level}
          width="183.101"
          left="1187.665"
          height="115.826"
          top="442.285"
        />
        <ObjectImg
          src={Shelf_Right}
          width="64.797"
          left="1322.773"
          height="421.563"
          top="511.136"
        />
        <TooltipImg
          src={Keyboard}
          width="329.984"
          left="867.694"
          height="340.265"
          top="800.998"
          left_pt_adj="0.5"
          top_pt_adj="-6.5"
          tooltip_src={Keyboard_Tooltip}
          tooltip_text="I absolutely love music! You can often find me jamming out on the piano 🎹, improvising on the saxophone 🎷, or performing acapella on-campus! 🎤"
        />
        <DualTooltipImg
          src1={Jayden_Body}
          width1="169.855"
          left1="389.488"
          height1="344.375"
          top1="598.128"
          src2={Jayden_Arms}
          width2="139.541"
          left2="384.592"
          height2="121.758"
          top2="678.873"
          zIndex2="1"
          left_pt_adj="-1"
          top_pt_adj="-4.5"
          tooltip_src={Jayden_Tooltip}
          tooltip_text="Hi, I'm Jayden! 👋🏽 As a product designer 📱, I strive to improve the lives of others through the skills that I have been blessed with! Thanks for checking out my portfolio! 😊"
        />
        <ObjectImg
          src={Table}
          width="324.163"
          left="247.313"
          height="352.24"
          top="715.529"
        />
        <TooltipImg
          src={Sushi}
          width="112.465"
          left="425.272"
          height="71.335"
          top="822.686"
          tooltip_src
          tooltip_text="Some of my most treasured memories revolve around food! 😋 So let me know if you know any good restaurants, especially for sushi! 🍣"
        />
        <DualTooltipImg
          src1={Laptop_Bottom}
          width1="129.753"
          left1="349.302"
          height1="77.711"
          top1="743.74"
          src2={Laptop_Top}
          width2="91.57"
          left2="330.456"
          height2="100.791"
          top2="719.825"
          zIndex2="2"
          left_pt_adj="-2.5"
          top_pt_adj="-0.75"
          tooltip_src={Laptop_Tooltip}
          tooltip_text="I believe that designers should understand the technical functionality of the products they are designing for. 💭 From C++ to C#, ReactJS to GraphQL, I am equipped to adapt and optimize my designs! ⚙"
        />
        <ObjectImg
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

export default AboutPage
