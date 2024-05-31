import React, { useState, useEffect } from 'react';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';

import '../css/pages.css';
import '../css/reservationPage.css';

import UserService from '../services/user.service';
import UsersList from '../components/UsersList';

const ManagePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      UserService.getAllUsers()
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="desktop">
    <Navigation />
   <main className='ma'>
      <SearchBar/>
      <p className="categories_name">All users</p>
      <div className='re'>
      <UsersList users={users}/>
      </div>
   </main>
</div>
  )
}

export default ManagePage