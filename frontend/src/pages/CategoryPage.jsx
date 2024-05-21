import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import '../css/homePage.css';
import Restaurant from '../components/Restaurant';
import RestaurantList from '../components/RestaurantList';
import authHeader from '../services/auth-header';

import '../css/restaurantsPage.css';

const CategoryPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const { categoryName } = useParams();

    useEffect(() => {
      axios.get(`http://localhost:8080/api/v1/restaurant/category?category=${categoryName}`, { headers: authHeader() })
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
       <main className='ma'>
          <SearchBar />
          <p className="categories_name">Restaurants fit the criteria</p>
          <div className='ra'>
            <RestaurantList restaurants={restaurants} />
          </div>
       </main>
    </div>
  )
}

export default CategoryPage
