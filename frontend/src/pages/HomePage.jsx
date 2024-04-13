import React from 'react'
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import '../css/homePage.css';
import Categories from '../components/Categories';
import Restaurant from '../components/Restaurant';

const HomePage = () => {
  return (
    <div className="desktop">
       <Navigation />
       <main>
          <SearchBar />
          <p className="categories_name">Categories</p>
          <Categories />
          <p className="categories_name">Top rated restaurants</p>
          <Restaurant />
       </main>
    </div>
  )
}

export default HomePage
