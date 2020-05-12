module.exports = {
  // repor name for github pages or when site is not published at a root domain
  // pathPrefix: "/juliomixco-blog",
  siteMetadata: {
    siteUrl: "https://juliomixco.com",
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
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
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
        short_name: `Julio Mixco`,
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
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://juliomixco.com",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: ["300", "300i", "400", "400i", "600", "700"],
          },
        ],
      },
    },
  ],
}
