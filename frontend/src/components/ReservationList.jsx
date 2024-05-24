import React from 'react'
import Reservation from './Reservation';

const ReservationList = ({reservations}) => {
  return (
    <div>
        {reservations.map((reservation) => (<Reservation reservation={reservation}/>))}
    </div>
  )
}

export default ReservationList 
