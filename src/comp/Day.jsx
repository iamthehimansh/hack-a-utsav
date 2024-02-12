import React from 'react'
import './Day.css'
import Travel from './Travel'
export default function Day() {
  return (
    <div className='day-conainer'>
        <div style={{
            textAlign:"center",
            width:"100%",
        }}>

        <h1>Day 1</h1>
        <hr width="100%" />
        </div>
        <div className='travel-container'>

                {
                    Array(5).fill(0).map((item, index) => {
                        return (
                            <Travel i={index} opp={index%2==0}  key={index} />
                        )
                    })
                }

        </div>
    </div>
  )
}
