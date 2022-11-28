import React from 'react'
import { IoSend } from "react-icons/io5"
import "./neew.css"

const NewLetter = () => {
  return (
      <div className='new-sect'>
          <h1>Catch up with us.</h1>
          <p>Discover more with just an email....</p>
          <div className='new-message'>
              <input type="text" className='send-inp'/>
              <IoSend size={30} className="Arrow_icon"/>
          </div>
    </div>
  )
}

export default NewLetter