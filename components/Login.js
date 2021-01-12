import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLink = () => {
  const { loginWithRedirect } = useAuth0();
  return <a href="#" class="nav-item nav-link" onClick={() => loginWithRedirect()}><span class="login">LOGIN / SIGNIN</span></a>
};

export default LoginLink;
