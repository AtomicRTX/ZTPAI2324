import React from 'react';
import { Link } from 'react-router-dom';
import '../css/welcomeBut.css';

const WelcomeBut = () => {
  return (
    <div>
        <div className="motto">Your Culinary Journey Begins Here: Reserve, Savor, Repeat!</div>
        <div className="welcome-container">
            <Link to="/loginPage" className='loginLink'>
                <button className="In">Sign in</button>
            </Link>
            <div className="wRegister">
                <p>You don't have an account ?</p>
            </div>
            <Link to="/registerPage" className='registerLink'>
                <button className="Up">Sign up</button>
            </Link>
        </div>
    </div>
  )
}

export default WelcomeBut;