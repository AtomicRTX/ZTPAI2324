import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import RestaurantService from '../services/restaurant.service';

import '../css/addInfo.css';

const AddInfo = () => {
  
    const [restaurant, setRestaurant] = useState({
        res_logo: '',
        res_name: '',
        res_location: '',
        res_map: '',
        start_hour: '',
        end_hour: ''
    });
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurant(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setMessage('');

        if (!restaurant.res_logo || !restaurant.res_name || !restaurant.res_location || !restaurant.res_map || !restaurant.start_hour || !restaurant.end_hour) {
            setMessage('All fields are required.');
            return;
        }

        const startHour = restaurant.start_hour;
        const endHour = restaurant.end_hour;

        if (startHour >= endHour) {
            setMessage('End time must be later than start time.');
            return;
        }

        RestaurantService.createRestaurant(restaurant.res_logo, restaurant.res_name, restaurant.res_location, restaurant.res_map, restaurant.start_hour, restaurant.end_hour)
            .then(response => {
                setMessage(`Adding sucessful.\n`);
                setTimeout(() => {
                    navigate('/homePage');
                }, 2000);
            })
            .catch(error => {
                const resMessage =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                setMessage(`Update failed. Details: Error: ${resMessage}`);
            });
    }

    return (
        <div className="add">
          
            <div className="basicInformation">
                <Form onSubmit={handleAdd} className='formRestaurant'>
                    <div className="data">
                        <div className='dataBitA'>
                            <p className='bitTypeA'>
                                Restaurant logo: 
                            </p>
                            <p className='bitNameA'>
                                <Input className="addI" name="res_logo" type="text" placeholder="Restaurant logo" value={restaurant.res_logo} onChange={handleChange}/>
                            </p>
                        </div>
                        <div className='dataBitA'>
                            <p className='bitTypeA'>
                              Name: 
                            </p>
                            <p className='bitNameA'>
                            <Input className="addI" name="res_name" type="text" placeholder="Name" value={restaurant.res_name} onChange={handleChange}/>
                            </p>
                        </div>
                        <div className='dataBitA'>
                            <p className='bitTypeA'>
                              Location: 
                            </p>
                            <p className='bitNameA'>
                            <Input className="addI" name="res_location" type="text" placeholder="Location" value={restaurant.res_location} onChange={handleChange}/>
                            </p>
                        </div>
                        <div className='dataBitA'>
                            <p className='bitTypeA'>
                              Google maps: 
                            </p>
                            <p className='bitNameA'>
                            <Input className="addI" name="res_map" type="text" placeholder="Maps" value={restaurant.res_map} onChange={handleChange}/>
                            </p>
                        </div>
                        <div className='dataBitA'>
                            <p className='bitTypeA'>
                              Start time: 
                            </p>
                            <p className='bitNameA'>
                            <Input className="addI" name="start_hour" type="time" placeholder="Start time" value={restaurant.start_hour} onChange={handleChange}/>
                            </p>
                        </div>
                        <div className='dataBitA'>
                            <p className='bitTypeA'>
                              End time: 
                            </p>
                            <p className='bitNameA'>
                            <Input className="addI" name="end_hour" type="time" placeholder="End time" value={restaurant.end_hour} onChange={handleChange}/>
                            </p>
                        </div>
                    </div>
                    <button className='panelButton'>Save changes</button>
                    {message && <div className='message'>{message}</div>}
                </Form>
            </div>
        </div>
    )
}

export default AddInfo;