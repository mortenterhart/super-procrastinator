import React, {Component} from 'react';
import {Button} from 'reactstrap';

class Login extends Component {

    onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }

    signOut() {
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }

    componentDidMount() {
        window.gapi.signin2.render('g-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'width': 250,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': this.onSignIn
        });
    }

    render() {
        return (
            <div>
                <div id="g-signin2"/>
                <Button onClick={this.signOut}>Sign Out</Button>
            </div>
        );
    }
}

export default Login;
