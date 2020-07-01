import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/blog-layout"
import SkillGrid from "../components/skill-grid"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <div className="flex-center margin-bottom-32">
      <h1>
        <span role="img" aria-label="tada">
          🎉
        </span>{" "}
        Welcome to my Blog{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </h1>
    </div>
    <div className="flex-center margin-bottom-32">
      <div className="profile-border ">
        <Img
          className="profile-picture border-gradient border-gradient-purple"
          // imgStyle={{height:80,width:80}}
          fluid={data.profileImage.childImageSharp.fluid}
        />
      </div>
    </div>
    <p>
      My name is Julio Mixco I'm a Software Engineering Professional with 5+
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
    profileImage: file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
