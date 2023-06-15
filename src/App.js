import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";


export default class App extends Component {
  pageSize="30"
  render() {

    return (
      <div>

        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<News key={"home"} pageSize={this.pageSize} country="US" category="general" />} />
              <Route path="/Technology" element={<News key={"technology"} pageSize={this.pageSize} country="US" category="technology" />} />
              <Route path="/business" element={<News key={"business"} pageSize={this.pageSize} country="US" category="business" />} />
              <Route path="/entertainment" element={<News key={"entertainment"} pageSize={this.pageSize} country="US" category="entertainment" />} />
              <Route path="/general" element={<News key={"general"} pageSize={this.pageSize} country="US" category="general" />} />
              <Route path="/health" element={<News key={"health"} pageSize={this.pageSize} country="US" category="health" />} />
              <Route path="/science" element={<News key={"science"} pageSize={this.pageSize} country="US" category="science" />} />
              <Route path="/sports" element={<News key={"sports"} pageSize={this.pageSize} country="US" category="sports" />} />

            </Routes>
          </div>

        </BrowserRouter>

      </div>
    )

  }
}

