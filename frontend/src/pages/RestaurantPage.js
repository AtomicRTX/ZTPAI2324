import React from 'react'
import Navigation from '../components/Navigation'
import SearchBar from '../components/SearchBar';
import '../css/homePage.css';
import NavRes from '../components/NavRes';

const RestaurantPage = () => {
  return (
    <div className='desktop'>
      <Navigation />
      <NavRes/>
    </div>
  )
}

export default RestaurantPage
