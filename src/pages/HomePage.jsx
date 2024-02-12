import React, { Component } from 'react'
import "./HomePage.css"
export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state={
      activeTour:[]
    }
    this.fetchData=()=>{
      this.props.setHiddenloading(true)
      setTimeout(()=>{
        this.setState({...this.state,activeTour:[
          {
            name:"Goa Trip",
          },
          {
            name:"Patna Trip",
          },
          {
            name:"Bhagalpur Trip",
          },
        ]})
        this.props.setHiddenloading(false)
      },1000)

    }
  }
  
  render() {
    return (
      <div className='container'>

        {this.state.activeTour.length<=0 && <div className='atom' >
            Plan a trip
            <br></br>
            <button onClick={()=>{
              this.props.setPage("nav")
            }} className='now'>Now</button>
        </div>}

        {
          this.state.activeTour.length>0 && <h1>
            Your Active tours
          </h1>
        }
          {
            this.state.activeTour.map((e,i)=>{



              return <div className='trip' key={i}>
                  {e.name}
                </div>
            })
          }





      </div>
    )
  }
}
