import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
export default class App extends Component {
  name = "Neel";


  render() {
    return (
      <>
        <Navbar/>
        <News pageSize={5}/>
      </>
    )
  }
}

