import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ProgressiveImage from "react-progressive-image-loading"

import blob1 from "../images/blob1.png"
import blob2 from "../images/blob2.png"

import projectStyles from "./project.module.scss"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: rank, order: ASC }
        filter: { section: { eq: "Main" } }
      ) {
        edges {
          node {
            title
            slug
            rank
            thumbnail {
              title
              file {
                url
              }
            }
            projectType
            category
            description
          }
        }
      }
    }
  `)

  let num = 0

  return (
    <div className={projectStyles.projectSection}>
      <h1 data-aos="fade-up" data-aos-offset="275" data-aos-once="false">
        Portfolio
      </h1>
      <ol className={projectStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          if (num === 0) {
            num++
            return (
              <div
                className={projectStyles.post}
                data-aos="fade-up"
                data-aos-offset="275"
              >
                <Link
                  to={`/${edge.node.slug}`}
                  className={projectStyles.blob}
                  style={{
                    backgroundImage: `url(${blob1})`,
                  }}
                >
                  <div className={projectStyles.postColumn}>
                    <h2>{edge.node.title}</h2>
                    <h4>
                      <b>{edge.node.projectType}</b> • {edge.node.category}
                    </h4>
                    <p>{edge.node.description}</p>
                  </div>

                  <div className={projectStyles.postColumn}>
                    <ProgressiveImage
                      preview={`${edge.node.thumbnail.file.url}?w=800&q=1`}
                      src={`${edge.node.thumbnail.file.url}?w=800&q=80`}
                      render={(src, style) => (
                        <img
                          src={src}
                          style={{ float: "right" }}
                          alt={`${edge.node.thumbnail.title}`}
                        />
                      )}
                    />
                  </div>
                </Link>
              </div>
            )
          } else {
            num++
            return (
              <div
                className={projectStyles.post}
                data-aos="fade-up"
                data-aos-offset="275"
              >
                <Link
                  to={`/${edge.node.slug}`}
                  className={projectStyles.blob}
                  style={{
                    backgroundImage: `url(${blob2})`,
                  }}
                >
                  <div className={projectStyles.postColumn}>
                    <ProgressiveImage
                      preview={`${edge.node.thumbnail.file.url}?w=800&q=1`}
                      src={`${edge.node.thumbnail.file.url}?w=800&q=80`}
                      render={(src, style) => (
                        <img
                          src={src}
                          style={style}
                          alt={`${edge.node.thumbnail.title}`}
                        />
                      )}
                    />
                  </div>
                  <div className={projectStyles.postColumn}>
                    <h2>{edge.node.title}</h2>
                    <h4>
                      <b>{edge.node.projectType}</b> • {edge.node.category}
                    </h4>
                    <p>{edge.node.description}</p>
                  </div>
                </Link>
              </div>
            )
          }
        })}
      </ol>
    </div>
  )
}

export default ProjectPage
