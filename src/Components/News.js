import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
      <p>This is news component</p>
      <p>This is news component</p>
      <p>This is news component</p>
      <NewsItem/>
      </div>
    )
  }
}
