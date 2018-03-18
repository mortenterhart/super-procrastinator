import React, {Component} from 'react';
import {Container, Form, Row} from 'reactstrap';
import './ContentSelection.css';
import {checkboxNames} from "../../storage/apis/StorageAPIIdentifiers";
import Checkbox from "./Checkbox";
import {storage} from "../../storage/ReduxStorage";
import {CheckboxActions} from "../../storage/actions/CheckboxActions";

class ContentSelection extends Component {

    constructor() {
        super();
        this.checkboxList = [
            new Checkbox(checkboxNames.reddit, "Reddit", false),
            new Checkbox(checkboxNames.facebook, "Facebook", false),
            new Checkbox(checkboxNames.twitter, "Twitter", false)
        ];

        storage.dispatch(CheckboxActions.initCheckboxList(this.checkboxList));
    }

    render() {
        return (
            <Container className="ContentSelection">
                <Row>
                    <h4 >Active Content</h4>
                </Row>
                <hr/>
                <Row> 
                    <Form>
                        <ul className="list-group">
                            {this.checkboxList.map(checkbox => {
                                return (<li>{checkbox.render()}</li>);
                            })}
                        </ul>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default ContentSelection;
