import React, {Component} from 'react';

import {
    Navbar,
    NavbarToggler,
    Nav,
    Collapse
} from 'reactstrap';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const config = {
    apiKey: "AIzaSyDew41OBlxbC6VB8WOgA-d6mDlyJx-mh_E",
    authDomain: "superprocrastinator-d826b.firebaseapp.com",
    databaseURL: "https://superprocrastinator-d826b.firebaseio.com",
    projectId: "superprocrastinator-d826b",
    storageBucket: "superprocrastinator-d826b.appspot.com",
    messagingSenderId: "340186055169"
  };
  
firebase.initializeApp(config);

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // The component's Local state.
    state = {
        signedIn: false // Local signed-in state.
    };

    // Configure FirebaseUI.
    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
        // Avoid redirects after sign-in.
        signInSuccess: () => false
        }
    };

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            (user) => this.setState({signedIn: !!user})
        );
    }

    test() {
        let currentUser = firebase.auth().currentUser;
        firebase.database().ref('users/' + currentUser.uid).set({
            username: currentUser.displayName,
            email: currentUser.email
        });
    } 

    render() {
        return (
            <div className="navbar-footer-background navbar-border mb-2">
                <Navbar color="faded" expand="md">
                    <a className="navbar-brand">
                        SuperProcrastinator
                    </a>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>      
                                { !this.state.signedIn
                                    ? <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>                                
                                    : (
                                        <div className="my-auto">
                                            <img height="42" width="42" className="img-fluid rounded-circle mr-3" src={firebase.auth().currentUser.photoURL} alt="userPhoto"/>
                                            <a className="btn btn-primary text-white" onClick={() => firebase.auth().signOut()}>Sign Out</a>                                            
                                        </div>
                                    )
                                }                                                       
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );        
    }
}

export default NavBar;
