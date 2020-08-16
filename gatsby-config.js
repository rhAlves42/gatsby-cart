module.exports = {
  siteMetadata: {
    title: `Cart Flow Test`,
    description: `Learning about how carts flows work on e-commerce.`,
    author: `@rhAlves42`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#E61E14',
          'link-color': '#E61E14',
          'success-color': '#128934',
          'warning-color': '#faad14',
          'error-color': '#c143a8',
          'font-size-base': '14px',
          'heading-color': '#414141',
          'text-color': '#414141',
          'text-color-secondary': '#5c7a92',
          'disabled-color': '#c1c7d0',
          'border-radius-base': '4px',
          'border-color-base': '#929292',
          'box-shadow-base': '2px -2px 6px 0 rgba(0, 0, 0, 0.12)',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
