import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLink = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  if (!isAuthenticated && !isLoading) {
    return <a href="#" class="nav-item nav-link" onClick={() => loginWithRedirect()}><span class="login">LOGIN / SIGNIN</span></a>
  }
  
  return <a href="#" class="nav-item nav-link" onClick={() => logout(process.env.NEXT_PUBLIC_auth0_redirectUri)}><span class="login">LOGOUT</span></a>   
};

export default LoginLink;
