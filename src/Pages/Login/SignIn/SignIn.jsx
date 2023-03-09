import React from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import "./SignIn.css";

// Icons
import { BsShieldLock } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

// check whether device is mobilr or not
import {isMobile} from 'react-device-detect';
console.log ("isMobile", isMobile);

function SignIn() {
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
