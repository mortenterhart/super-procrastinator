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
        firebase.auth().onAuthStateChanged(
            (user) => {
                if (user) {
                    this.loadCheckboxStates();
                } else {
                    this.checkboxList = [
                        <Checkbox key={checkboxNames.reddit} identifier={checkboxNames.reddit}
                                  labelName="Reddit" checked={false}/>,
                        <Checkbox key={checkboxNames.golem} identifier={checkboxNames.golem}
                                  labelName="Golem" checked={false}/>
                    ];

                    console.log("Dispatching content selection with array");
                    console.log(this.checkboxList);
                    console.log("Sending ...");
                    storage.dispatch(CheckboxActions.initCheckboxList(this.checkboxList));

                    this.forceUpdate();
                }
            }
        );
    }

    loadCheckboxStates() {
        if (firebase.auth().currentUser) {
            console.log("Logged in");
            let userId = firebase.auth().currentUser.uid;
            let ref = this;
            console.log("User UID: " + userId);
            firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
                if (snapshot.val()) {
                    let checkboxStates = {
                        reddit: snapshot.val().reddit,
                        golem: snapshot.val().golem
                    };

                    ref.checkboxList = [
                        <Checkbox key={checkboxNames.reddit} identifier={checkboxNames.reddit}
                                  labelName="Reddit" checked={checkboxStates.reddit}/>,
                        <Checkbox key={checkboxNames.golem} identifier={checkboxNames.golem}
                                  labelName="Golem" checked={checkboxStates.golem}/>
                    ];

                    console.log("Dispatching content selection with array");
                    console.log(ref.checkboxList);
                    console.log("Sending ...");
                    storage.dispatch(CheckboxActions.initCheckboxList(ref.checkboxList));

                    ref.forceUpdate();
                }
            });
        }
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
