import React, { Component } from 'react'
import "./HomePage.css"
export default class HomePage extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className='container'>

        <div className='atom' >
            Plan a trip
            <br></br>
            <button onClick={()=>{
              this.props.setPage("nav")
            }} className='now'>Now</button>
        </div>






      </div>
    )
  }
}
