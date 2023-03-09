import React from "react";
import { GoogleLogout } from "react-google-login";
const client_id =
  "265169302425-9viqh4lt9spb839pd34qmrh8nhmu1ifc.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout Successfully!");
  };
  return (
    <GoogleLogout
      clientId={client_id}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
}

export default Logout;
