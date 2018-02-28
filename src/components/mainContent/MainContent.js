/**
 * Created by SolDeEcuador on 28/02/2018.
 */
import React, {Component} from 'react';
import ContentSelection from '../contentSelection/ContentSelection';
import WelcomeMessage from '../notifications/WelcomeMessage';
import {Row, Col} from 'reactstrap';

class MainContent extends Component {
    render() {
        return (
            <Row className="mainContent mb-5">
                <Col xs="0" md="3" lg="2" className="contentSelection">
                    <ContentSelection/>
                </Col>
                <Col md="9" lg="10" className="contentView">
                    <WelcomeMessage/>
                </Col>
            </Row>
        );
    }
}

export default MainContent;