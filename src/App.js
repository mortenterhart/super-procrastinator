import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './App.css';
import NavBar from './components/navbar/NavBar';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="mx-5">
                <Row>
                    <NavBar/>
                </Row>
                <Row className="mainContent">
                    <Col xs="0" md="3" lg="2" className="contentSelection">
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
