import React from 'react'
import { GoogleLogout } from 'react-google-login'

// Google Login client Id
const clientId = '512570607110-rnt0aersvlk9btgbhaqrv8rrehpq3udr.apps.googleusercontent.com';

function Logout() {
  return (
    <div className="google-btn">
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={() => alert('Logout made successfully')}
        />
    </div>
  )
}

export default Logout