import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {

      state={
        progress:0,
        apiKey:process.env.REACT_APP_NEWS_API
    }

  setProgress=(value)=>{
    this.setState({progress:value});
  }
  render() {
    
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={2}
      />
        <Routes>
        <Route exact path="/index.html" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="/index.html" head="Top Headlines" category="general" country="in" />} />
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="/" head="Top Headlines" category="general" country="in" />} />
        <Route exact path="/sport" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="sport" head="Top Sports Headlines" category="sports" country='in' />} />
        <Route exact path="/tech" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="tech" head="Technology News" category="technology" country='in' />} />
        <Route exact path="/busi" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="busi" head="Business News" category="business" country='in' />} />
        <Route exact path="/sci" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key="sci" head="Science News" category="science" country='in' />} />
        </Routes>
        </Router>
      </div>
    )
  }
}
