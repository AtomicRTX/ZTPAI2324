import React, { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select"
import '../css/restaurantPanel.css';

import RestaurantService from '../services/restaurant.service';
import UserService from '../services/user.service';
import ReservationService from "../services/reservation.service";

const ReservationForm = () => {
  
    const [user, setUser] = useState({});
    const [restaurant, setRestaurant] = useState({});
    const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState('2');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedHour, setSelectedHour] = useState('');
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);
    const { restaurantID } = useParams();

    useEffect(() => {
      RestaurantService.getRestaurant(restaurantID)
      .then(data => setRestaurant(data))
      .catch(error => console.error('Error:', error));
    }, [restaurantID]);

    useEffect(() => {
      UserService.getUser()
        .then(data => setUser(data)
        )
        .catch(error => console.error('Error:', error));
    }, []);

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


    const onNumberOfPeople = (e) => {
      setSelectedNumberOfPeople(e.target.value);
    }

    const onDate = (e) => {
      setSelectedDate(e.target.value);
    }

    const onTime = (e) => {
      setSelectedHour(e.target.value);
    }

    const handleReservation = (e) => {
      e.preventDefault();
      setMessage('');
      setSuccessful(false);

      ReservationService.makeReservation(user.user_id, restaurant.res_id, selectedDate, selectedHour, selectedNumberOfPeople)
        .then(response => {
          setMessage(`Reservation sucessful.\n`);
          setSuccessful(true);
        })
        .catch(error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
    
          setMessage(`Reservation failed. Details: Error: ${resMessage}`);
          setSuccessful(false);
        });
    }

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
          <Form onSubmit={handleReservation} className='formReserv'>
            <label for="numberOfPeople">Number of people :</label>
            <Select id="numberOfPeople" name="selectedNumberOfPeople" value={selectedNumberOfPeople} onChange={onNumberOfPeople}>
              <option value="2">2 osoby</option>
              <option value="4">4 osoby</option>
              <option value="6">6 osób</option>
            </Select>
            <label for="datePicker">Select a date :</label>
            <Input name="selectedDate" type="date" className="datePicker" value={selectedDate} onChange={onDate}/>
            <label for="selectTime">Select a time:</label>
            <Select id="selectTime" name="selectedTime" value={selectedHour} onChange={onTime}></Select>
            <button className='panelButton'>Book a reservation</button>
            {message && <div>{message}</div>}
          </Form>
        </div>
      </main>
    );
  }

export default ReservationForm;