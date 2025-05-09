import React from 'react';
import './userprofile.css';

const UserProfile = ({ name, avatarUrl }) => {
  return (
    <div>
        <img src={avatarUrl} alt='`avatar de ${name}'/>
        <span>{name}</span>
    </div>
  );
};

export default UserProfile;