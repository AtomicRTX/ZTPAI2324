import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/user.css';
import UserService from '../services/user.service';

const User = ({user}) => {

    const [isDeleted, setIsDeleted] = useState(false);

    const handleDeleteUser = () => {
        UserService.deleteUser(user.user_id).then(() => setIsDeleted(true));
    }

    if (isDeleted) {
        return null;
    }

    return (
        <Link>
            <div className="userPanel">
                <img src={user.photo ? user.photo : "https://hub.alfresco.com/legacyfs/online/alfresco/a12790_user-86426-avatar"} alt="User Image" />
                <div className="info">
                    <div className="infoB">
                        <p className="n">Name: {user.name}</p>
                        <p className="d">Surname: {user.surname}</p>
                        <p className="p">Email: {user.email}</p>
                    </div>
                    <div className='btn-user'>
                        <button className="delete-btn" onClick={handleDeleteUser}>Delete user</button>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default User;
