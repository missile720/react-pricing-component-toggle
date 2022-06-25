import React from 'react'
import "./Right.css"

function Right(props) {
  return (
    <div className='MasterBox'>
      <p>{props.title}</p>
      <h1 className='DollarSignRight'>$<span className='MasterCost'>{props.toggle ? props.monthly : props.annual}</span></h1>
      <hr className='LineDark'/>
      <p>{props.storage}</p>
      <hr className='LineDark'/>
      <p>{props.users}</p>
      <hr className='LineDark'/>
      <p>{props.send}</p>
      <hr className='LineDark'/>
      <button className='ButtonRight'>LEARN MORE</button>
    </div>
  )
}

export default Right