import React from 'react';
import PropTypes from 'prop-types';
import '../css/profileInfo.css';

const ProfileInfo = ({ userName, userSurname, userEmail, userPhone }) => {
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
            Name: {userName}
          </div>
          <div>
            Surname: {userSurname}
          </div>
          <div>
            E-mail: {userEmail}
          </div>
          <div>
            Phone number: {userPhone}
          </div>
        </div>
        <div className="photo">
        </div>
      </div>
    </div>
  )
}

ProfileInfo.propTypes = {
  userName: PropTypes.string,
  userSurname: PropTypes.string,
  userEmail: PropTypes.string,
  userPhone: PropTypes.string,
};

ProfileInfo.defaultProps = {
  userName: 'Unknown',
  userSurname: 'Unknown',
  userEmail: 'Unknown',
  userPhone: 'Unknown',
};

export default ProfileInfo;