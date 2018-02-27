import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Navbar/>
                </Row>
                <Row className="mainContent">
                    <Col xs="0" md="3" lg="2" className="contentSelection ">
                    </Col>
                    <Col md="9" lg="10" className="contentView">
                    </Col>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </div>
        );
    }
}

export default App;
