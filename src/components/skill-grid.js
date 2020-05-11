import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SkillSquare = ({ logoUrl, name, containerClasses }) => {
  const extraClasses = containerClasses || []
  return (
    <div className={["skill-item", ...extraClasses].join(" ")}>
      <Img fluid={logoUrl} />
      <div className="skill-name">{name}</div>
    </div>
  )
}

const SkillGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
        edges {
          node {
            id
            name
            classes
            logoUrl {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  const skillList = data.allSkillsJson.edges.map(edge => edge.node)
  return (
    <div className="skill-grid">
      {skillList.map(skill => (
        <SkillSquare
          key={skill.id}
          name={skill.name}
          containerClasses={skill.classes}
          logoUrl={skill.logoUrl.childImageSharp.fluid}
        ></SkillSquare>
      ))}
    </div>
  )
}
export default SkillGrid
