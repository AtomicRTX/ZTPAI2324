import React, { useState, useEffect } from 'react';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import ReservationList from '../components/ReservationList';

import '../css/pages.css';
import '../css/reservationPage.css';

import RestaurantService from '../services/restaurant.service';
import ReservationService from '../services/reservation.service';

const ReservationPage = () => {

  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);

    useEffect(() => {
      ReservationService.getActualReservations()
      .then(reservationsData => {
        const restaurantPromises = reservationsData.map(reservation => 
          RestaurantService.getRestaurant(reservation.restaurant_id)
            .then(restaurantData => ({
              ...reservation,
              res_name: restaurantData.res_name
            }))
            .catch(error => {
              console.error(`Error fetching restaurant ${reservation.restaurant_id}:`, error);
              return { ...reservation, res_name: 'Unknown' };
            })
        );

        Promise.all(restaurantPromises).then(updatedReservations => {
          setReservations(updatedReservations);
          setFilteredReservations(updatedReservations);
        });
      })
        .catch(error => {
          console.error('Error fetching reservations:', error);
        });
    }, []);

    const searchFilter = (inputText) => {
      if (inputText === '') {
        setFilteredReservations(reservations);
        console.log(reservations);
      } else {
         const filtered = reservations.filter(reservation => reservation.res_name.toLowerCase().includes(inputText));
         setFilteredReservations(filtered);
      }
    };

  return (
    <div className="desktop">
        <Navigation />
       <main className='ma'>
          <SearchBar onSearch={searchFilter}/>
          <p className="categories_name">My reservations</p>
          <div className='re'>
            <ReservationList reservations={filteredReservations}/>
          </div>
       </main>
    </div>
  )
}

export default ReservationPage
