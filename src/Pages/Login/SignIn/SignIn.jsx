import React from "react";
import { useEffect } from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import "./SignIn.css";

//GOOGLE LOGIN
import LoginButton from "../Auth/googleAuth";
import {gapi} from 'gapi-script';


// Icons
import { BsShieldLock } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

// check whether device is mobilr or not
import {isMobile} from 'react-device-detect';
console.log ("isMobile", isMobile);

// Google Login client Id
const clientId = '512570607110-rnt0aersvlk9btgbhaqrv8rrehpq3udr.apps.googleusercontent.com';

function SignIn() {

  useEffect(() => {
    function start () {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    };
    gapi.load('client:auth2', start);
  });

  return (
    
    <Grid container className={isMobile ? "container-mobile" : "container"}>
    <Grid item xs={12} md={6} className="container-left">
        <Grid className="signin-image">
          <img src={require('../../../assets/images/login.png')} alt="signin"/>
          </Grid>
      </Grid>
      <Grid item xs={12} md={6} className="container-right">
        <form>
          <div className="form-wrapper">
            <div className="heading">
              <h1>Sign In to your Account</h1>
              <h5>Welcome Back. Select method to Login</h5>
            </div>
            <div className="social-login">
              <div className="google-btn">
                <LoginButton />

              {/* add to this logout page */}
                {/* <LogoutButton /> */}

              </div>
            </div>
            <TextField
              InputProps={{
                style: { fontSize: 13, borderRadius: 6 },
                startAdornment: (
                  <InputAdornment position="start">
                    <FiMail size={16} />
                  </InputAdornment>
                ),
              }}
              id="outlined-size-small"
              placeholder="Email"
              size="small"
              fullWidth
            ></TextField>
            <TextField
              InputProps={{
                style: { fontSize: 13, borderRadius: 6 },
                startAdornment: (
                  <InputAdornment position="start">
                    <BsShieldLock size={16} />
                  </InputAdornment>
                ),
              }}
              id="outlined-size-small"
              placeholder="Password"
              size="small"
              fullWidth
            />
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

export default SignIn;
