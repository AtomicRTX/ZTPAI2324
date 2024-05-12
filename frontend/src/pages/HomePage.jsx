import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantList from '../components/RestaurantList';
import authHeader from '../services/auth-header';

import '../css/homePage.css';

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/v1/restaurant/best', { headers: authHeader() })
        .then(response => {
          setRestaurants(response.data);
        })
        .catch(error => {
          console.error('Error fetching restaurants:', error);
        });
    }, []);


  return (
    <div className="desktop">
       <Navigation />
       <main>
          <SearchBar />
          <p className="categories_name">Categories</p>
          <Categories />
          <p className="categories_name">Top rated restaurants</p>
          <RestaurantList restaurants={restaurants} />
       </main>
    </div>
  )
}

export default HomePage
