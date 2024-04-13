import React from 'react'
import './ProfileScreen.css'
import netflixLogo from '../images/netflix.png.png'
import netflixAvatar from '../images/netflixAvatar.jpg'
import { useHistory } from 'react-router-dom';
function ProfileScreen() {
    const history = useHistory();

    // going back to home page 
    const handleAvatarClick = () => {
    history.push('/home');
    }

    // going back to login page 
    const handleSignUpClick = () => {
        history.push('/');
    };

  return (
    <div className='profile_screen'>
        <div className="profile_nav">
              <img className='netflix_logo' src={netflixLogo} alt="" />

              <button className="sign_out" onClick={handleSignUpClick}>Sign Out</button>
        </div>

        <div className="prfileScreen_body">
            <p className='profileScreen_description'>Who's watching?</p>
            <div className="avatar_logos">
                <div className="avatar_logo" onClick={handleAvatarClick}>
                    <img className='avatars' src={netflixAvatar} alt="" />
                    <p>User 1</p>
                </div>
                <div className="avatar_logo" onClick={handleAvatarClick}>
                    <img className='avatars' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7th08ZadbJeY7J3X_2edDTdDpbzbilGuBgzJkKG9yBfpF7OW4zs9hqV9b0rvRK9EeHkk&usqp=CAU" alt="" />
                    <p>User 2</p>
                </div>
                <div className="avatar_logo" onClick={handleAvatarClick}>
                    <img className='avatars' src="https://i.pinimg.com/736x/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.jpg" alt="" />
                    <p>User 3</p>
                </div>
                <div className="avatar_logo" onClick={handleAvatarClick}>
                    <img className='avatars' src="https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg" alt="" />
                    <p>User 4</p>
                </div>
                <div className="avatar_logo" onClick={handleAvatarClick}>
                    <img className='avatars' src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="" />
                    <p>User 5</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
