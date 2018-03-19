import React, {Component} from 'react';
import {Container, Form, Row, InputGroup, Label, Input, InputGroupAddon, Button} from 'reactstrap';
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
                <Row>
                    <h4>Active Content</h4>
                </Row>
                <hr/>
                <Row> 
                    <Form>
                        <ul className="list-group">
                            {this.checkboxList.map(checkbox => {
                                return (<li>{checkbox}</li>);
                            })}
                        </ul>
                    </Form>
                </Row>
                <hr/>
                <Row>
                    <h4>Active Subreddits</h4>
                </Row>
                <br/>
                <Row>
                    <InputGroup>
                        <Input placeholder="Enter subreddit..." />
                        <InputGroupAddon addonType="append"><Button color="primary">Add</Button></InputGroupAddon>
                    </InputGroup>
                </Row>
                <br/>
                <Row>
                    <div className="input-group">
                        <div className="form-group has-feedback has-clear">
                            <Label>Subreddit 1</Label>
                            <button type="button" className="close algin-top" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default ContentSelection;
