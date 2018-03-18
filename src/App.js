import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import MainContent from './components/mainContent/MainContent';

import Footer from './components/footer/Footer';

import {Provider} from 'react-redux';
import {storage} from "./storage/ReduxStorage";


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
                <div>
                    <NavBar/>
                    <MainContent/>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}


export default App;
