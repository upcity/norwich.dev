import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MeetupsList from "../components/MeetupsList"

const MeetupsPage = ({ data }) => {
  const { meetups } = data

  return (
    <Layout>
      <SEO title="Meetups" />
      <h1>Meetups</h1>
      <p>Welcome to the meetups page</p>
      <MeetupsList meetups={meetups.list} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default MeetupsPage

export const meetupsQuery = graphql`
  {
    meetups: meetupsJson {
      list {
        name
        url
      }
    }
  }
`
