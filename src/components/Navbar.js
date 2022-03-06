import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="news-anchor-webapp/logo.png" alt="..." height="46" />
  <Link className="navbar-brand" to="/">News Anchor</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sport">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/busi">Business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sci">Science</Link>
      </li>

    </ul>
  </div>
</nav>
      </div>
    )
  }
}
