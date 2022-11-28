import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../component/pagescss/register.css'

const Register = () => {
  const navigate = useNavigate()
  const navigatorHandler = () => {
    navigate('/login')
  }
  return (
    <div id="form">
      <form action="">
        <div>
          <label htmlFor="">Full Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="">Comfirm Password</label>
          <input type="password" />
        </div>
        <p className='form-text'>
          We assure You that all your details are save. Already have have an
          account<span onClick={navigatorHandler} className="link"> Sign up instead</span>
        </p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Register
