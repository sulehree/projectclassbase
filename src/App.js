import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


export default class App extends Component {

  render() {

    return (
      <div>

        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<News key={"home"} pageSize="20" country="US" category="general" />} />
              <Route path="/Technology" element={<News key={"technology"} pageSize="20" country="US" category="technology" />} />
              <Route path="/business" element={<News key={"business"} pageSize="20" country="US" category="business" />} />
              <Route path="/entertainment" element={<News key={"entertainment"} pageSize="20" country="US" category="entertainment" />} />
              <Route path="/general" element={<News key={"general"} pageSize="20" country="US" category="general" />} />
              <Route path="/health" element={<News key={"health"} pageSize="20" country="US" category="health" />} />
              <Route path="/science" element={<News key={"science"} pageSize="20" country="US" category="science" />} />
              <Route path="/sports" element={<News key={"sports"} pageSize="20" country="US" category="sports" />} />

            </Routes>
          </div>

        </BrowserRouter>

      </div>
    )

  }
}

