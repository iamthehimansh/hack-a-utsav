import React, { useEffect } from 'react'
import './Day.css'
import Travel from './Travel'
export default function Day({day=1,tour=Array(5).fill(0)}) {
    
  return (
    <div className='day-conainer'>
        <div style={{
            textAlign:"center",
            width:"100%",
        }}>

        <h1>Day {day}</h1>
        <hr width="100%" />
        </div>
        <div className='travel-container'>

                {
                    tour.map((item, index) => {
                        return (
                            <Travel  i={index} opp={index%2==0}  key={index} />
                            // <Travel tasks={item.tasks} text={item.text} bg={item.bg}  i={index} opp={index%2==0}  key={index} />

                        )
                    })
                }

        </div>
    </div>
  )
}
