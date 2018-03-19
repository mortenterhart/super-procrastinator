import React, {Component} from 'react';
import {Button, Container, Form, Input, InputGroup, InputGroupAddon, Label, Row} from 'reactstrap';
import './ContentSelection.css';
import {checkboxNames} from "../../storage/apis/StorageAPIIdentifiers";
import Checkbox from "./Checkbox";
import {storage} from "../../storage/ReduxStorage";
import {CheckboxActions} from "../../storage/actions/CheckboxActions";
import firebase from 'firebase';

class ContentSelection extends Component {

    constructor(props) {
        super(props);

        this.checkboxList = [];
    }

    componentDidMount() {
        let initialCheckboxState = {
            reddit: false,
            golem: false
        };

        console.log("Firebase:");
        console.log(firebase.auth());

        console.log("onAuthStateChanged");
        firebase.auth().onAuthStateChanged(
            (user) => {
                initialCheckboxState = this.loadCheckboxState();
            }
        );

        console.log(initialCheckboxState);

        this.checkboxList = [
            <Checkbox key={checkboxNames.reddit} identifier={checkboxNames.reddit}
                      labelName="Reddit" checked={initialCheckboxState.reddit}/>,
            <Checkbox key={checkboxNames.golem} identifier={checkboxNames.golem}
                      labelName="Golem" checked={initialCheckboxState.golem}/>
        ];

        console.log("Dispatching content selection with array");
        console.log(this.checkboxList);
        console.log("Sending ...");
        storage.dispatch(CheckboxActions.initCheckboxList(this.checkboxList));

        this.forceUpdate();
    }

    loadCheckboxState() {
        let checkboxStates = {
            reddit: false,
            golem: false
        };

        if (firebase.auth().currentUser) {
            console.log("Logged in");
            let userId = firebase.auth().currentUser.uid;
            console.log("User UID: " + userId);
            firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
                if (snapshot.val()) {
                    console.log("Snapshot value is defined");
                    console.log("reddit: " + snapshot.val().reddit);
                    console.log("golem: " + snapshot.val().golem);
                    checkboxStates = {
                        reddit: snapshot.val().reddit || false,
                        golem: snapshot.val().golem || false
                    };
                }
            });
        }

        return checkboxStates;
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
                        <Input placeholder="Enter subreddit..."/>
                        <InputGroupAddon addonType="append"><Button color="primary">Add</Button></InputGroupAddon>
                    </InputGroup>
                </Row>
                <br/>
                <Row>
                    <div className="input-group">
                        <div className="form-group has-feedback has-clear">
                            <Label>Subreddit 1</Label>
                            <button type="button" className="close align-top" aria-label="Close">
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
