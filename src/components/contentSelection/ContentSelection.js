import React, {Component} from 'react';
import {Container, Form, Label, Row} from 'reactstrap';
import './ContentSelection.css';
import {checkboxNames} from "../../storage/StorageAPIIdentifiers";
import Checkbox from "./Checkbox";
import {storage} from "../../storage/ReduxStorage";

class ContentSelection extends Component {

    constructor() {
        super();
        this.checkboxList = [
            <Checkbox key={checkboxNames.reddit} identifier={checkboxNames.reddit} labelName="Reddit" checked={false}/>,
            <Checkbox key={checkboxNames.facebook} identifier={checkboxNames.facebook} labelName="Facebook" checked={false}/>,
            <Checkbox key={checkboxNames.twitter} identifier={checkboxNames.twitter} labelName="Twitter" checked={false}/>
        ];

        console.log("ContentSelection checkboxList:");
        console.log(this.checkboxList);
        storage.dispatch({
            type: 'INIT',
            checkboxList: this.checkboxList
        });
        console.log("ContentSelection initialState:");
        console.log(storage.getState());
    }

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
                            {this.checkboxList}
                        </ul>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default ContentSelection;
