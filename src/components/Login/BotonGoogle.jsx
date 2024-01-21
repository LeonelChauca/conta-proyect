import React from 'react'
import { GoogleOAuthProvider,GoogleLogin,useGoogleOneTapLogin  } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const BotonGoogle = () => {
  return (
        <GoogleOAuthProvider clientId="663077459998-j7pkjef9qdn6r7v9bfo1rsj1d4ah3g67.apps.googleusercontent.com">
            <GoogleLogin 
                onSuccess={(credentialResponse) => {
                    let token =credentialResponse.credential;
                    console.log(jwtDecode(token));
                }}
                onError={() => {
                    console.log('Login Failed');
                }} type='icon' theme='filled_blue' shape='circle'
                />
        </GoogleOAuthProvider>
  )
}
export default BotonGoogle
