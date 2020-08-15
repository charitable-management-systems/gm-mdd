/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import terms from "../pdf/terms_of_use.pdf"
import privacy from "../pdf/privacy_policy.pdf"

import Header from "./header"
import Hero from "./Hero"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero />
      <main>{children}</main>
      <footer style={{borderTop: "1px solid black", padding: "0.25rem", paddingLeft: "0.5rem"}}>
        <a href={privacy} target="_blank" style={{marginRight: "0.5rem"}}>Privacy Policy</a>
        <a href={terms} target="_blank">Terms of Use</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
