import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
    <div style={{ marginBottom: "22vh" }}>
      <h1
        style={{ marginTop: "22vh" }}
        data-aos="fade-up"
        data-aos-offset="275"
        data-aos-once="false"
      >
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
                  <div
                    className={projectStyles.projectMockup}
                    style={{ float: "right" }}
                  >
                    <img
                      src={edge.node.thumbnail.file.url}
                      alt={edge.node.thumbnail.title}
                    />
                  </div>

                  <div style={{ padding: "18% 50% 18% 0" }}>
                    <h2>{edge.node.title}</h2>
                    <h4>
                      <b>{edge.node.projectType}</b> • {edge.node.category}
                    </h4>
                    <p>{edge.node.description}</p>
                  </div>
                </Link>
              </div>
            )
          } else {
            num++
            return (
              <div
                className={projectStyles.post}
                style={{ textAlign: "right" }}
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
                  <img
                    src={edge.node.thumbnail.file.url}
                    alt={edge.node.thumbnail.title}
                    className={projectStyles.projectMockup}
                    style={{ float: "left", maxWidth: "60%" }}
                  />
                  <div style={{ padding: "18% 0 18% 50%" }}>
                    {" "}
                    <h2>{edge.node.title}</h2>
                    <h4>
                      <b>{edge.node.projectType}</b> • {edge.node.category}
                    </h4>
                    <div style={{ paddingLeft: "20%" }}>
                      <p>{edge.node.description}</p>
                    </div>
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
