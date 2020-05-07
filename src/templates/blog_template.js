import React from "react"

import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import Head from "../components/head"

import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import Dog from "../images/dog.svg"
import Example from "../images/example.svg"
import Pain_Point from "../images/pain_point_ex.png"
import Opportunity from "../images/opportunity_icon_ex.svg"
import X from "../images/x.svg"
import Check from "../images/check.svg"
import Arrow_Right from "../images/arrow_right.svg"

import ProgressiveImage from "react-progressive-image-loading"

import blogTemplateStyles from "./blog_template.module.scss"

const website_url = "https://jaydenhsiao.me"

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
  const processInfographicOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const alt = node.data.target.fields.description["en-US"]
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
                  alt={`${alt}`}
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
                  alt={`${alt}`}
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
            <React.Fragment>
              <iframe
                title={`${node.data.target.fields.title["en-US"]}`}
                width="100%"
                height="800"
                src={`${node.data.target.fields.src["en-US"]}`}
                allowfullscreen
              ></iframe>
            </React.Fragment>
          )
        } else if (node.data.target.sys.contentType.sys.id === "grid") {
          var num_of_indexes = `${node.data.target.fields.text["en-US"].content.length}`
          var renders = []
          var text = ""
          var header = true
          var temp_text
          var last_paragraph = false

          console.log(`${num_of_indexes}`)

          for (var i = 0; i <= num_of_indexes - 2; i++) {
            if (
              node.data.target.fields.text["en-US"].content[i + 1].nodeType ===
              "hr"
            ) {
              last_paragraph = true
            }
            if (
              node.data.target.fields.text["en-US"].content[i].nodeType === "hr"
            ) {
              console.log("hr")
              renders.push(
                <div>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              )
              last_paragraph = false
              header = true
              temp_text = ""
              text = ""
            } else if (
              node.data.target.fields.text["en-US"].content[i].nodeType ===
                "paragraph" ||
              node.data.target.fields.text["en-US"].content[i].nodeType ===
                "unordered-list"
            ) {
              console.log("paragraph")
              temp_text = `${documentToHtmlString(
                node.data.target.fields.text["en-US"].content[i],
                options
              )}`
              if (temp_text.startsWith("<li>")) {
                temp_text = "<ul>" + temp_text + "</ul>"
              } else if (header === true) {
                temp_text = `<h3>${temp_text}</h3>`
                header = false
              } else if (last_paragraph === false) {
                temp_text += "</br></br>"
              }
            } else if (
              node.data.target.fields.text["en-US"].content[i].nodeType ===
              "embedded-asset-block"
            ) {
              console.log("image")
              var url = `${node.data.target.fields.text["en-US"].content[i].data.target.fields.file["en-US"].url}`
              temp_text = `<img src=${url} />`
            }
            text += `${temp_text}`
          }
          console.log("return")
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

          for (i = 0; i < hr_locations.length; i++) {
            console.log(hr_locations[i])
          }

          var index = 0

          for (i = 0; i < hr_count; i++) {
            console.log(`${i} loop begins`)
            for (index; index < num_of_indexes; index++) {
              console.log(`${index}`)
              if (
                node.data.target.fields.content["en-US"].content[index]
                  .nodeType === "hr"
              ) {
                index++
                console.log("break!")
                header = true
                break
              } else if (header === true) {
                console.log("Image added!")
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
                console.log("Content added!")
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
            console.log(`${i} loop ends`)
          }
          console.log("Loop finished!")
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

          for (i = 0; i < hr_locations.length; i++) {
            console.log(hr_locations[i])
          }

          index = 0

          for (i = 0; i < hr_count; i++) {
            for (index; index < num_of_indexes; index++) {
              console.log(`${index}`)
              if (
                node.data.target.fields.content["en-US"].content[index]
                  .nodeType === "hr"
              ) {
                index++
                console.log("break!")
                header = true
                break
              } else if (header === true) {
                console.log("Header added!")
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
                console.log("Content added!")
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
              console.log("Arrow added!")
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
          console.log("Loop finished!")
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
              console.log("---- hr found")
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
            console.log(`Direction before was ${direction}`)
            if (direction === "column") {
              direction = "column-reverse"
            } else if (direction === "column-reverse") {
              direction = "column"
            }
            console.log(`Direction after was ${direction}`)
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
