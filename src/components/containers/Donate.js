import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Donate = () => {
	const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
  <div className="background-gm-blue">
    <div className="info-segment-content">
      <h1>Donate</h1>
      <p>Will you help support a student in beginning their career in automotive retail?<br/>
        Complete and submit the <a href={data.allFile.edges[0].node.publicURL}>pledge form</a><br/>
      Thank you for your support!</p>

      <p>100% of your donation will go directly to scholarship support.<br/>
      Credit card payments will show as payable to the CMS Foundation, Inc. a 501(c)3 tax exempt organization. <br/>
      Your donation is tax deductible to the fullest extent of the law.</p>
    </div>
  </div>
  )
}

Donate.propTypes = {};
Donate.defaultProps = {};

export default Donate;
