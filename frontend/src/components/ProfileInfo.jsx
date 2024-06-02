import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/profileInfo.css';

import UserService from '../services/user.service';

const ProfileInfo = () => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        UserService.getUser()
            .then(data => setUser(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleEditProfile = () => {
      navigate('/editPage');
    };
  return (
    <div className="profile">
      <div className="basicInformation">
        <div className="photo">
          <img src={user.photo ? user.photo : "https://hub.alfresco.com/legacyfs/online/alfresco/a12790_user-86426-avatar"} alt="Opis obrazka" />
        </div>
        <div className="data">
          <div className='dataBit'>
            <p className='bitType'>Name: </p>
            <p className='bitName'>{user.name}</p>
          </div>
          <div className='dataBit'>
            <p className='bitType'>Surname: </p>
            <p className='bitName'>{user.surname}</p>
          </div>
          <div className='dataBit'>
            <p className='bitType'>E-mail: </p>
            <p className='bitName'>{user.email}</p>
          </div>
          <div className='dataBit'>
            <p className='bitType'>Phone number: </p>
            <p className='bitName'>{user.phone ? user.phone : "Not given"}</p>
          </div>
        </div>
      </div>
      <button className='panelButton' onClick={handleEditProfile}>Edit profile</button>
    </div>
  )
}

export default ProfileInfo;