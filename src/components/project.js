import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "aos/dist/aos.css"

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
              <li
                className={projectStyles.post}
                data-aos="fade-up"
                data-aos-offset="275"
                data-aos-once="false"
              >
                <Link
                  to={`/${edge.node.slug}`}
                  style={{
                    backgroundImage: `url(${blob1})`,
                  }}
                >
                  <img
                    src={edge.node.thumbnail.file.url}
                    alt={edge.node.thumbnail.title}
                    style={{ float: "right", width: "50%", height: "auto" }}
                  />
                  <div style={{ padding: "18vh 50% 18vh 0" }}>
                    <h2>{edge.node.title}</h2>
                    <h4>
                      <b>{edge.node.projectType}</b> • {edge.node.category}
                    </h4>
                    <p>{edge.node.description}</p>
                  </div>
                </Link>
              </li>
            )
          } else {
            num++
            return (
              <li
                className={projectStyles.post}
                style={{ textAlign: "right" }}
                data-aos="fade-up"
                data-aos-offset="275"
                data-aos-once="false"
              >
                <Link
                  to={`/${edge.node.slug}`}
                  style={{
                    backgroundImage: `url(${blob2})`,
                  }}
                >
                  <img
                    src={edge.node.thumbnail.file.url}
                    alt={edge.node.thumbnail.title}
                    style={{ float: "left", width: "50%", height: "auto" }}
                  />
                  <div style={{ padding: "18vh 0 18vh 50%" }}>
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
              </li>
            )
          }
        })}
      </ol>
    </div>
  )
}

export default ProjectPage
