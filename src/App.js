import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = "15"
  ApiKey = process.env.REACT_APP_NEWS_API
  render() {

    return (
      <div>

        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<News key={"home"} ApiKey={this.ApiKey} pageSize={this.pageSize} country="US" category="general" />} />
            <Route path="/Technology" element={<News key={"technology"} ApiKey={this.ApiKey} pageSize={this.pageSize} country="US" category="technology" />} />
            <Route path="/business" element={<News key={"business"} ApiKey={this.ApiKey} pageSize={this.pageSize} country="US" category="business" />} />
            <Route path="/entertainment" element={<News key={"entertainment"} ApiKey={this.ApiKey} pageSize={this.pageSize} country="US" category="entertainment" />} />
            <Route path="/general" element={<News key={"general"} ApiKey={this.ApiKey} pageSize={this.pageSize} country="US" category="general" />} />
            <Route path="/health" element={<News key={"health"} ApiKey={this.ApiKey} pageSize={this.pageSize} country="US" category="health" />} />
            <Route path="/science" element={<News key={"science"} ApiKey={this.ApiKey} pageSize={this.pageSize} country="US" category="science" />} />
            <Route path="/sports" element={<News key={"sports"} ApiKey={this.ApiKey} pageSize={this.pageSize} country="US" category="sports" />} />

          </Routes>


        </BrowserRouter>

      </div>
    )

  }
}

