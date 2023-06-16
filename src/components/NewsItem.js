// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, authorName, newsUrl, PDate, newsSource } = this.props
    return (
      <div>

        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
            {newsSource}</span>

          <img src={imageUrl ? imageUrl : "https://digimarkdevelopers.com/static/media/our-company1.633282f7.png"} className="card-img-top " alt={authorName ? authorName : "Mr. Unknown"} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6><strong>By: {authorName ? authorName : "Mr. Unknown"}</strong></h6>
            <p> <span className="badge text-bg-success">{new Date(PDate).toGMTString()}</span></p>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>



      </div>
    )
  }
}

export default NewsItem