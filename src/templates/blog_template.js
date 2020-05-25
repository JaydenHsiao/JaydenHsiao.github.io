import React from "react"

import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import Head from "../components/head"

import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import X from "../images/x.svg"
import Check from "../images/check.svg"
import Arrow_Right from "../images/arrow_right.svg"
import Problem_Statement from "../images/problem_statement.svg"
import PS_Blob from "../images/ps_blob.svg"
import Grey_VP_Arrow from "../images/grey_vp_arrow.svg"
import Dog from "../images/dog.svg"

import ProgressiveImage from "react-progressive-image-loading"

import blogTemplateStyles from "./blog_template.module.scss"

const website_url = "https://jaydenhsiao.me"
const primary_colour = "#85cbcf"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        json
      }
    }
  }
`

const Blog = props => {
  let add_hr = false
  let iteration_num = 0
  let lesson_num = 0
  const processInfographicOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // const alt = node.data.target.fields.description["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        if (
          node.data.target.fields.file["en-US"].contentType === "image/svg+xml"
        ) {
          return (
            <ProgressiveImage
              preview={`${url}?w=800&fm=webp&q=1`}
              src={`${url}?w=800&fm=webp&q=80`}
              render={(src, style) => (
                <img
                  className={blogTemplateStyles.icon}
                  src={src}
                  style={style}
                  // alt={`${alt}`}
                />
              )}
            />
          )
        } else {
          return (
            <ProgressiveImage
              preview={`${url}?w=800&fm=webp&q=1`}
              src={`${url}?w=800&fm=webp&q=80`}
              render={(src, style) => (
                <img
                  className={blogTemplateStyles.otherImage}
                  src={src}
                  style={style}
                  // alt={`${alt}`}
                />
              )}
            />
          )
        }
      },
    },
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const words = node.data.target.fields.title["en-US"].split(" ")
        var asset_width =
          node.data.target.fields.file["en-US"].details.image.width
        var asset_height =
          node.data.target.fields.file["en-US"].details.image.height

        var ratio = asset_height / asset_width
        if (ratio > 1 && asset_width < 1000) {
          const alt = node.data.target.fields.description["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return (
            <React.Fragment>
              <div className={blogTemplateStyles.portraitContainer}>
                <ProgressiveImage
                  preview={`${url}?w=800&fm=webp&q=1`}
                  src={`${url}?w=800&fm=webp&q=80`}
                  render={(src, style) => (
                    <img src={src} style={style} alt={`${alt}`} />
                  )}
                />
                <div className={blogTemplateStyles.captionContainer}>
                  {" "}
                  <p className={blogTemplateStyles.caption}>
                    {node.data.target.fields.description["en-US"]}
                  </p>
                </div>
              </div>
              <br />
            </React.Fragment>
          )
        } else if (
          words[words.length - 1] === "(Grid)" ||
          words[words.length - 2] === "(Grid)"
        ) {
          const alt = node.data.target.fields.description["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return (
            <Zoom>
              <img
                alt={alt}
                src={`${url}?w=800&fm=webp&q=80`}
                className={blogTemplateStyles.photography}
              />
            </Zoom>
          )
        } else {
          const alt = node.data.target.fields.description["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return (
            <React.Fragment>
              <div className={blogTemplateStyles.imageContainer}>
                {/* <Zoom>
                  <img alt={alt} src={`${url}?w=800&fm=webp&q=80`} />
                </Zoom> */}
                <ProgressiveImage
                  preview={`${url}?w=800&fm=webp&q=1`}
                  src={`${url}?w=800&fm=webp&q=80`}
                  render={(src, style) => (
                    <img src={src} style={style} alt={`${alt}`} />
                  )}
                />
                {/* <div className={blogTemplateStyles.captionContainer}>
                  {" "}
                  <p className={blogTemplateStyles.caption}>
                    {node.data.target.fields.description["en-US"]}
                  </p>
                </div> */}
              </div>
              <br />
            </React.Fragment>
          )
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        if (node.data.target.sys.contentType.sys.id === "miroEmbed") {
          let str =
            `${node.data.target.fields.src["en-US"]}`.replace(
              `board`,
              `embed`
            ) + "=/?autoplay=yep"
          return (
            <React.Fragment>
              <iframe
                title={`${node.data.target.fields.title["en-US"]}`}
                width="100%"
                height="500"
                src={`${str}`}
                frameborder="0"
                scrolling="no"
                allowfullscreen
              ></iframe>
            </React.Fragment>
          )
        } else if (node.data.target.sys.contentType.sys.id === "trelloEmbed") {
          return (
            <React.Fragment>
              <iframe
                title={`${node.data.target.fields.title["en-US"]}`}
                width="100%"
                height="600"
                src={`${node.data.target.fields.src["en-US"] + ".html"}`}
                frameBorder="0"
              ></iframe>
            </React.Fragment>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "figmaPageEmbed"
        ) {
          return (
            <React.Fragment>
              <iframe
                title={`${node.data.target.fields.title["en-US"]}`}
                width="100%"
                height="600"
                src={`${node.data.target.fields.src["en-US"]}`}
                allowfullscreen
              ></iframe>
            </React.Fragment>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "figmaPrototypeEmbed"
        ) {
          return (
            <div className="flex justify-end">
              <iframe
                title={`${node.data.target.fields.title["en-US"]}`}
                width="100%"
                height="600"
                className="mb-0"
                src={`${node.data.target.fields.src["en-US"]}`}
                allowfullscreen
              ></iframe>
            </div>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "airtableEmbed"
        ) {
          let src = `${node.data.target.fields.src["en-US"]}`
          let bg_color = `${node.data.target.fields.backgroundColor["en-US"]}`
          let viewControls
          if (`${node.data.target.fields.viewControls["en-US"]}` === "on") {
            viewControls = `&viewControls=on`
          } else {
            viewControls = ""
          }
          let layout = "card"
          return (
            <iframe
              title={`${node.data.target.fields.title["en-US"]}`}
              src={`${src}?backgroundColor=${bg_color}&layout=${layout}${viewControls}`}
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="450"
            ></iframe>
          )
        } else if (node.data.target.sys.contentType.sys.id === "grid") {
          var num_of_indexes = `${node.data.target.fields.content["en-US"].content.length}`
          var renders = []
          var content = ""
          var header = true
          var temp_content
          var last_paragraph = false

          for (var i = 0; i <= num_of_indexes - 2; i++) {
            if (
              node.data.target.fields.content["en-US"].content[i + 1]
                .nodeType === "hr"
            ) {
              last_paragraph = true
            }
            if (
              node.data.target.fields.content["en-US"].content[i].nodeType ===
              "hr"
            ) {
              renders.push(
                <div>
                  <span dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              )
              last_paragraph = false
              header = true
              temp_content = ""
              content = ""
            } else if (
              node.data.target.fields.content["en-US"].content[i].nodeType ===
                "paragraph" ||
              node.data.target.fields.content["en-US"].content[i].nodeType ===
                "unordered-list"
            ) {
              temp_content = `${documentToHtmlString(
                node.data.target.fields.content["en-US"].content[i],
                options
              )}`
              if (temp_content.startsWith("<li>")) {
                temp_content = "<ul>" + temp_content + "</ul>"
              } else if (header === true) {
                temp_content = `<h3 className="mb-0">${temp_content}</h3>`
                header = false
              } else if (last_paragraph === false) {
                temp_content += "</br></br>"
              }
            } else if (
              node.data.target.fields.content["en-US"].content[i].nodeType ===
              "embedded-asset-block"
            ) {
              var url = `${node.data.target.fields.content["en-US"].content[i].data.target.fields.file["en-US"].url}`
              temp_content = `<img src=${url} />`
            }
            content += `${temp_content}`
          }
          return (
            <div className={blogTemplateStyles.grid}>
              {renders.map(render => (
                <React.Fragment key={render}>{render}</React.Fragment>
              ))}
            </div>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "gridWithIcons"
        ) {
          num_of_indexes = `${node.data.target.fields.content["en-US"].content.length}`
          var hr_count = 0
          var content = []
          var hr_locations = [-1]
          header = true

          for (i = 0; i < num_of_indexes; i++) {
            if (
              node.data.target.fields.content["en-US"].content[i].nodeType ===
              "hr"
            ) {
              hr_count++
              hr_locations.push(i)
            }
          }

          var index = 0

          for (i = 0; i < hr_count; i++) {
            for (index; index < num_of_indexes; index++) {
              if (
                node.data.target.fields.content["en-US"].content[index]
                  .nodeType === "hr"
              ) {
                index++
                header = true
                break
              } else if (header === true) {
                content.push(
                  <div
                    style={{
                      gridColumn: `${i + 1} / ${i + 2}`,
                      gridRow: `1 / 2`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    {documentToReactComponents(
                      node.data.target.fields.content["en-US"].content[index],
                      processInfographicOptions
                    )}
                  </div>
                )
                header = false
              } else {
                if (hr_locations[i + 1] - hr_locations[i] === 3) {
                  content.push(
                    <div
                      style={{
                        gridColumn: `${i + 1} / ${i + 2}`,
                        gridRow: `2 / 3`,
                      }}
                    >
                      {documentToReactComponents(
                        node.data.target.fields.content["en-US"].content[index],
                        processInfographicOptions
                      )}
                    </div>
                  )
                } else if (hr_locations[i + 1] - hr_locations[i] === 4) {
                  content.push(
                    <div
                      className={blogTemplateStyles.contentDiv}
                      style={{
                        gridColumn: `${i + 1} / ${i + 2}`,
                        gridRow: `2 / 3`,
                      }}
                    >
                      {documentToReactComponents(
                        node.data.target.fields.content["en-US"].content[index],
                        processInfographicOptions
                      )}
                      {documentToReactComponents(
                        node.data.target.fields.content["en-US"].content[
                          index + 1
                        ],
                        processInfographicOptions
                      )}
                    </div>
                  )
                  index++
                }
              }
            }
          }
          return (
            <div className={blogTemplateStyles.gridWithIconsWrapper}>
              {content.map(content => (
                <React.Fragment key={content}>{content}</React.Fragment>
              ))}
            </div>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "processInfographic"
        ) {
          num_of_indexes = `${node.data.target.fields.content["en-US"].content.length}`
          hr_count = 0
          content = []
          hr_locations = [-1]
          header = true

          for (i = 0; i < num_of_indexes; i++) {
            if (
              node.data.target.fields.content["en-US"].content[i].nodeType ===
              "hr"
            ) {
              hr_count++
              hr_locations.push(i)
            }
          }

          index = 0

          for (i = 0; i < hr_count; i++) {
            for (index; index < num_of_indexes; index++) {
              if (
                node.data.target.fields.content["en-US"].content[index]
                  .nodeType === "hr"
              ) {
                index++
                header = true
                break
              } else if (header === true) {
                content.push(
                  <div
                    className={blogTemplateStyles.headerDiv}
                    style={{
                      gridColumn: `${i * 2 + 1} / ${i * 2 + 2}`,
                      gridRow: `1 / 2`,
                    }}
                  >
                    {" "}
                    {documentToReactComponents(
                      node.data.target.fields.content["en-US"].content[index],
                      processInfographicOptions
                    )}
                  </div>
                )
                header = false
              } else {
                if (hr_locations[i + 1] - hr_locations[i] === 3) {
                  content.push(
                    <div
                      style={{
                        gridColumn: `${i * 2 + 1} / ${i * 2 + 2}`,
                        gridRow: `2 / 3`,
                        margin: "auto 0 auto 0",
                      }}
                    >
                      {documentToReactComponents(
                        node.data.target.fields.content["en-US"].content[index],
                        processInfographicOptions
                      )}
                    </div>
                  )
                } else if (hr_locations[i + 1] - hr_locations[i] === 4) {
                  content.push(
                    <div
                      style={{
                        gridColumn: `${i * 2 + 1} / ${i * 2 + 2}`,
                        gridRow: `2 / 3`,
                        margin: "auto 0 auto 0",
                      }}
                    >
                      {documentToReactComponents(
                        node.data.target.fields.content["en-US"].content[index],
                        processInfographicOptions
                      )}
                      {documentToReactComponents(
                        node.data.target.fields.content["en-US"].content[
                          index + 1
                        ],
                        processInfographicOptions
                      )}
                    </div>
                  )
                  index++
                }
              }
            }
            if (i !== hr_count - 1) {
              content.push(
                <div
                  style={{
                    gridColumn: `${i * 2 + 2} / ${i * 2 + 3}`,
                    gridRow: "2 / 3",
                    backgroundImage: `url(${Arrow_Right})`,
                  }}
                  className={blogTemplateStyles.arrow}
                />
              )
            }
          }
          return (
            <div className={blogTemplateStyles.wrapper}>
              {content.map(content => (
                <React.Fragment key={content}>{content}</React.Fragment>
              ))}
            </div>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "painPointGrid"
        ) {
          hr_count = 0
          content = []
          num_of_indexes = `${node.data.target.fields.content["en-US"].content.length}`

          for (i = 0; i < num_of_indexes; i++) {
            if (
              node.data.target.fields.content["en-US"].content[i].nodeType ===
              "hr"
            ) {
              hr_count++
            }
          }

          // Header
          content.push(
            <React.Fragment>
              <div
                style={{
                  gridColumn: `1 / 3`,
                  gridRow: "1 / 2",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "table", margin: "0 auto" }}>
                  <img
                    style={{
                      height: "2.5rem",
                      marginRight: "0.5rem",
                      float: "left",
                    }}
                    src={X}
                  ></img>
                  <h2 style={{ float: "left" }}>Pain Points</h2>
                </div>
              </div>
              <div
                style={{
                  gridColumn: `3 / 5`,
                  gridRow: "1 / 2",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "table", margin: "0 auto" }}>
                  <img
                    style={{
                      height: "2.5rem",
                      marginRight: "0.5rem",
                      float: "left",
                    }}
                    src={Check}
                  ></img>
                  <h2 style={{ float: "left" }}>Opportunities</h2>
                </div>
              </div>
            </React.Fragment>
          )

          i = 0
          var direction = "column"
          for (var j = 1; j <= hr_count; j++) {
            content.push(
              <React.Fragment>
                {/* Mockup */}
                <div
                  style={{
                    gridColumn: `1 / 2`,
                    gridRow: `${j + 1} / ${j + 2}`,
                    margin: "auto 0 auto 0",
                  }}
                >
                  {" "}
                  {documentToReactComponents(
                    node.data.target.fields.content["en-US"].content[i],
                    processInfographicOptions
                  )}
                </div>
                {/* Pain point and user comment bubbles */}
                <div
                  style={{
                    gridColumn: `2 / 3`,
                    gridRow: `${j + 1} / ${j + 2}`,
                  }}
                >
                  {" "}
                  <div className={blogTemplateStyles.headerDiv}>
                    {" "}
                    {documentToReactComponents(
                      node.data.target.fields.content["en-US"].content[i + 1],
                      processInfographicOptions
                    )}
                  </div>
                  <div
                    className={blogTemplateStyles.speechBubblesDiv}
                    style={{ flexDirection: `${direction}` }}
                  >
                    <div className={blogTemplateStyles.speechBubble}>
                      {documentToReactComponents(
                        node.data.target.fields.content["en-US"].content[i + 2],
                        processInfographicOptions
                      )}
                      <div
                        className={blogTemplateStyles.speechBubbleArrowRight}
                      ></div>
                    </div>
                    <div className={blogTemplateStyles.speechBubble}>
                      {documentToReactComponents(
                        node.data.target.fields.content["en-US"].content[i + 3],
                        processInfographicOptions
                      )}
                      <div
                        className={blogTemplateStyles.speechBubbleArrowLeft}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div
                  className={blogTemplateStyles.arrow}
                  style={{
                    gridColumn: `3 / 4`,
                    gridRow: `${j + 1} / ${j + 2}`,
                    backgroundImage: `url(${Arrow_Right})`,
                  }}
                ></div>
                {/* Icon and Opportunity */}
                <div
                  style={{
                    gridColumn: `4 / 5`,
                    gridRow: `${j + 1} / ${j + 2}`,
                    margin: "auto 0 auto 0",
                  }}
                >
                  {" "}
                  {documentToReactComponents(
                    node.data.target.fields.content["en-US"].content[i + 4],
                    processInfographicOptions
                  )}
                  {documentToReactComponents(
                    node.data.target.fields.content["en-US"].content[i + 5],
                    processInfographicOptions
                  )}
                </div>
              </React.Fragment>
            )
            if (direction === "column") {
              direction = "column-reverse"
            } else if (direction === "column-reverse") {
              direction = "column"
            }
            i += 7
          }

          return (
            <React.Fragment>
              <div className={blogTemplateStyles.painPointGrid}>
                {content.map(content => (
                  <React.Fragment key={content}>{content}</React.Fragment>
                ))}
              </div>
            </React.Fragment>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "problemStatement"
        )
          //FIX
          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "50%" }}>
                <h3 className="mb-2">
                  <strong>Problem Statement</strong>
                </h3>
                <p>
                  We have observed that the ServiceOntario online renewal flows
                  are <strong>not meeting user needs,</strong> which is causing
                  low completion rates, negative user feedback, inclusion
                  concerns, and low uptake on digital services.
                </p>
                <p>
                  How might we design a{" "}
                  <strong>one-window digital renewal transaction flow</strong>{" "}
                  that promotes usability and inclusion by reducing time on task
                  and increasing positive feedback on eligibility?
                </p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${PS_Blob})`,
                  height: "22rem",
                }}
                className="w-1/2 flex bg-no-repeat bg-cover items-center"
              >
                <img src={Problem_Statement} className="w-2/3 mx-auto" />
              </div>
            </div>
          )
        else if (node.data.target.sys.contentType.sys.id === "oldToNew") {
          num_of_indexes = `${node.data.target.fields.content["en-US"].content.length}`
          let user_quotes = []
          let improvements = []
          hr_count = 0
          hr_locations = []
          let oldDimensions_query = []
          let newDimensions_query = []

          for (i = 0; i < num_of_indexes; i++) {
            if (
              node.data.target.fields.content["en-US"].content[i].nodeType ===
              "hr"
            ) {
              hr_count++
              hr_locations.push(i)
            }
          }

          let title = documentToHtmlString(
            node.data.target.fields.content["en-US"].content[0],
            processInfographicOptions
          )

          add_hr ? (add_hr = false) : (add_hr = true)

          for (
            i = 0;
            i < node.data.target.fields.oldDimensions["en-US"].content.length;
            i++
          ) {
            oldDimensions_query.push(
              node.data.target.fields.oldDimensions["en-US"].content[i]
                .content[0].value
            )
          }

          for (
            i = 0;
            i < node.data.target.fields.newDimensions["en-US"].content.length;
            i++
          ) {
            newDimensions_query.push(
              node.data.target.fields.newDimensions["en-US"].content[i]
                .content[0].value
            )
          }

          for (i = 2; i < hr_locations[0]; i++) {
            user_quotes.push(
              documentToHtmlString(
                node.data.target.fields.content["en-US"].content[i],
                processInfographicOptions
              )
            )
          }

          for (i = hr_locations[0] + 1; i < num_of_indexes - 2; i++) {
            improvements.push(
              documentToHtmlString(
                node.data.target.fields.content["en-US"].content[i],
                processInfographicOptions
              )
            )
          }

          let url1 =
            node.data.target.fields.content["en-US"].content[1].data.target
              .fields.file["en-US"].url

          let url2 =
            node.data.target.fields.content["en-US"].content[num_of_indexes - 2]
              .data.target.fields.file["en-US"].url

          let mockup_width2 =
            node.data.target.fields.content["en-US"].content[num_of_indexes - 2]
              .data.target.fields.file["en-US"].details.image.width

          let mockup_height2 =
            node.data.target.fields.content["en-US"].content[num_of_indexes - 2]
              .data.target.fields.file["en-US"].details.image.height

          let landscape_mockup2 = false
          let mockup2_width_class = "w-1/4"
          let quotes_width_class = "w-1/5"

          if (mockup_width2 > mockup_height2) {
            landscape_mockup2 = true
          }

          if (landscape_mockup2 === true) {
            mockup2_width_class = "w-5/12"
            quotes_width_class = "w-1/6"
          }

          iteration_num++

          return (
            <React.Fragment>
              <div className="mb-4 overflow-visible">
                <div className="flex items-center mb-3">
                  <div
                    className="rounded-full w-12 h-12 flex flex-col items-center text-center justify-center mr-2"
                    style={{ backgroundColor: primary_colour }}
                  >
                    <span
                      className={
                        "my-auto text-white text-2xl " +
                        blogTemplateStyles.lessonNumber
                      }
                    >
                      0{iteration_num}
                    </span>
                  </div>
                  <h3 className="mb-0">{title}</h3>
                </div>

                <div className="flex overflow-visible">
                  <div className="w-1/4 px-1 overflow-visible">
                    <ProgressiveImage
                      preview={`${url1}?w=800&fm=webp&q=1`}
                      src={`${url1}?w=800&fm=webp&q=80`}
                      render={(src, style) => (
                        <img
                          src={src}
                          style={style}
                          // alt={`${alt}`}
                          className="my-auto"
                        />
                      )}
                    />
                  </div>
                  <div
                    className={`${quotes_width_class} flex flex-col relative`}
                  >
                    {user_quotes.map((value, index) => {
                      var oldDimensions_array = oldDimensions_query[
                        index
                      ].split(",")
                      let top_quote = (oldDimensions_array[0] / 551) * 100
                      let top_line = (oldDimensions_array[1] / 551) * 100
                      let width = (oldDimensions_array[2] / 331.5) * 100

                      return (
                        <React.Fragment className="relative">
                          <div
                            className={blogTemplateStyles.leftLine}
                            style={{
                              top: `${top_line}%`,
                              left: `${width + 5 - 2 * width}%`,
                              width: `${width}%`,
                              borderColor: "#E6B3AE",
                              borderBottomWidth: "2px",
                            }}
                          />
                          <div
                            className="p-3 rounded-lg absolute text-white"
                            style={{
                              backgroundColor: "#E6B3AE",
                              top: `${top_quote}%`,
                            }}
                            key={index}
                          >
                            <p
                              className={
                                blogTemplateStyles.annotation + " mb-0"
                              }
                              dangerouslySetInnerHTML={{ __html: value }}
                            />
                          </div>
                        </React.Fragment>
                      )
                    })}
                  </div>
                  <img src={Arrow_Right} className="w-20 pl-3 pr-2" />
                  <div className="flex w-1/5 flex-col relative justify-between">
                    {improvements.map((value, index) => {
                      var newDimensions_array = newDimensions_query[
                        index
                      ].split(",")
                      let top_quote = (newDimensions_array[0] / 551) * 100
                      let top_line = (newDimensions_array[1] / 551) * 100
                      let width = (newDimensions_array[2] / 331.5) * 100

                      return (
                        <React.Fragment className="relative">
                          <div
                            className={blogTemplateStyles.rightLine + " z-20"}
                            style={{
                              top: `${top_line}%`,
                              right: `${width + 5 - 2 * width}%`,
                              width: `${width}%`,
                              borderColor: primary_colour,
                              borderBottomWidth: "2px",
                            }}
                          />
                          <div
                            className="p-3 rounded-lg absolute text-white"
                            style={{
                              backgroundColor: primary_colour,
                              top: `${top_quote}%`,
                            }}
                            key={index}
                          >
                            <p
                              className={
                                blogTemplateStyles.annotation + " mb-0"
                              }
                              dangerouslySetInnerHTML={{ __html: value }}
                            />
                          </div>
                        </React.Fragment>
                      )
                    })}
                  </div>
                  <ProgressiveImage
                    preview={`${url2}?w=800&fm=webp&q=1`}
                    src={`${url2}?w=800&fm=webp&q=80`}
                    render={(src, style) => (
                      <img
                        src={src}
                        style={style}
                        className={`${mockup2_width_class} px-1 object-contain`}
                        // alt={`${alt}`}
                      />
                    )}
                  />
                </div>
              </div>
              {add_hr ? <hr /> : null}
            </React.Fragment>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "verticalProcess"
        ) {
          num_of_indexes = `${node.data.target.fields.content["en-US"].content.length}`
          hr_count = 0
          hr_locations = [-1]
          let num_of_sections = []

          for (i = 0; i < num_of_indexes; i++) {
            if (
              node.data.target.fields.content["en-US"].content[i].nodeType ===
              "hr"
            ) {
              hr_count++
              num_of_sections.push(i)
              hr_locations.push(i)
            }
          }

          return (
            <div className={blogTemplateStyles.vpDiv}>
              {num_of_sections.map((value, index) => {
                url =
                  node.data.target.fields.content["en-US"].content[
                    hr_locations[index] + 1
                  ].data.target.fields.file["en-US"].url

                let render_arrow = true
                if (index === num_of_sections.length - 1) {
                  render_arrow = false
                }

                return (
                  <div
                    className={
                      "flex mb-6 items-center even:flex-row-reverse even:text-right relative "
                    }
                  >
                    {render_arrow ? (
                      <img
                        src={Grey_VP_Arrow}
                        className={
                          "w-16 absolute z-10 " + blogTemplateStyles.vp_arrow
                        }
                        // style={{ right: "50%", left: "auto", top: "54%" }}
                      />
                    ) : null}
                    <div className="w-2/3">
                      <ProgressiveImage
                        preview={`${url}?w=800&fm=webp&q=1`}
                        src={`${url}?w=800&fm=webp&q=100`}
                        render={(src, style) => (
                          <img
                            src={src}
                            style={style}
                            className="w-full"
                            // alt={`${alt}`}
                          />
                        )}
                      />
                    </div>
                    <div className="mx-3"></div>
                    <div className="w-1/3">
                      <h3 className={`w-3/4`}>
                        {documentToHtmlString(
                          node.data.target.fields.content["en-US"].content[
                            hr_locations[index] + 2
                          ],
                          processInfographicOptions
                        )}
                      </h3>
                      <p>
                        {documentToHtmlString(
                          node.data.target.fields.content["en-US"].content[
                            hr_locations[index] + 3
                          ],
                          processInfographicOptions
                        )}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "compactImageGrid"
        ) {
          let num_of_images = `${node.data.target.fields.images["en-US"].length}`
          let image_urls = []
          for (i = 0; i < num_of_images; i++) {
            image_urls.push(
              node.data.target.fields.images["en-US"][i].fields.file["en-US"]
                .url
            )
          }
          return (
            <div className="flex justify-between mx-4 mb-6">
              {image_urls.map((value, index) => {
                return (
                  <ProgressiveImage
                    preview={`${value}?w=800&fm=webp&q=1`}
                    src={`${value}?w=800&fm=webp&q=100`}
                    render={(src, style) => (
                      <img
                        src={src}
                        style={style}
                        className="w-1/2 pr-2 last:pr-0 object-cover h-64"
                        // alt={`${alt}`}
                      />
                    )}
                  />
                )
              })}
            </div>
          )
        } else if (
          node.data.target.sys.contentType.sys.id === "halfLargeImageHalfPoints"
        ) {
          num_of_indexes = `${node.data.target.fields.points["en-US"].content.length}`
          hr_count = 0
          hr_locations = [-1]
          let num_of_sections = []
          let section_content = ["", "", ""]
          let image_urls = []
          let large_image_url = `${node.data.target.fields.largeImage["en-US"].fields.file["en-US"].url}`
          let j = 0

          for (i = 0; i < num_of_indexes - 1; i++) {
            console.log(`${i}`)
            if (
              node.data.target.fields.points["en-US"].content[i].nodeType ===
              "hr"
            ) {
              hr_count++
              num_of_sections.push(i)
              hr_locations.push(i)
              j++
              console.log("HR")
            } else if (
              node.data.target.fields.points["en-US"].content[i].nodeType ===
              "embedded-asset-block"
            ) {
              image_urls.push(
                `${node.data.target.fields.points["en-US"].content[i].data.target.fields.file["en-US"].url}`
              )
            } else {
              section_content[j] += documentToHtmlString(
                node.data.target.fields.points["en-US"].content[i],
                processInfographicOptions
              )
            }
          }

          console.log(image_urls)

          return (
            <div className="flex items-center mb-4">
              <div className="w-1/2 pr-2">
                <ProgressiveImage
                  preview={`${large_image_url}?w=800&fm=webp&q=1`}
                  src={`${large_image_url}?w=800&fm=webp&q=100`}
                  render={(src, style) => (
                    <img
                      src={src}
                      style={style}
                      // alt={`${alt}`}
                    />
                  )}
                />
              </div>
              <div className="w-1/2 flex flex-col pl-2">
                {section_content.map((value, index) => {
                  console.log(`${image_urls[index]}`)
                  return (
                    <div className="flex flex-row pb-4 last:pb-0 items-center">
                      <ProgressiveImage
                        preview={`${image_urls[index]}?w=800&fm=webp&q=1`}
                        src={`${image_urls[index]}?w=800&fm=webp&q=100`}
                        render={(src, style) => (
                          <img
                            src={src}
                            style={style}
                            className="w-1/4 pr-4 h-auto object-contain"
                          />
                        )}
                      />
                      <p className="mb-0">{value}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
        // else if (node.data.target.sys.contentType.sys.id === "slider") {
        //   let Before =
        //     node.data.target.fields.images["en-US"][0].fields.file["en-US"].url
        //   let After =
        //     node.data.target.fields.images["en-US"][1].fields.file["en-US"].url
        //   return (
        //     <img-comparison-slider>
        //       <img slot="before" src={Before} />
        //       <img slot="after" src={After} />
        //     </img-comparison-slider>
        //   )
        // }
        else if (node.data.target.sys.contentType.sys.id === "lesson") {
          lesson_num++
          let title = documentToHtmlString(
            node.data.target.fields.content["en-US"].content[0],
            options
          )
          let description = documentToHtmlString(
            node.data.target.fields.content["en-US"].content[1],
            options
          )
          return (
            <div className="flex flex-col text-center pb-4">
              <div
                className="rounded-full w-20 h-20 flex flex-col items-center text-center justify-center mx-auto mb-2"
                style={{ backgroundColor: primary_colour }}
              >
                <span
                  className={
                    "my-auto text-white text-5xl " +
                    blogTemplateStyles.lessonNumber
                  }
                >
                  0{lesson_num}
                </span>
              </div>
              <h3
                className="whitespace-no-wrap"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="w-3/4 mx-auto"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              {lesson_num !== 3 ? <hr className="mt-4" /> : null}
            </div>
          )
        }
      },
      [INLINES.HYPERLINK]: node => {
        return (
          <a
            href={node.data.uri}
            target={`${
              node.data.uri.startsWith(website_url) ? "_self" : "_blank"
            }`}
            rel={`${
              node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
            }`}
          >
            {node.content[0].value}
          </a>
        )
      },
      [BLOCKS.QUOTE]: (node, children) => {
        return (
          <div className={blogTemplateStyles.quoteDiv}>
            {" "}
            <div class={blogTemplateStyles.mbStyle2}>
              <blockquote>{children}</blockquote>
            </div>
          </div>
        )
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return (
          <React.Fragment>
            <h1>{children}</h1>
          </React.Fragment>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <React.Fragment>
            <br />
            <br />
            <h2>{children}</h2>
            <hr />
          </React.Fragment>
        )
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <React.Fragment>
            <br />
            <h3>{children}</h3>
          </React.Fragment>
        )
      },
    },
  }

  add_hr = false

  return (
    <div className={blogTemplateStyles.postLayout}>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className={blogTemplateStyles.post}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </div>
  )
}

export default Blog
