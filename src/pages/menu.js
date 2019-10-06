import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Meny" />
    <h1>Meny</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MenuPage
