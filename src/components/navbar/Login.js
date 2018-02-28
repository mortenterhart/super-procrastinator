import React from 'react';
import {GoogleLogin} from 'react-google-login-component';

class Login extends React.Component {

    responseGoogle(googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        var googleId = googleUser.getId();

        console.log({googleId});
        console.log({accessToken: id_token});
        //anything else you want to do(save to localStorage)...
    }

    render() {
        return (
            <div>
                <GoogleLogin socialId="340186055169-0fe4bvqh1ce7i4q2fetr0parcv9odkvq.apps.googleusercontent.com"
                             className="google-login"
                             scope="profile"
                             fetchBasicProfile={false}
                             responseHandler={this.responseGoogle}
                             buttonText="Login With Google" />
            </div>
        );
    }

}

export default Login;