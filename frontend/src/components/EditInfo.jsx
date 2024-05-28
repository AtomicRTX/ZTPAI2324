import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import '../css/editInfo.css';

import UserService from '../services/user.service';

const EditInfo = () => {
  
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(() => {
        UserService.getUser()
            .then(data => setUser(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleEdit = (e) => {
        e.preventDefault();
        setMessage('');

        UserService.updateUser(user.name, user.surname, user.photo, user.phone)
        .then(response => {
            setMessage(`Update sucessful.\n`);
            setTimeout(() => {
                navigate('/profilePage');
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
    <div className="edit">
      
      <div className="basicInformation">
        <Form onSubmit={handleEdit} className='formProfile'>
        <div className="data">
          <div className='dataBit'>
            <p className='bitType'>
                Photo: 
            </p>
            <p className='bitName'>
                <Input className="editI" name="photo" type="text" placeholder="Photo link" value={user.photo} onChange={handleChange}/>
            </p>
          </div>
          <div className='dataBit'>
            <p className='bitType'>
              Name: 
            </p>
            <p className='bitName'>
            <Input className="editI" name="name" type="text" placeholder="Name" value={user.name} onChange={handleChange}/>
            </p>
          </div>
          <div className='dataBit'>
            <p className='bitType'>
              Surname: 
            </p>
            <p className='bitName'>
            <Input className="editI" name="surname" type="text" placeholder="Surname" value={user.surname} onChange={handleChange}/>
            </p>
          </div>
          <div className='dataBit'>
            <p className='bitType'>
              Phone number: 
            </p>
            <p className='bitName'>
            <Input className="editI" name="phone" type="text" placeholder="Phone number" value={user.phone} onChange={handleChange}/>
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

export default EditInfo;