import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "aos/dist/aos.css"

import addProjectStyles from "./addproject.module.scss"

const AdditionalProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: rank, order: ASC }
        filter: { section: { eq: "Additional" } }
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
    <div>
      <h1 data-aos="fade-up" data-aos-offset="275" data-aos-once="false">
        Additional Projects
      </h1>
      <div>
        <ol className={addProjectStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            if (num % 2 === 0) {
              num++
              return (
                <li
                  className={addProjectStyles.post}
                  data-aos="fade-up"
                  data-aos-offset="225"
                  data-aos-once="false"
                >
                  <Link to={`/${edge.node.slug}`}>
                    <img
                      src={edge.node.thumbnail.file.url}
                      alt={edge.node.thumbnail.title}
                    />
                    <div className={addProjectStyles.content}>
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
                  className={addProjectStyles.post}
                  data-aos="fade-up"
                  data-aos-offset="225"
                  data-aos-once="false"
                  style={{ float: "right", marginTop: "-106vh" }}
                >
                  <Link to={`/${edge.node.slug}`}>
                    <img
                      src={edge.node.thumbnail.file.url}
                      alt={edge.node.thumbnail.title}
                    />
                    <div className={addProjectStyles.content}>
                      <h2>{edge.node.title}</h2>
                      <h4>
                        <b>{edge.node.projectType}</b> • {edge.node.category}
                      </h4>
                      <p>{edge.node.description}</p>
                    </div>
                  </Link>
                </li>
              )
            }
          })}
        </ol>
      </div>
    </div>
  )
}

export default AdditionalProjectPage
