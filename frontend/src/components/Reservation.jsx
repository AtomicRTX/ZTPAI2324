import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Reservation = ({reservation, userId, resId}) => {
  return (
    <Link to={`/reservations/${resId}`}>
      <div className="reservation">
        <img src={reservation.getResLogo()} alt="Restaurant Logo" />
        <div className="info">
          <div className="infoB">
            <p className="n">{reservation.getResName()}</p>
            <p className="d">Reservation date: {reservation.getDate().format('Y-m-d')} {reservation.getHour().format('H:i:s')}</p>
            <p className="p">Number of people: {reservation.getNumberPeople()}</p>
          </div>
          <button className="cancel-btn"
                  data-user-id={reservation.getUserId()}
                  data-res-id={reservation.getResId()}
                  data-date={reservation.getDate().format('Y-m-d')}
                  data-hour={reservation.getHour().format('H:i:s')}
                  data-number-people={reservation.getNumberPeople()}>Cancel reservations
          </button>
        </div>
      </div>
    </Link>
  )
}

Reservation.propTypes = {
  reservation: PropTypes.object.isRequired,
  userId: PropTypes.string,
  resId: PropTypes.string,
};

Reservation.defaultProps = {
  userId: '',
  resId: '',
};

export default Reservation;
