

import { useAuth0 } from "@auth0/auth0-react";
// import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;

  return(

  !isAuthenticated && (
<button className="login bg-black px-6 py-3    dark:text-black border-gary-300  outline-none w-1/8  font-bold shadow-md shadow-primary rounded-xl text-[#fbfbfb] dark:bg-white " onClick={() => loginWithRedirect()}>Log In</button>

  
  ) 

  )
};

export default LoginButton;
