import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import MainContent from './components/mainContent/MainContent';

import Footer from './components/footer/Footer';

import {Provider} from 'react-redux';
import {storage} from "./storage/ReduxStorage";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDew41OBlxbC6VB8WOgA-d6mDlyJx-mh_E",
    authDomain: "superprocrastinator-d826b.firebaseapp.com",
    databaseURL: "https://superprocrastinator-d826b.firebaseio.com",
    projectId: "superprocrastinator-d826b",
    storageBucket: "superprocrastinator-d826b.appspot.com",
    messagingSenderId: "340186055169"
};

firebase.initializeApp(config);

class App extends Component {

    constructor() {
        super();
        this.contextPath = this.extractContextPath();
    }

    extractContextPath() {
        return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
    }

    render() {
        return (
            <Provider store={storage}>
                <div className="background">
                    <NavBar/>
                    <MainContent/>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}


export default App;
