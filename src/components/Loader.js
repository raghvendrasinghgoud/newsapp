import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
        <div className="container vertical-center" role="status">
            <img src='Spinner-5.gif'/>
        </div>
    )
  }
}
