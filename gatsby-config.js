/* eslint-disable global-require */
module.exports = {
  siteMetadata: {
    title: `Gatsby Third-party GraphQL Source Example`,
    description: `Gatsby example using data from a Third-party GraphQL API.`,
    author: `@david_buck`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphqlZero`,
        fieldName: `graphqlZero`,
        url: `https://graphqlzero.almansi.me/api`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-graphql-source-example`,
        short_name: `example`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
