import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/blog-layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      <span role="img" aria-label="tada">
        🎉
      </span>{" "}
      Welcome to my Blog{" "}
      <span role="img" aria-label="waving hand">
        👋
      </span>
      . My name is Julio Mixco I'm a Software Engineering Professional with 5+
      years of experience in web development I have worked as both backend and
      frontend developer with technologies like TypeScript, Javascript, C#,
      Angular, React, NodeJS and .Net.
    </p>
    <p>I hope you enjoy this content 🎈</p>

    <p>
      <a href="mailto:contact@juliomixco.com?subject=Business Oportunity">
        contact@juliomixco.com
      </a>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
