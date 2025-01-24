import React from "react"

import Layout from "../components/layout"

const IndexPage = () => {
    const [loading, setLoading] = React.useState(true);
    return (
      <Layout noHero>
        <br/>
        
        {loading && <div style={{textAlign: "center"}}>Loading...</div>}
        <iframe 
            style={{marginTop: "64px"}}
            src="https://apply.gmmddscholarship.com/application/" 
            frameborder="0" 
            width="100%" 
            height="600px" 
            onLoad={() => setLoading(false)}
        ></iframe>
      </Layout>
    );
}

export default IndexPage
