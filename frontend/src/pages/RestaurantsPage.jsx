import React, { useState, useEffect } from 'react';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';

import '../css/pages.css';
import '../css/restaurantsPage.css';

import RestaurantService from '../services/restaurant.service';

const RestaurantsPage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
      RestaurantService.getRestaurants()
      .then(data => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

    const searchFilter = (inputText) => {
      if (inputText === '') {
        setFilteredRestaurants(restaurants);
      }
      else{
        const filtered = restaurants.filter(restaurant => restaurant.res_name.toLowerCase().includes(inputText));
        console.log(filtered);
        setFilteredRestaurants(filtered);
      }
    }


  return (
    <div className="desktop">
        <Navigation />
       <main className='ma'>
          <SearchBar onSearch={searchFilter}/>
          <p className="categories_name">All restaurants</p>
          <div className='ra'>
            <RestaurantList restaurants={filteredRestaurants} />
          </div>
       </main>
    </div>
  )
}

export default RestaurantsPage
