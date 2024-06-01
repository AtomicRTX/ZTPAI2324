import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/reservation.css';

import RestaurantService from '../services/restaurant.service';
import ReservationService from '../services/reservation.service';

const Reservation = ({reservation}) => {

    const [restaurant, setRestaurant] = useState({});
    const [isCancelled, setIsCancelled] = useState(false);
    const [isCancelable, setIsCancelable] = useState(true);

    useEffect(() => {
        RestaurantService.getRestaurant(reservation.restaurant_id)
            .then(data => setRestaurant(data))
            .catch(error => console.error('Error:', error));

            const reservationTime = new Date(`${reservation.date}T${reservation.hour}`);
            const currentTime = new Date();
            const timeDifference = (reservationTime - currentTime) / (1000 * 60);
    
            if (timeDifference <= 60) {
                setIsCancelable(false);
            }
    }, [reservation.restaurant_id]);

    const handleCancelReservation = () => {
        ReservationService.cancelReservation(reservation.reserv_id).then(() => setIsCancelled(true));
    }

    if (isCancelled) {
        return null;
    }

    return (
        <Link>
            <div className="reservation">
                <img src={restaurant.res_logo} alt="Restaurant Logo" />
                <div className="info">
                    <div className="infoB">
                        <p className="n">{restaurant.res_name}</p>
                        <p className="d">Reservation date: {reservation.date} {reservation.hour}</p>
                        <p className="p">Number of people: {reservation.number_of_people }</p>
                    </div>
                    <button className="cancel-btn" onClick={handleCancelReservation} disabled={!isCancelable}>Cancel reservations </button>
                </div>
            </div>
        </Link>
  )
}

export default Reservation;
