import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout , isAuthenticated } = useAuth0();

  return (

  isAuthenticated && (
    <button className="bg-black text-white  px-4 py-3 " onClick={() => logout()}>Log out</button>

  )
  );
};

export default LogoutButton;