import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to photo blog.</p>
    <p>Photos will be here.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
