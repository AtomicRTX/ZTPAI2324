import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/restaurant.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import RestaurantService from "../services/restaurant.service";

const Restaurant = ({restaurant}) => {

  const [likes, setLikes] = useState(restaurant.res_like);
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    e.preventDefault();
    RestaurantService.likeRestaurant(restaurant.res_id)
    .then(data => setLikes(data.res_like))
    .catch(error => console.error('Error:', error));
    setLiked(!liked);
    window.location.reload();
  }
  return (
    <Link to={`/restaurantPage/${restaurant.res_id}`}>
      <div className="restaurant" id={restaurant.res_id}>
        <img src={restaurant.res_logo} alt="RESTAURANT LOGO"/>
        <div className="info">
          <div className="infoB">
            <p className="n">{restaurant.res_name}</p>
            <p className="l">{restaurant.res_location}</p>
          </div>
          <div className="r">
            <FontAwesomeIcon className="fa-icon" icon={faThumbsUp} onClick={handleLike}/> {likes}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Restaurant
