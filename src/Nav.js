import React, { useEffect, useState } from 'react'
import "./Nav.css"
import netflixLogo from './images/netflix.png.png'
import netflixAvatar from './images/netflixAvatar.jpg'
import { useHistory } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false); //displaying transparent to black navbar 
  const history = useHistory();

  // Function to navigate to ProfileScreen
  const goToProfile = () => {
    history.push('/profile');
  };

  const transitionNavbar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar)
  },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
            <img className='nav_logo' src={netflixLogo} alt="" />

            <img className='nav_avatar' src={netflixAvatar} alt=""  onClick={goToProfile} />
        </div>
    </div>
  )
}

export default Nav
