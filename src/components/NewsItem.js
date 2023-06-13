// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
   
 

  render() {
    let {title,description,imageUrl,authorName,newsUrl,PDate}=this.props
    return (
      <div>

<div className="card"  style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://digimarkdevelopers.com/static/media/our-company1.633282f7.png"} className="card-img-top "  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>

    <h6><strong>By: {authorName}</strong></h6>
    <p><strong>{PDate}</strong></p>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>



      </div>
    )
  }
}

export default NewsItem