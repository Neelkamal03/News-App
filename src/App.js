import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
         <Navbar />
          <Routes>
            <Route exact path="/" key='general' element={<News category="general" />}></Route>
            <Route exact path="/business" key='business' element={<News category="business" />}></Route>
            <Route exact path="/sports" key='sports' element={<News category='sports' />}></Route>
            <Route exact path="/health" key='health' element={<News pageSize={5} category="health" />}></Route>
            <Route exact path="/entertainment" key='entertainment' element={<News pageSize={5} category="entertainment" />}></Route>
            <Route exact path="/science" key='science' element={<News pageSize={5} category="science" />}></Route>
          </Routes>
        </BrowserRouter>
        

      </div>
    )
  }
}

