import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import Head from "../components/head"

import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import Gallery from "react-grid-gallery"

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
class Grid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: this.props.images,
    }
  }

  render() {
    return (
      <div
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          overflow: "auto",
        }}
      >
        <Gallery
          images={this.state.images}
          enableLightbox={true}
          enableImageSelection={false}
        />
      </div>
    )
  }
}

Grid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
}

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        var bool = true
        const words = node.data.target.fields.title["en-US"].split(" ")
        if (words[words.length - 1] === "GIF") {
          bool = true
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
        } else {
          bool = false
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
    </Layout>
  )
}

export default Blog
