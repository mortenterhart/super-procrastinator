import React, {Component} from 'react';
import {Container, Form, Label, Row} from 'reactstrap';
import './ContentSelection.css';
import {checkboxNames} from "../../storage/apis/StorageAPIIdentifiers";
import Checkbox from "./Checkbox";
import {storage} from "../../storage/ReduxStorage";
import {CheckboxActions} from "../../storage/actions/CheckboxActions";

class ContentSelection extends Component {

    constructor() {
        super();
        this.checkboxList = [
            <Checkbox key={checkboxNames.reddit} identifier={checkboxNames.reddit} labelName="Reddit" checked={false}/>,
            <Checkbox key={checkboxNames.golem} identifier={checkboxNames.golem} labelName="Golem" checked={false}/>
        ];

        console.log("Dispatching content selection with array");
        console.log(this.checkboxList);
        console.log("Sending ...");
        storage.dispatch(CheckboxActions.initCheckboxList(this.checkboxList));
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
                            {this.checkboxList.map(checkbox => {
                                return (<li>{checkbox}</li>);
                            })}
                        </ul>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default ContentSelection;
