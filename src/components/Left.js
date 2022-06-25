import React from 'react'
import "./Left.css"

function Left(props) {
  //console.log(props.toggle);

  return (
    <div className='BasicBox'>
      <p>{props.title}</p>
      <h1 className='DollarSignLeft'>$<span className='BasicCost'>{props.toggle ? props.monthly : props.annual}</span></h1>
      <hr className='LineDark'/>
      <p>{props.storage}</p>
      <hr className='LineDark'/>
      <p>{props.users}</p>
      <hr className='LineDark'/>
      <p>{props.send}</p>
      <hr className='LineDark'/>
      <button className='ButtonLeft'>LEARN MORE</button>
    </div>
  )
}

export default Left