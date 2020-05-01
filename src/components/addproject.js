import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ProgressiveImage from "react-progressive-image-loading"

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

  let num = 1

  return (
    <div>
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
                >
                  <Link to={`/${edge.node.slug}`}>
                    <ProgressiveImage
                      preview={`${edge.node.thumbnail.file.url}?w=100&q=1`}
                      src={`${edge.node.thumbnail.file.url}?w=800&q=80`}
                      render={(src, style) => (
                        <img
                          src={src}
                          style={style}
                          alt={`${edge.node.thumbnail.title}`}
                        />
                      )}
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
                <div className={addProjectStyles.post}>
                  <h1
                    data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-once="false"
                  >
                    Additional Projects
                  </h1>
                  <li data-aos="fade-up" data-aos-offset="225">
                    <Link to={`/${edge.node.slug}`}>
                      <ProgressiveImage
                        preview={`${edge.node.thumbnail.file.url}?w=100&q=1`}
                        src={`${edge.node.thumbnail.file.url}?w=800&q=80`}
                        render={(src, style) => (
                          <img
                            src={src}
                            style={style}
                            alt={`${edge.node.thumbnail.title}`}
                          />
                        )}
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
                </div>
              )
            }
          })}
        </ol>
      </div>
    </div>
  )
}

export default AdditionalProjectPage
