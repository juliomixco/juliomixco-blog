import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from "./header"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        className="page-content"
        css={css`
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        {children}
      </div>
    </>
  )
}
