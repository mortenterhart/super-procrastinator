import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './App.css';
import NavBar from './components/navbar/NavBar';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import SubscriptionOptions from "./components/subscriptionPage/SubscriptionOptions";

class App extends Component {
    render() {
        return (
            <div className="mx-5">
                <NavBar/>
               <SubscriptionOptions/>
                <Row>
                    <Footer/>
                </Row>
            </div>
        );
    }
}

export default App;
