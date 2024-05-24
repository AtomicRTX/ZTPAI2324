import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/restaurantPanel.css';

import RestaurantService from '../services/restaurant.service';

const RestaurantPanel = () => {
    const [restaurant, setRestaurant] = useState({});
    const { restaurantID } = useParams();

    useEffect(() => {
      RestaurantService.getRestaurant(restaurantID)
      .then(data => setRestaurant(data))
      .catch(error => console.error('Error:', error));
    }, [restaurantID]);

    useEffect(() => {
      const selectTime = document.getElementById('selectTime');

      const startTime = new Date(`2000-01-01T${restaurant.start_hour}`);
      const endTime = new Date(`2000-01-01T${restaurant.end_hour}`);

      for (let time = startTime; time < endTime; time.setMinutes(time.getMinutes() + 30)) {
        const option = document.createElement('option');
        option.value = time.toLocaleTimeString('pl-PL', {hour12: false});
        option.text = time.toLocaleTimeString('pl-PL', {hour: '2-digit', minute: '2-digit'});
        selectTime.appendChild(option);
      }
    }, [restaurant]);

    return (

        <main className='restaurantPan' style={{backgroundImage: `url('../../img/restaurantBackground.jpg')`}}>
          <div className="rectangle">
            <img src={restaurant.res_logo} alt="RESTAURANT LOGO"/>
            <h1 className='resName'>{restaurant.res_name}</h1>
            <p className='resD'>{restaurant.res_d}</p>
            <p className='resLoc'>{restaurant.res_location}</p>
            <iframe
            src={`https://www.google.com/maps/embed?pb=${restaurant.res_map}`}
            width="90%"
            height="400"
            style={{ border: '0.2em solid black' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        <div className="rectangle">
          <img src={restaurant.res_logo} alt="RESTAURANT LOGO"/>
          <form className='formReserv'>
            <label for="numberOfPeople">Number of people :</label>
            <select id="numberOfPeople" name="selectedNumberOfPeople">
              <option value="2">2 osoby</option>
              <option value="4">4 osoby</option>
              <option value="6">6 osób</option>
            </select>
            <label for="datePicker">Select a date :</label>
            <input name="selectedDate" type="date" className="datePicker"/>
            <label for="selectTime">Select a time:</label>
            <select id="selectTime" name="selectedTime"></select>
          </form>
        </div>
      </main>
    );
};

export default RestaurantPanel;