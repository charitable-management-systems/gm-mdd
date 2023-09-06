import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const notOpen = () => alert('The application deadline has passed, please check back in January 2023');

const Apply = () => (
  <div class="background-gm-blue">
    <div class="info-segment-content">
      <h1>Application Process</h1>
      <p>{/*<a href="https://apply.gmmddscholarship.com/application/login">Begin your application!</a>*/}<a onClick={notOpen}>Begin your application!</a></p><p>As part of the online application you will be required to upload a 500 – 750 word personal statement addressing the following:</p>
      <ul>
        <li>Your interest and motivation to pursue a career in the automotive retail and/or automotive service sector.</li>
        <li>Why you should be considered for scholarship support.</li>
        <li>Any other information that may be of importance to the selection committee in their review of your application.</li>
      </ul>
      <p>To complete your application, you must then:</p>
      <ul>
        <li>Provide a letter of recommendation from one of the following: a past/current employer, academic instructor/school official or community/civic leader. Your letter of recommendation must be signed and on official letterhead.</li>
        <li>Mail - or have your school mail - an official transcript from your most recent educational institution. If this does not include one full year of grades, please also provide a transcript from your previous institution(s). We accept electronic transcripts from services like Credentials Solutions or Parchment which should be e-mailed to info@gmmddscholarship.com</li>
        <li>Send a copy of your Student Aid Report (SAR) including your Expected Family Contribution (EFC) from the information you provided on you Free Application for Federal Student Aid (FAFSA).</li>
      </ul>
      <p><a href="#Contact">Contact information</a></p>
    </div>
  </div>
);

Apply.propTypes = {};
Apply.defaultProps = {};

export default Apply;
