import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import Head from "../components/head"

import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
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

var images = []

const lightbox_options = {
  enablePanzoom: false,
  overlayColor: "rgb(25, 136, 124)",
  captionColor: "#a6cfa5",
  captionFontFamily: "Lato",
  captionFontSize: "18px",
  captionFontWeight: "300",
  captionFontStyle: "capitalize",
  buttonsBackgroundColor: "#1b5245",
  buttonsIconColor: "rgba(126, 172, 139, 0.8)",
  autoplaySpeed: 1500,
  transitionSpeed: 100,
}

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const words = node.data.target.fields.title["en-US"].split(" ")
        if (words[words.length - 1] === "GIF") {
          const alt = node.data.target.fields.description["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return (
            <div className={blogTemplateStyles.gifContainer}>
              <img alt={alt} src={url} className={blogTemplateStyles.gif} />
              <div className={blogTemplateStyles.captionContainer}>
                {" "}
                <p className={blogTemplateStyles.caption}>
                  {node.data.target.fields.description["en-US"]}
                </p>
              </div>
            </div>
          )
        } else if (
          words[words.length - 1] === "(Grid)" ||
          words[words.length - 2] === "(Grid)"
        ) {
          const alt = node.data.target.fields.description["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          images.push(
            <img
              alt={alt}
              src={url}
              className={blogTemplateStyles.photography}
            />
          )
          if (words[words.length - 1] === "(Last)") {
            return (
              <SimpleReactLightbox>
                {" "}
                <SRLWrapper {...lightbox_options}>{images}</SRLWrapper>
              </SimpleReactLightbox>
            )
          }
        } else {
          const alt = node.data.target.fields.description["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return (
            <div className={blogTemplateStyles.imageContainer}>
              <img alt={alt} src={url} />
              <div className={blogTemplateStyles.captionContainer}>
                {" "}
                <p className={blogTemplateStyles.caption}>
                  {node.data.target.fields.description["en-US"]}
                </p>
              </div>
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
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className={blogTemplateStyles.post}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
      <div id="grid"></div>
    </Layout>
  )
}

export default Blog
