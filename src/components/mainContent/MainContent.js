/**
 * Created by SolDeEcuador on 28/02/2018.
 */
import React, {Component} from 'react';
import ContentSelection from '../contentSelection/ContentSelection';
import {Row, Col} from 'reactstrap';
import ContentView from '../contentView/ContentView';

class MainContent extends Component {
    render() {
        return (
            <Row className="mainContent mx-3">
                <Col xs="0" md="3" lg="2" className="contentSelection">
                    <ContentSelection/>
                </Col>
                <Col md="9" lg="10" className="contentView">
                    <ContentView/>
                </Col>
            </Row>
        );
    }
}

export default MainContent;
