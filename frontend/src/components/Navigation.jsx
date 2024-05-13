import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar, faUtensils, faHouseChimney, faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

import AuthService from "../services/auth.service";

const Navigation = ({userName, userSurname, userEmail}) => {
    
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
                    {userName} {userSurname}
                    <p>{userEmail}</p>
                </div>
            </ul>
        </nav>
  )
}

Navigation.propTypes = {
  userName: PropTypes.string,
  userSurname: PropTypes.string,
  userEmail: PropTypes.string
};

Navigation.defaultProps = {
  userName: 'Dawid',
  userSurname: 'Kubacki',
  userEmail: 'dawid.kubacki@gmail.com'
};

export default Navigation
