import React, { Component } from 'react'
import Post from './Post'
import Header from './Header'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Post />
      </div>
    )
  }
}

export default App
