import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super();
    //console.log("inside constructor from news component");
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    //console.log("inside component did mount")
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c324e218514f452aa1df7d876ced901d";
    let data = await fetch(url);
    let parsedData = await data.json();//Return a promise
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles
    });
  }

  render() {
    return (
      <div className="container my-4">
        <h2>NewsApp- Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 50) : ""}
                description={element.description ? element.description.slice(0, 80) : ""}
                newsUrl={element.url}
                imageUrl={element.urlToImage}
              />
            </div>
          })}
        </div>
      </div>
    )
  }
}

