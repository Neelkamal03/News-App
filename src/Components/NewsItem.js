import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "25rem" }}>
          <img src={imageUrl ? imageUrl : "https://media.istockphoto.com/id/1313303632/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=S0dTZp37XKVcCAnoguMnRatvv4Nkp2cjmA5aYOOrJs8="} className="card-img-top" style={{ height: "250px", objectFit: "cover" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'97%', zIndex:'1'}}>
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More Details</a>
          </div>
        </div>
      </div>
    )
  }
}
