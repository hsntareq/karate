import React, { createContext, useState } from "react";
import { GoogleLogin } from "react-google-login";

const client_id =
  "265169302425-9viqh4lt9spb839pd34qmrh8nhmu1ifc.apps.googleusercontent.com";

export const AuthContext = createContext();

function Login(props) {
  const [goLogin, setGoLogin] = useState(false);

  const onSuccess = (res) => {
    console.log("Login Success! Loggedin user: ", res.profileObj);
    setGoLogin(true);
    props.isLogin(goLogin);
  };

  const onFailure = (res) => {
    console.log("Login Failed! Loggedin user: ", res);
  };

  return (
    <GoogleLogin
      clientId={client_id}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

export default Login;
