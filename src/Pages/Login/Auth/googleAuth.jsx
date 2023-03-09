import React from 'react'
import {GoogleLogin} from 'react-google-login';

// Google Login client Id
const clientId = '512570607110-rnt0aersvlk9btgbhaqrv8rrehpq3udr.apps.googleusercontent.com';

function googleAuth() {

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

  return (
    <div className="google-btn">
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div>
  )
}

export default googleAuth