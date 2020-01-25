import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./project.module.scss"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
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
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          if (num === 0) {
            num++
            return (
              <li className={blogStyles.post}>
                <Link to={`/${edge.node.slug}`} style={{ paddingRight: "60%" }}>
                  <h2>{edge.node.title}</h2>
                  <h4>
                    <b>{edge.node.projectType}</b> • {edge.node.category}
                  </h4>
                  <p>{edge.node.description}</p>
                </Link>
              </li>
            )
          } else {
            num++
            return (
              <li className={blogStyles.post} style={{ textAlign: "right" }}>
                <Link to={`/${edge.node.slug}`} style={{ paddingLeft: "60%" }}>
                  <h2>{edge.node.title}</h2>
                  <h4>
                    <b>{edge.node.projectType}</b> • {edge.node.category}
                  </h4>
                  <p>{edge.node.description}</p>
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
