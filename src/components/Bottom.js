import React from 'react'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'
import "./Bottom.css"

const data = [
  {
    id: 1,
    title: "Basic",
    annual: "199.99",
    monthly: "19.99",
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    send: "Send up to 3 GB"
  },
  {
    id: 2,
    title: "Professional",
    annual: "249.99",
    monthly: "24.99",
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10 GB"
  },
  {
    id: 3,
    title: "Master",
    annual: "399.99",
    monthly: "39.99",
    storage: "2 TB Storage",
    users: "10 Users Allowed",
    send: "Send up to 20 GB"
  },
]

function Bottom(props) {
  return (
    <div className='Row2'>
      <Left 
      title = {data[0].title} 
      annual = {data[0].annual}
      monthly = {data[0].monthly}
      storage = {data[0].storage}
      users = {data[0].users}
      send = {data[0].send}
      toggle = {props.toggle}
      />
      <Middle
      title = {data[1].title} 
      annual = {data[1].annual}
      monthly = {data[1].monthly}
      storage = {data[1].storage}
      users = {data[1].users}
      send = {data[1].send}
      toggle = {props.toggle}
      />
      <Right
      title = {data[2].title} 
      annual = {data[2].annual}
      monthly = {data[2].monthly}
      storage = {data[2].storage}
      users = {data[2].users}
      send = {data[2].send}
      toggle = {props.toggle}
      />
    </div>
  )
}

export default Bottom