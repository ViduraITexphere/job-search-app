import React from "react";
import { useEffect } from "react";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import "./SignIn.css";
import { Link } from "react-router-dom";

//MUI

//GOOGLE LOGIN
import LoginButton from "../Auth/GoogleAuth";
// import LogoutButton from "../Auth/Logout";
import { gapi } from "gapi-script";

// Icons
import { BsShieldLock } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

// check whether device is mobilr or not
import { isMobile } from "react-device-detect";

// Google Login client Id
const clientId =
  "512570607110-rnt0aersvlk9btgbhaqrv8rrehpq3udr.apps.googleusercontent.com";

function SignIn() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <Grid container className={isMobile ? "container-mobile" : "container"}>
      <Grid
        item
        xs={12}
        md={6}
        className="container-left"
      
      >
        <div className="close-btn">
          <Link to="/home">
            <AiFillCloseCircle size={32} style={{ color: "white" }} />
          </Link>
        </div>
    
          <img
            src={require("../../../assets/images/login.png")}
            alt="signin"
          />
  
      </Grid>

      <Grid item xs={12} md={6} className="container-right">
        <div
          className="close-btn-mobile"
          style={isMobile ? { display: "block" } : { display: "none" }}
        >
          <Link to="/home">
            <AiFillCloseCircle size={26} style={{ color: "#dbdbdb" }} />
          </Link>
        </div>
        <form>
          <div className="form-wrapper">
            <div className="logo">
              <img
                src={require("../../../assets/images/Logo.png")}
                alt="logo"
              />
            </div>
            <div className="powerdby">
              <h5>Powered by</h5>
              <img
                src={require("../../../assets/images/powerdBy.png")}
                alt="signin"
              />
            </div>
            <div className="heading">
              <h1>Sign In to your Account</h1>
              <h5>Welcome Back. Select a method to Login</h5>
            </div>
            <div className="social-login">
              <div className="google-btn">
                <LoginButton />

                {/* add to this logout page */}
                {/* <LogoutButton /> */}
              </div>
            </div>
            <div className="or">
              <h5>or countinue with email</h5>
            </div>
            <TextField
              InputProps={{
                style: { fontSize: 14, borderRadius: 6, fontFamily: "Inter" },
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
                style: { fontSize: 14, borderRadius: 6, fontFamily: "Inter" },
                startAdornment: (
                  <InputAdornment position="start">
                    <BsShieldLock size={16} />
                  </InputAdornment>
                ),
              }}
              id="outlined-size-small"
              placeholder="Password"
              type="password"
              size="small"
              fullWidth
            />
            <div className="signin-btn">
              <Button variant="contained" className="signBtn">
                Sign In
              </Button>
            </div>
            <div className="signup-link">
              <h5>
                Don't have an account? <a href="/signup">Create an account</a>
              </h5>
            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

export default SignIn;
