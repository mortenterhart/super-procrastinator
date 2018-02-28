import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './App.css';
import NavBar from './components/navbar/NavBar';

import ContentSelection from './components/contentSelection/ContentSelection';
import WelcomeMessage from './components/notifications/WelcomeMessage';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import SubscriptionOptions from "./components/subscriptionPage/SubscriptionOptions";

class App extends Component {
    render() {
        return (
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
        );
    }
}

export default App;
