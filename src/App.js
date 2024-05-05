import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

  pageSize=6
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#0431c7'
            progress={this.state.progress}
            height={3}
           onLoaderFinished={() => this.setProgress(this.state.progress)}
          />
          <Routes>
            <Route exact path="/" key='general' element={<News setProgress={this.setProgress} pageSize={this.pageSize} category="general" />}></Route>
            <Route exact path="/business" key='business' element={<News setProgress={this.setProgress} pageSize={this.pageSize} category="business" />}></Route>
            <Route exact path="/sports" key='sports' element={<News setProgress={this.setProgress} pageSize={this.pageSize} category='sports' />}></Route>
            <Route exact path="/health" key='health' element={<News setProgress={this.setProgress} pageSize={this.pageSize} category="health" />}></Route>
            <Route exact path="/entertainment" key='entertainment' element={<News setProgress={this.setProgress} pageSize={this.pageSize} category="entertainment" />}></Route>
            <Route exact path="/science" key='science' element={<News setProgress={this.setProgress} pageSize={this.pageSize} category="science" />}></Route>
          </Routes>
        </BrowserRouter>


      </div>
    )
  }
}

