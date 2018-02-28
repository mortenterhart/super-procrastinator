import React, {Component} from 'react';
import {Container, Row, Form, FormGroup, Label, Input} from 'reactstrap';
import './ContentSelection.css';

class ContentSelection extends Component {
    render() {
        return (
            <Container className="ContentSelection">
                <Row className="mb-2">
                    <Label className="float-left">
                        <h3>Active Content</h3>
                    </Label>
                </Row>
                <Row>
                    <Form>
                        <ul className="list-group">
                            <li>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"/>{' '}
                                        Reddit
                                    </Label>
                                </FormGroup>
                            </li>

                            <li>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"/>{' '}
                                        Twitter
                                    </Label>
                                </FormGroup>
                            </li>

                            <li>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"/>{' '}
                                        Facebook
                                    </Label>
                                </FormGroup>
                            </li>
                        </ul>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default ContentSelection;
