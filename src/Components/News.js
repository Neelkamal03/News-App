import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export default class News extends Component {
  constructor() {
    super();
    //console.log("inside constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      disabledNext: false
    }
  }

  async componentDidMount() {
    //console.log("inside component did mount")
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c324e218514f452aa1df7d876ced901d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();//Return a promise
    //console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  handleOnNext = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c324e218514f452aa1df7d876ced901d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();//Return a promise
      
      this.setState({
        articles: parsedData.articles,
        loading:false,
        page: this.state.page + 1
      });
    }
    else {
      this.setState({
        disabledNext: true
      })
    }
  }
  handleonPrev = async () => {
    //console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c324e218514f452aa1df7d876ced901d&page=${this.state.page - 1}&pageSize=${this.props.page}`;
    this.setState({
      loading:true
    })
    this.setState({
      disabledNext: false
    })
    let data = await fetch(url);
    let parsedData = await data.json();//Return a promise
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      loading:false,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div  className="container my-4">
        <h1 className="text-center">NewsApp- Top Headlines</h1>
        {this.state.loading? <Spinner/>:null}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
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
        <div className=" d-flex justify-content-between my-4">
          <button type="button" className="btn btn-secondary" disabled={this.state.page <= 1} onClick={this.handleonPrev}>&larr; Previous</button>
          <button type="button" className="btn btn-secondary" disabled={this.state.disabledNext} onClick={this.handleOnNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

