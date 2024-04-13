import React from 'react'
import Navigation from '../components/Navigation'
import SearchBar from '../components/SearchBar'
import ProfileInfo from '../components/ProfileInfo'
import '../css/profilePage.css';

const ProfilePage = () => {
  return (
    <div className='desktop'>
      <Navigation />
       <main>
          <SearchBar />
          <ProfileInfo/>
       </main>
    </div>
  )
}

export default ProfilePage
