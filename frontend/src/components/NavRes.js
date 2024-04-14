import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleInfo, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../css/navRes.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavRes = ({ restaurant }) => {
    return (
        <main className='navResMain'>
            <header style={{ backgroundImage: `url(${restaurant.resImage})`, backgroundSize: 'cover' }}>
                <Link to="/homePage">
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                </Link>
            </header>
            <div className="panel_r">
                <nav>
                    <ul>
                        <li>
                            <Link to={`/restaurantPage/id=${restaurant.resId}`} className="button">
                                <FontAwesomeIcon icon={faCircleInfo} />
                                Info
                            </Link>
                        </li>
                        <li>
                            <Link to={`/restaurant_reservation/id=${restaurant.resId}`} className="button">
                                <FontAwesomeIcon icon={faCalendar} />
                                Reservation
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div class="restaurant-details">
                    Starbucks
                    TEST
                </div>
            </div>
        </main>
    );
};

NavRes.propTypes = {
    restaurant: PropTypes.shape({
      resId: PropTypes.number,
      resLogo: PropTypes.string,
      resName: PropTypes.string,
      resLocation: PropTypes.string,
      resLike: PropTypes.number,
    }),
  }
  
NavRes.defaultProps = {
    restaurant: {
      resId: 1,
      resImage: 'https://retailnet.pl/wp-content/uploads/2023/01/starbucks-lodz-piotrkowska-e1638260865151.jpg',
      resName: 'Starbucks',
      resLocation: 'Krakow',
      resLike: 5167,
    },
}

export default NavRes;