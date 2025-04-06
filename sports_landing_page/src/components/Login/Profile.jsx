import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {user.picture && <img src={user.picture} alt={user.name} />}
        <h2>{user.name} htk</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
