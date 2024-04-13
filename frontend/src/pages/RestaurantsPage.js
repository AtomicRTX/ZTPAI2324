import React from 'react'
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import '../css/homePage.css';

const RestaurantsPage = () => {
  return (
    <div className="desktop">
        <Navigation />
       <main>
          <SearchBar />
       </main>
    </div>
  )
}

export default RestaurantsPage
