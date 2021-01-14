import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLink = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  if (!isAuthenticated)
    return <a href="#" class="nav-item nav-link" onClick={() => loginWithRedirect()}><span class="login">LOGIN / SIGNIN</span></a>
  else
    return <a href="#" class="nav-item nav-link" onClick={() => logout(process.env.auth0_redirectUri)}><span class="login">LOGOUT</span></a>   
};

export default LoginLink;
