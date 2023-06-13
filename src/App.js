import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {

  c="Abbas";

  render() {

    return (
      <div>
      <NavBar/>
      <div className="container"><News/></div>
      
      </div>
    )

  }
}

