import React, { useState } from 'react'
import './LoginScreen.css'
import netflixLogo from "../images/netflix.png.png"
import SignupScreen from './SignupScreen'

function LoginScreen() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <img className='loginScreen_logo'
         src={netflixLogo} alt="" />

         <button className="loginScreen_button"
         onClick={ () => setSignIn(true) }
         >Sign In</button>


        <div className="loginScreen_gradient" />

         <div className="loginScreen_body">

          {signIn ? (
              <SignupScreen />
            ) : (
              <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere.Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="loginScreen_input">
          <form>
            <input type="email" placeholder='Enter email' required />

            <button className="loginScreen_getStarted"
            onClick={ () => setSignIn(true) }
            >GET STARTED<span className='getStarted_spChar'>&nbsp;  &#62;</span></button>
          </form>
         </div>
            </>
            )
          }
          
         </div>
      </div>
    </div>
  )
}

export default LoginScreen

