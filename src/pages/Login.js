import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../component/pagescss/register.css'



const Login = () => {
  const navigate = useNavigate()
  const navigatorHandler = () => {
        navigate(`/register`)
    }
  return (
    <div id="form">
      <form action="">
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

        <p className="form-text">
          We assure You that all your details are save.
          <span className="link" onClick={navigatorHandler}>Sign Up Now</span>
        </p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
