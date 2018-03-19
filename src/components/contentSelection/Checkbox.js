import React, {Component} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import './ContentSelection.css';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import {CheckboxActions} from "../../storage/actions/CheckboxActions";
import {storage} from '../../storage/ReduxStorage';
import {connect} from "react-redux";

class Checkbox extends Component {

    constructor(props) {
        super(props);
        console.log("Checkbox props");
        console.log(props);

        this.state = {
            checked: props.checked
        };

        this.updateCheckboxState = this.updateCheckboxState.bind(this);
    }

    updateCheckboxState() {
        if (this.state.checked) {
            storage.dispatch(CheckboxActions.deselectCheckbox(this.props.identifier));
            this.setState({checked: false});
        } else {
            storage.dispatch(CheckboxActions.selectCheckbox(this.props.identifier));
            this.setState({checked: true});
        }

        console.log(this.props.identifier);
        const checkboxStates = {
            reddit: storage.getState().checkboxList.checkboxList[0].checked !== undefined ? storage.getState().checkboxList.checkboxList[0].checked : false,
            golem: storage.getState().checkboxList.checkboxList[1].checked !== undefined ? storage.getState().checkboxList.checkboxList[1].checked : false
        };

        console.log("checkboxStates");
        console.log(checkboxStates);

        if (firebase.auth().currentUser) {
            let currentUser = firebase.auth().currentUser;
            firebase.database().ref("/users/" + currentUser.uid).set({
                reddit: checkboxStates.reddit,
                golem: checkboxStates.golem
            });
        }
    }

    render() {
        return (
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name={this.props.identifier}
                           onClick={this.updateCheckboxState} defaultChecked={this.state.checked}
                           onChange={this.onChange}/>{' '}
                    {this.props.labelName}
                </Label>
            </FormGroup>
        );
    }
}

Checkbox.propTypes = {
    identifier: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
};

let getCheckboxIndexByIdentifier = (checkboxList, identifier) => {
    let index = 0;
    while (checkboxList[index] !== undefined) {
        const checkbox = checkboxList[index];
        if (checkbox.props.identifier === identifier) {
            return index;
        }
        index++;
    }

    return -1;
};

let mapStateToProps = (state, props) => {
    const checkboxIndex = getCheckboxIndexByIdentifier(state.checkboxList.checkboxList, props.identifier);

    if (checkboxIndex >= 0) {
        const checkbox = state.checkboxList.checkboxList[checkboxIndex];
        return {
            identifier: checkbox.props.identifier,
            labelName: checkbox.props.labelName
        };
    }

    return null;
};

export default connect(mapStateToProps)(Checkbox);
