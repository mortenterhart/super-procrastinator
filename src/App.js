import React, {Component} from 'react';
import {Row} from 'reactstrap';
import './App.css';
import NavBar from './components/navbar/NavBar';
import MainContent from './components/mainContent/MainContent';
import Settings from './components/settings/Settings';
import SubscriptionOptions from "./components/subscriptionPage/SubscriptionOptions";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';

import ReduxThunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";

import rootReducer from "./APIs/redditAPI/reducers/rootReducer";
import {Provider} from 'react-redux';

import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
);

class App extends Component {

    constructor() {
        super();
        this.contextPath = this.extractContextPath()
    }

    extractContextPath() {
        return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
    }

    render() {
        return (
            <Provider store={store}>
                <div className="mx-5">
                    <NavBar/>
                    <Redirect from="/" to="/home"/>
                    <Route path={this.contextPath + "/home"} component={MainContent}/>
                    <Route path={this.contextPath + "/settings"} component={Settings}/>
                    <Route path={this.contextPath + "/subscriptions"} component={SubscriptionOptions}/>
                    <Row>
                        <Footer/>
                    </Row>
                </div>
            </Provider>
        );
    }
}


export default App;
