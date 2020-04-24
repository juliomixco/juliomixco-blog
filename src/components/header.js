import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ display: `inline-block`, margin: 0, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: `var(--header-color)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ul
      className="header-nav"
      style={{
        listStyle: `none`,
        display: "flex",
        flexWrap: "wrap",
        margin: 0,
      }}
    >
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
