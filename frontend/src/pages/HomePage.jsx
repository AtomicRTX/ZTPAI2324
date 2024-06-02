import React, { useState, useEffect } from 'react';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantList from '../components/RestaurantList';

import '../css/pages.css';

import restaurantService from '../services/restaurant.service';

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    restaurantService.getBestRestaurants()
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
      setFilteredRestaurants(filtered);
    }
  }

  return (
    <div className="desktop">
       <Navigation />
       <main className=''>
          <SearchBar onSearch={searchFilter}/>
          <p className="categories_name">Categories</p>
          <Categories />
          <p className="categories_name">Top rated restaurants</p>
          <RestaurantList restaurants={filteredRestaurants} />
       </main>
    </div>
  )
}

export default HomePage
