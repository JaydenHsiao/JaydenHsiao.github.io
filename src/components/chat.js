import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import chatStyles from "./chat.module.scss"

const Chat = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            email
          }
        }
      }
    }
  `)

  return (
    <div>
      <a
        href={`mailto: ${data.site.siteMetadata.social.email}`}
        rel="noopener noreferrer"
      >
        <div className={chatStyles.btn}>
          <svg width="221" height="68">
            <rect
              x="5"
              y="5"
              rx="32"
              fill="none"
              stroke="#4895EA"
              width="210"
              height="56"
            ></rect>
          </svg>
          <span>let's have a chat</span>
        </div>
      </a>
    </div>
  )
}

export default Chat
