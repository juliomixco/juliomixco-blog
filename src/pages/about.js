import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/blog-layout"
import SkillGrid from "../components/skill-grid"

export default ({ data }) => (
  <Layout>
    <h1>About Me</h1>
    <p>
      <span role="img" aria-label="tada">
        🎉
      </span>{" "}
      Welcome to my Blog{" "}
      <span role="img" aria-label="waving hand">
        👋
      </span>
      . My name is Julio Mixco I'm a Software Engineering Professional with 5+
      years of experience in web development I have experience as both backend
      and frontend developer.
    </p>
    <p>I hope you enjoy this content 🎈</p>

    <p>
      <a href="mailto:contact@juliomixco.com?subject=Business Oportunity">
        contact@juliomixco.com
      </a>
    </p>
    <h2 className="margin-y-32">Technologies I've worked with</h2>
    <SkillGrid></SkillGrid>
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
