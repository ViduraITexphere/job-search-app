import { Button, Grid } from "@mui/material";
import React from "react";
import { GoogleLogin } from "react-google-login";

// Icons
import { FcGoogle } from "react-icons/fc";

// Google Login client Id
const clientId =
  "512570607110-rnt0aersvlk9btgbhaqrv8rrehpq3udr.apps.googleusercontent.com";

function GoogleAuth() {

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    localStorage.setItem("Profile", JSON.stringify(res.profileObj));
    const user = JSON.parse(localStorage.getItem("Profile"));

    if (user) {
      window.location.href = "/home";
    }

  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <Grid >
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <Button
            style={{border : "2px solid #bdbdbd", textTransform: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", height: "100%", gap: "10px",
            color: "#808080", fontFamily: "fontFamily: 'Inter'", fontWeight: "500", borderRadius: "7px"}}     
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle size={20}/>
            Google
          </Button>
        )}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </Grid>
  );
}

export default GoogleAuth;
