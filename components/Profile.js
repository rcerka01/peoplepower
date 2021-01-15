import {useAuth0} from '@auth0/auth0-react'

const Profile = () => {
const {user, isLoading, isAuthenticated} = useAuth0()

if (isLoading) {
  return "Loading...";
}

 return isAuthenticated && "Hello " + user.name
}

export default Profile;
