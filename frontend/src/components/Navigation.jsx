import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUtensils, faHouseChimney, faArrowRightFromBracket, faUser, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons'

import AuthService from "../services/auth.service";
import UserService from '../services/user.service';

const Navigation = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
      UserService.getUser()
        .then(data => setUser(data)
        )
        .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        UserService.isAdmin()
          .then(data => setAdmin(data)
          )
          .catch(error => console.error('Error:', error));
      }, []);

    const logOut = () =>{
        AuthService.logout();
    }
    
    return (
    <nav>
            <div className="logo">
                <img src="../../img/logo.svg" alt=''/>
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
                {admin && (
                    <li>
                        <Link to="/managePage" className="button">
                        <FontAwesomeIcon className="fa-icon" icon={faUsers} />
                            Users
                        </Link>
                    </li>
                )}
                {admin && (
                    <li>
                        <Link to="/addPage" className="button">
                        <FontAwesomeIcon className="fa-icon" icon={faPlus} />
                            Add restaurant
                        </Link>
                    </li>
                )}
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
