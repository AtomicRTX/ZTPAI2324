import React from 'react'
import { Link } from 'react-router-dom';
import '../css/restaurant.css';


const Restaurant = ({restaurant}) => {

  return (
      <Link to={`/restaurantPage/${restaurant.res_id}`}>
          <div className="restaurant" id={restaurant.res_id}>
            <img src={restaurant.res_logo} alt="RESTAURANT LOGO"/>
            <div className="info">
              <div className="infoB">
                <p className="n">{restaurant.res_name}</p>
                <p className="l">{restaurant.res_location}</p>
              </div>
            </div>
          </div>
        </Link>
  )
}

export default Restaurant
