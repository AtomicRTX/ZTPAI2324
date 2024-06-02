import React from 'react';
import Navigation from '../components/Navigation'
import AddInfo from '../components/AddInfo'

import '../css/profilePage.css';

const AddPage = () => {
    return (
        <div className='desktop'>
            <Navigation />
            <main className='restaurantPan' style={{backgroundImage: `url('../../img/restaurantBackground.jpg')`}}>
                <div className="rectangleProfile">
                    <p className="profile_name">My profile</p>
                    <AddInfo/>
                </div>
            </main>
        </div>
  )
}

export default AddPage