import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './App.css';
import NavBar from './components/navbar/NavBar';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import SubscriptionOptions from "./components/subscriptionPage/SubscriptionOptions";

import Reddit from './APIs/redditAPI/Reddit';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>


                <div className="mx-5">

                    <SubscriptionOptions/>
                    <Row>
                        <Footer/>
                    </Row>
                </div>
            </div>
        );
    }
}

export default App;
