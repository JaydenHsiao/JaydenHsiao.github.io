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
import Jayden_Legs from "../images/jayden_legs.png"
import Table from "../images/table.png"
import Sushi from "../images/sushi.png"

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

const TooltipImg = ({ src, height, width, top, left }) => {
  const h_orig = 1303.02
  const w_orig = 1449.034

  const width_rel = (width / w_orig) * 100 + "%"
  const left_rel = (left / w_orig) * 100 + "%"

  const height_rel = (height / h_orig) * 100 + "%"
  const top_rel = (top / h_orig) * top_rel_adjustment + "%"

  const left_pointer = (width / w_orig) * 50 + (left / w_orig) * 100 - 1 + "%"
  const top_pointer = (height / h_orig) * 50 + (top / h_orig) * 100 - 1 + "%"

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
            }}
          ></span>
        </span>
      </a>
      <ReactTooltip
        id={`${src}`}
        aria-haspopup="true"
        className={aboutStyles.tooltip}
        place="top"
        effect="float"
      >
        <img className={aboutStyles.tooltipPic} src={`${src}`} />
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
        />
        <ObjectImg
          src={Bed}
          width="527.212"
          left="392.937"
          height="429.075"
          top="363.053"
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
          left="1112.044"
          height="323.453"
          top="491.806"
        />
        <ObjectImg
          src={Large_Plant}
          width="258.534"
          left="520.038"
          height="377.34"
          top="806.257"
        />
        <ObjectImg
          src={Shelf_Left}
          width="64.797"
          left="1191.351"
          height="421.563"
          top="433.51"
        />
        <ObjectImg
          src={Shelf_Shadow}
          width="142.431"
          left="1200.766"
          height="98.04"
          top="838.827"
        />
        <ObjectImg
          src={Shelf_Level}
          width="183.101"
          left="1207.665"
          height="115.826"
          top="789.11"
        />
        <TooltipImg
          src={Chest}
          width="113.543"
          left="1213.234"
          height="105.57"
          top="748.426"
        />
        <ObjectImg
          src={Shelf_Level}
          width="183.101"
          left="1207.665"
          height="115.826"
          top="676.835"
        />
        <TooltipImg
          src={Books}
          style={{ backgroundPosition: "5px -20px" }}
          width="62.452"
          left="1219.892"
          height="88.043"
          top="624.167"
        />
        <ObjectImg
          src={Shelf_Level}
          width="183.101"
          left="1207.665"
          height="115.826"
          top="564.56"
        />
        <TooltipImg
          src={Trophy}
          width="58.789"
          left="1225.505"
          height="84.168"
          top="518.032"
        />
        <ObjectImg
          src={Shelf_Level}
          width="183.101"
          left="1207.665"
          height="115.826"
          top="452.285"
        />
        <ObjectImg
          src={Shelf_Right}
          width="64.797"
          left="1342.773"
          height="421.563"
          top="521.136"
        />
        {/* <TooltipImg
          src={Laptop_Bottom}
          width="129.753"
          left="349.302"
          height="77.711"
          top="773.74"
        />
        <TooltipImg
          src={Laptop_Top}
          width="91.57"
          left="330.456"
          height="100.791"
          top="749.825"
        /> */}
      </div>
    </Layout>
  )
}

export default AboutPage
