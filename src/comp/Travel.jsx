import React from 'react'
import './Travel.css'
export default function Travel({opp,i}) {

    const ele=React.useRef(0)
    const parent=React.useRef(0)
  return (
    <div className={`travel-block ${opp?"opp":""}`}>
      <div className='travel-img' style={{
        backgroundImage:`url("https://picsum.photos/200/400?i=${i}")`
      }}>
        
        <div ref={parent} className='travel-text'>
          <div ref={ele} style={{
            height:"30%"
          }}>

          Goa
          </div>
          </div>
        
      </div>
      <div className='travel-task'>
       <div className="task">Buy a lemon</div>
       <div className="task">Enjoy beach</div>
       <div className="task">Buy a jhumka</div>
      </div>
    </div>
  )
}
