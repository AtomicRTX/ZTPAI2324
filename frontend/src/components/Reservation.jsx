import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/reservation.css';

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
  reservation: PropTypes.shape({
    getResLogo: PropTypes.func,
    getResName: PropTypes.func,
    getDate: PropTypes.func,
    getHour: PropTypes.func,
    getNumberPeople: PropTypes.func,
    getUserId: PropTypes.func,
    getResId: PropTypes.func,
  }).isRequired,
};

Reservation.defaultProps = {
  reservation: {
    getResLogo: () => 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1024px-Starbucks_Corporation_Logo_2011.svg.png',
    getResName: () => 'Starbucks',
    getDate: () => ({ format: () => '' }),
    getHour: () => ({ format: () => '' }),
    getNumberPeople: () => '5',
    getUserId: () => '1',
    getResId: () => '1',
  },
};

export default Reservation;
