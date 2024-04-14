import React from 'react'
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import '../css/homePage.css';
import Reservation from '../components/Reservation';

const ReservationPage = () => {
  return (
    <div className="desktop">
        <Navigation />
       <main>
          <SearchBar />
          <p className="categories_name">My reservations</p>
          <Reservation/>
       </main>
    </div>
  )
}

export default ReservationPage
