import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import './App.css';
import {Provider} from 'react-redux';
import NavBar from './components/navbar/NavBar';

import ContentSelection from './components/contentSelection/ContentSelection';
import WelcomeMessage from './components/notifications/WelcomeMessage';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';

import SubscriptionOptions from "./components/subscriptionPage/SubscriptionOptions";

import {applyMiddleware, compose, createStore} from "redux";
import ReduxThunk from "redux-thunk";

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
            <div className="mx-5">
                <NavBar/>
                <Row className="mainContent mb-5">
                    <Col xs="0" md="3" lg="2" className="contentSelection">
                        <ContentSelection/>
                    </Col>
                    <Col md="9" lg="10" className="contentView">
                        <WelcomeMessage/>
                    </Col>
                </Row>
                <SubscriptionOptions/>
                <Row>
                    <Footer/>
                </Row>
            </div>
            </Provider>
        );
    }
}

export default App;
