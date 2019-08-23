import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <p>Hello FrontEnd Masters</p>
    <Link to='/about'>Learn about me &rarr; </Link>
  </Layout>
)

export default IndexPage
