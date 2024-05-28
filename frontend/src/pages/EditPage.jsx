import React from 'react';
import Navigation from '../components/Navigation'
import EditInfo from '../components/EditInfo'

import '../css/profilePage.css';

const EditPage = () => {
    return (
        <div className='desktop'>
            <Navigation />
            <main className='restaurantPan' style={{backgroundImage: `url('../../img/restaurantBackground.jpg')`}}>
                <div className="rectangleProfile">
                    <p className="profile_name">My profile</p>
                    <EditInfo/>
                </div>
            </main>
        </div>
  )
}

export default EditPage