import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2>NewsApp- Top Headlines</h2>
        <div className="row">
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDescription" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png" />
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDescription" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDescription" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDescription" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png"/>
        </div>
        </div>
      </div>
    )
  }
}

