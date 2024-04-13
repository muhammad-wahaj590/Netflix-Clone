import React from 'react'
import { useHistory } from 'react-router-dom';
import './SignupScreen.css'

function SignupScreen() {

  const history = useHistory();
  const handleSignup = (e) => {
    e.preventDefault();
    history.push('/home');
  };

  return (
    <div className='signup_screen'>
      <form onSubmit={handleSignup}>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email' required />

        <input type="password" placeholder='Password' required/>

        <button type='submit'>Sign In</button>
        <p className='signupScreen_or'>OR</p>

        <button className='signupScreen_grayBtn'>Use a Sign-In Code</button>
        <p className='signupScreen_forgot'>Forgot password?</p>
        <div className="remember_me">
        <input type="checkbox" />
        <p>Remember me</p>
        </div>
        <h4>
         <span className='signupScreen_gray'> New to Netflix? </span> <span className='signup_link' onClick={() => history.push('/')} >Sign Up now.</span></h4>
      </form>
    </div>
  )

}

export default SignupScreen 




  