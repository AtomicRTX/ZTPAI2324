import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import '../css/pages.css';
import '../css/reservationPage.css';
import ReservationList from '../components/ReservationList';

import authHeader from '../services/auth-header';

const ReservationPage = () => {

  const [reservations, setReservations] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/v1/reservation/actual', { headers: authHeader() })
        .then(response => {
          setReservations(response.data);
        })
        .catch(error => {
          console.error('Error fetching reservations:', error);
        });
    }, []);
    console.log(reservations);
  return (
    <div className="desktop">
        <Navigation />
       <main className='ma'>
          <SearchBar />
          <p className="categories_name">My reservations</p>
          <div className='re'>
            <ReservationList reservations={reservations}/>
          </div>
       </main>
    </div>
  )
}

export default ReservationPage
