import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../css/profileInfo.css';

import authHeader from '../services/auth-header';

const ProfileInfo = () => {
  const [user, setUser] = useState({});

    useEffect(() => {
      axios.get('http://localhost:8080/api/v1/user/current', { headers: authHeader() })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    }, []);

  return (
    <div className="profile">
      <div className="my">
        My profile
      </div>
      <div className="update">
        Update your profile information
      </div>
      <div className="title">
        <div className="title_basic">
          Basic information
        </div>
      </div>
      
      <div className="basicInformation">
        <div className="data">
          <div>
            Name: {user.name}
          </div>
          <div>
            Surname: {user.surname}
          </div>
          <div>
            E-mail: {user.email}
          </div>
          <div>
            Phone number: {user.phone ? user.phone : "Nie podany"}
          </div>
        </div>
        <div className="photo">
            <img src={user.photo ? user.photo : "https://bi.im-g.pl/im/5e/7e/1b/z28830814Q,Amou-Hadzi-na-co-dzien-zyje-w-Dejgah-w-Iranie.jpg"} alt="Opis obrazka" />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;