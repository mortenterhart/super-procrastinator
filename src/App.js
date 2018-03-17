import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';

import MainContent from './components/mainContent/MainContent';

import Footer from './components/footer/Footer';

import {createStore, compose, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";

import rootReducer from "./APIs/redditAPI/reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
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
