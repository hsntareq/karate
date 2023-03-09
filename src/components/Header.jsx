import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import { gapi } from "gapi-script";

const client_id =
  "265169302425-9viqh4lt9spb839pd34qmrh8nhmu1ifc.apps.googleusercontent.com";

export default function Header(props) {
  return (
    <header className="shadow-md py-5 w-full">
      <h1 className="font-bold text-2xl">Karate kata, zuki, uke, geri</h1>
      <div
        id="g_id_onload"
        data-client_id="265169302425-9viqh4lt9spb839pd34qmrh8nhmu1ifc.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:3000"
        data-auto_prompt="false"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </header>
  );
}
