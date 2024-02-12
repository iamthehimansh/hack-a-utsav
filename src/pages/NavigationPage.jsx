import React, { Component } from 'react'
import Day from '../comp/Day'

export default class NavigationPage extends Component {
  render() {
    return (
      <div style={{
        height:"100%",
        width:"100%",
      }}>
        <Day/>
      </div>
    )
  }
}
