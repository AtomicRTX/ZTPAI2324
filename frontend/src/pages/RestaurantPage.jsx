import React from 'react'
import Navigation from '../components/Navigation'
import '../css/pages.css';
import RestaurantPanel from '../components/RestaurantPanel';

const RestaurantPage = () => {
  return (
    <div className='desktop'>
      <Navigation />
      <RestaurantPanel/>
    </div>
  )
}

export default RestaurantPage
