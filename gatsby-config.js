require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Jayden Hsiao",
    author: "Jayden Hsiao",
    social: {
      email: `j3hsiao@edu.uwaterloo.ca`,
      github: `JaydenHsiao`,
      linkedin: `jthsiao57/`,
      instagram: `jthsiao57/`,
      dribbble: `jaydenhsiao`,
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["CONTENTFUL_SPACE_ID", "CONTENTFUL_ACCESS_TOKEN"],
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
    {
      resolve: `gatsby-plugin-compression-v2`,
      options: {
        asset: "[path].gz[query]",
        algorithm: "gzip",
      },
    },
  ],
}
