import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MeetupsList from "../components/MeetupsList"

const IndexPage = ({ data }) => {
  const { meetups } = data

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <MeetupsList meetups={meetups.list} />
      <Link to="/meetups/">See all meetups</Link>
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  {
    meetups: meetupsJson {
      list {
        name
        url
      }
    }
  }
`
