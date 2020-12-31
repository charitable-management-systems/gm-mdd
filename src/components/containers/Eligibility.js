import { Link } from "gatsby"
import { CheckCircle } from 'react-feather'
import PropTypes from "prop-types"
import React from "react"

const Eligibility = () => (
  <div className="background-white flex">
    <div className="info-segment-content vertical-split">
      <h1>Eligibility</h1>
      <p>Minority students of African American, Asian, Hispanic or Native American descent pursing academic
      degrees in automotive retail management and/or technical certification(s) in automotive technology are
      encouraged to apply. A limited number of scholarships will be awarded for the 2021-22 academic year.
      </p>
      <p>The application deadline is April 1, 2021.</p>
    </div>
    <div className="vertical-split">
      <div className="info-block">
        <div className="icon"><CheckCircle color="#1773c3" size={48}/></div>
        <p>To be considered for a GM MDD scholarship, a student must meet all the following criteria:</p>
        <ul>
          <li>Must be a minority student of African American, Asian, Hispanic or Native American descent
  with a high school diploma or GED (as of fall 2021).</li>
          <li>Must be able to verify enrollment at the beginning of the 2021 fall term.</li>
          <li>Must be a citizen of the United States or have the ability to accept permanent employment in the
  US without the need for visa sponsorship now or in the future.</li>
          <li>Must be enrolled in an undergraduate, graduate or non-traditional educational institution that
  offers formal programs or certifications in automotive retail and/or automotive service.</li>
        </ul>
      </div>
    </div>
  </div>
);

Eligibility.propTypes = {};
Eligibility.defaultProps = {};

export default Eligibility;

