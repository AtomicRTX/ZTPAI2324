import React from 'react';

import Navigation from '../components/Navigation'
import ProfileInfo from '../components/ProfileInfo'

import '../css/profilePage.css';

const ProfilePage = () => {
    return (
        <div className='desktop'>
            <Navigation />
            <main className='restaurantPan' style={{backgroundImage: `url('../../img/restaurantBackground.jpg')`}}>
                <div className="rectangleProfile">
                    <p className="profile_name">My profile</p>
                    <ProfileInfo/>
                </div>
            </main>
        </div>
  )
}

export default ProfilePage
