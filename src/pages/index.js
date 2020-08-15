import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/containers/About"
import Apply from "../components/containers/Apply"
import Contact from "../components/containers/Contact"
import Donate from "../components/containers/Donate"
import Eligibility from "../components/containers/Eligibility"
import Selection from "../components/containers/Selection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a name="About"></a>
    <About />
    <a name="Eligibility"></a>
    <Eligibility />
    <a name="Apply"></a>
    <Apply />
    <a name="Selection"></a>
    <Selection />
    <a name="Donate"></a>
    <Donate />
    <a name="Contact"></a>
    <Contact />
  </Layout>
)

export default IndexPage
