import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import Head from "../components/head"

import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

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
                <Zoom>
                  <img alt={alt} src={url} />
                </Zoom>
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
                src={url}
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
                <Zoom>
                  <img alt={alt} src={url} />
                </Zoom>
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
          return (
            <React.Fragment>
              <iframe
                title={`${node.data.target.fields.title["en-US"]}`}
                width="100%"
                height="500"
                src={`${"https://miro.com/app/embed/" +
                  node.data.target.fields.src["en-US"] +
                  "=/?autoplay=yep"}`}
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
    <Layout>
      <div className={blogTemplateStyles.postLayout}>
        <Head title={props.data.contentfulBlogPost.title} />
        <div className={blogTemplateStyles.post}>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
