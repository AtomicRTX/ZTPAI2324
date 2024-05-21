import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar, faUtensils, faHouseChimney, faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

import authHeader from '../services/auth-header';
import AuthService from "../services/auth.service";

const Navigation = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
      axios.get('http://localhost:8080/api/v1/user/current', { headers: authHeader() })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    }, []);


    const logOut = () =>{
        AuthService.logout();
    }
    
    return (
    <nav>
            <div className="logo">
                <img src="../../img/logo.svg"/>
                <p>ReservEat</p>
            </div>
            <ul>
                <li className='home'>
                    <Link to="/homePage" className="button">
                        <FontAwesomeIcon className="fa-icon" icon={faHouseChimney} />
                        Home
                    </Link>
                </li>
                <li className='restaurantn'>
                    <Link to="/restaurantPage" className="button">
                        <FontAwesomeIcon className="fa-icon" icon={faUtensils} />
                        Restaurants
                    </Link>
                </li>
                <li className='my_res'>
                    <Link to="/reservationPage" className="button">
                        <FontAwesomeIcon className="fa-icon" icon={faCalendar} />
                        My reservation
                    </Link>
                </li>
                <li className='notification'>
                    <Link to="/notificationPage" className="button">
                        <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                        Notification
                    </Link>
                </li>
                <li className='my_pr'>
                    <Link to="/profilePage" className="button">
                        <FontAwesomeIcon className="fa-icon" icon={faUser} />
                        My profile
                    </Link>
                </li>
                <li className='home'>
                    <a href="/" className="button" onClick={logOut}>
                        <FontAwesomeIcon className="fa-icon" icon={faArrowRightFromBracket} />
                        Sign out
                    </a>
                </li>
                <div className="userID">
                    {user.name} {user.surname}
                    <p>{user.email}</p>
                </div>
            </ul>
        </nav>
  )
}

export default Navigation
