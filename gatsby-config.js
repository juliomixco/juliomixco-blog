module.exports = {
  // repor name for github pages or when site is not published at a root domain
  // pathPrefix: "/juliomixco-blog",
  siteMetadata: {
    title: `Julio Mixco - Blog | WIP 🚧🏗🦺🛠`,
    description: `🎉 Welcome to my Blog 👋.  My name is Julio Mixco I'm a Software Engineering Professional with 5+ years of experience in web development I have worked as both backend and frontend developer with technologies like TypeScript, Javascript, C#, Angular, React, NodeJS and .Net `,
    author: `@JULIOMIXCO`,
    twitterTag: "@JMixcoG",
    twitterImage: "@JMixcoG",
    keywords: [
      "julio mixco",
      "juliomixco",
      "jmixco",
      "jmixcog",
      "developer",
      "angular",
      "typescript",
      "julio mixco developer",
      "fontend developer",
      "julio mixco angular",
      "julio mixco typescript",
      "julio mixco frontend",
      "fullstack",
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julio Mixco - Blog`,
        short_name: `JMixco - Blog`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {},
          },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {},
          // },
        ],
      },
    },
  ],
}
