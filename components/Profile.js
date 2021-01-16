import {useAuth0} from '@auth0/auth0-react'
import React from 'react';

const Profile = () => {
  const {user, isLoading, isAuthenticated} = useAuth0();

  if (isLoading) {
    return "Loading...";
  }

  return isAuthenticated && <span>Hello {user.name}  |  <a href='profile' class='profile'>My Profile</ a>  |  <a href='portfolio' class='profile'>My Portfolio</a></ span>
  }

export default Profile;

