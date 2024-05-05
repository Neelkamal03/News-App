import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps={
     country:"us",
     pageSize:8,
     category:"general",
  }

   PropTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string,
  }
  capitalizefirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    //console.log("inside constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      disabledNext: false
    }
    document.title=`${this.capitalizefirstLetter(this.props.category)} - NewsApp`;
  }
  async Update()
  {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c324e218514f452aa1df7d876ced901d&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();//Return a promise
    //console.log(parsedData);
    this.props.setProgress(30);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    //console.log("inside component did mount")
    // console.log(this.props.category)
    // console.log(this.props.pageSize)
    await this.Update();
  }
  handleOnNext = async () => {
    // console.log("Next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c324e218514f452aa1df7d876ced901d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();//Return a promise

    //   this.setState({
    //     articles: parsedData.articles,
    //     loading: false,
    //     page: this.state.page + 1
    //   });
    // }
    // else {
    //   this.setState({
    //     disabledNext: true
    //   })
    // }
    await this.setState({
      page:this.state.page+1,
     })
     await this.Update();
  }
  handleonPrev = async () => {
    //console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c324e218514f452aa1df7d876ced901d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true
    // })
    // this.setState({
    //   disabledNext: false
    // })
    // let data = await fetch(url);
    // let parsedData = await data.json();//Return a promise
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   loading: false,
    //   articles: parsedData.articles
    // })
    await this.setState({
      page:this.state.page-1,
     })
     await this.Update();
  }

  fetchMoreData = async () => {
    
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c324e218514f452aa1df7d876ced901d&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();//Return a promise
    //console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
    
  };


  
  render() {
    return (
      <div className="container my-4">
        {/* {!this.state.loading && */(<h2 className="text-center" style={{margin:'35px 0px', fontFamily: 'Bebas Neue', fontWeight:'bold' }}>NewsApp - Top Headlines from {this.capitalizefirstLetter(this.props.category)}</h2>)}
        {/* {this.state.loading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Spinner style={{ width: '100px', height: '100px' }} />
        </div>} */}

        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles !== this.totalResults}
          loader={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Spinner style={{ width: '100px', height: '100px' }} />
        </div>}
        >

        <div className="row">
          {/*!this.state.loading &&*/ this.state.articles && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 50) : ""}
                description={element.description ? element.description.slice(0, 80) : ""}
                newsUrl={element.url}
                imageUrl={element.urlToImage}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          })}
        </div>
        </InfiniteScroll>

        {/* {!this.state.loading && (<div className=" d-flex justify-content-between my-4">
          <button type="button" className="btn btn-secondary" disabled={this.state.page <= 1} onClick={this.handleonPrev}>&larr; Previous</button>
          <button type="button" className="btn btn-secondary" disabled={this.state.disabledNext} onClick={this.handleOnNext}>Next &rarr;</button>
        </div>)} */}
      </div>
    )
  }
}

