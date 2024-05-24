import React, { useState, useEffect } from 'react';
import '../css/profileInfo.css';

import UserService from '../services/user.service';

const ProfileInfo = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    UserService.getUser()
      .then(data => setUser(data)
      )
      .catch(error => console.error('Error:', error));
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