import React from "react"

const MeetupsList = ({ meetups, numberToShow = 5 }) => (
  <div style={{ display: `flex`, margin: `4rem 0` }}>
    {meetups.slice(0, numberToShow).map(meetup => (
      <div style={{ marginRight: `2rem` }}>
        {console.log(meetup.url)}
        <h2>{meetup.name}</h2>
        <a href={meetup.url}>Go to meetup</a>
      </div>
    ))}
  </div>
)

export default MeetupsList
