import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Loader from './components/Loader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {

  render() {
    
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News key="/" head="Top Headlines" category="general" country="in" />} />
        <Route exact path="/sport" element={<News key="sport" head="Top Sports Headlines" category="sports" country='in' />} />
        <Route exact path="/tech" element={<News key="tech" head="Technology News" category="technology" country='in' />} />
        <Route exact path="/busi" element={<News key="busi" head="Business News" category="business" country='in' />} />
        <Route exact path="/sci" element={<News key="sci" head="Science News" category="science" country='in' />} />
        </Routes>
        </Router>
      </div>
    )
  }
}
