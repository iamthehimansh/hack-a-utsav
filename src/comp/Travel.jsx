import React from 'react'
import './Travel.css'
export default function Travel({opp,bg="https://picsum.photos/200/400",i,text="Goa",tasks=[{name:"Buy a lemon",lat:0,long:0},{name:"Enjoy beach",lat:0,long:0},{name:"Buy a jhumka",lat:0,long:0}]}) {

    const ele=React.useRef(0)
    const parent=React.useRef(0)
  return (
    <div className={`travel-block ${opp?"opp":""}`}>
      <div className='travel-img' style={{
        backgroundImage:`url("${bg}?i=${i}")`
      }}>
        
        <div ref={parent} className='travel-text'>
          <div ref={ele} style={{
            height:"30%"
          }}>

          {text}
          </div>
          </div>
        
      </div>
      <div className='travel-task'>
        {
          tasks.map((e,i)=>{
            return <div key={i} className="task">{e.name}</div>
          })
        }
       
      </div>
    </div>
  )
}
