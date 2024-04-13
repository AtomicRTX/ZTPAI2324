import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import '../css/restaurant.css';

const Restaurant = ({restaurant}) => {
  return (
      <Link to={`/restaurant_details/id=${restaurant.resId}`}>
          <div className="restaurant" id={restaurant.resId}>
            <img src={restaurant.resLogo} alt="RESTAURANT LOGO"/>
            <div className="info">
              <div className="infoB">
                <p className="n">{restaurant.resName}</p>
                <p className="l">{restaurant.resLocation}</p>
              </div>
              <div className="r">
                <FontAwesomeIcon  className="fa-icon" icon={faThumbsUp} /> {restaurant.resLike}
              </div>
            </div>
          </div>
        </Link>
  )
}

Restaurant.propTypes = {
    restaurant: PropTypes.shape({
      resId: PropTypes.number.isRequired,
      resLogo: PropTypes.string.isRequired,
      resName: PropTypes.string.isRequired,
      resLocation: PropTypes.string.isRequired,
      resLike: PropTypes.number.isRequired,
    }).isRequired,
  }
  
Restaurant.defaultProps = {
    restaurant: {
      resId: 1,
      resLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1024px-Starbucks_Corporation_Logo_2011.svg.png',
      resName: 'Starbucks',
      resLocation: 'Krakow',
      resLike: 5167,
    },
}

export default Restaurant
