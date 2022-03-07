import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
        <div className="text-center" role="status">
            <img src='Spinner-5.gif'/>
        </div>
    )
  }
}
