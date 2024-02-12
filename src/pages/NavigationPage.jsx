import React, { Component } from 'react'
import Day from '../comp/Day'

export default class NavigationPage extends Component {

  constructor(props){
    super(props);
    this.state={
      day:[
        [
         [] //tour 1
        ]// day 1
      ]
    }
  }



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
