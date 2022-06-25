import React from 'react'
import "./Middle.css"

function Middle(props) {
  return (
    <div className='ProfessionalBox'>
      <p>{props.title}</p>
      <h1 className='DollarSign'>$<span className='ProfessionalCost'>{props.toggle ? props.monthly : props.annual}</span></h1>
      <hr className='Line'/>
      <p>{props.storage}</p>
      <hr className='Line'/>
      <p>{props.users}</p>
      <hr className='Line'/>
      <p>{props.send}</p>
      <hr className='Line'/>
      <button className='ButtonCenter'>LEARN MORE</button>
    </div>
  )
}

export default Middle