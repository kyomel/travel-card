import React from "react"

export default function Card(props) {
  return (
    <section>
      <div>
        <img src={props.feed.imageUrl} alt={props.feed.title} className="location-img" />
      </div>
      <div className="description">
        <div className="location">
          <h1><i class="fa-solid fa-location-dot"></i> {props.feed.location}</h1>
          <a href={props.feed.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.feed.title}</h2>
        <p className="dates">{props.feed.startDate} - {props.feed.endDate}</p>
        <p className="desc">{props.feed.description}</p>
      </div>
    </section>
  )
}