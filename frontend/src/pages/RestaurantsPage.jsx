import React from 'react'
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import '../css/homePage.css';
import Restaurant from '../components/Restaurant';

const RestaurantsPage = () => {
  return (
    <div className="desktop">
        <Navigation />
       <main>
          <SearchBar />
          <p className="categories_name">All restaurants</p>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
          <Restaurant/>
       </main>
    </div>
  )
}

export default RestaurantsPage
