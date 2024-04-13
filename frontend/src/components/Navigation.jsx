import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar, faUtensils, faHouseChimney, faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({userName, userSurname, userEmail}) => {
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
                    <Link to="/logout" className="button">
                        <FontAwesomeIcon className="fa-icon" icon={faArrowRightFromBracket} />
                        Sign out
                    </Link>
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
