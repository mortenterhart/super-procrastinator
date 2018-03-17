import React, {Component} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import './ContentSelection.css';
import {CheckboxActions} from "../../storage/CheckboxActions";
import {storage} from '../../storage/ReduxStorage';

class Checkbox extends Component {

    constructor(props) {
        super();
        this.identifier = props.identifier;
        this.labelName = props.labelName;
        this.checked = props.checked;
    }

    updateCheckboxState(event) {
        const checkbox = event.target;
        //console.log("checkboxName: " + checkbox.identifier);
        //console.log("checked: " + checkbox.checked);
        if (!checkbox.checked) {
            //console.log("checkbox " + checkbox.identifier + " was checked");
            storage.dispatch(CheckboxActions.deselectCheckbox(checkbox.identifier));
            this.checked = false;
        } else {
            //console.log("checkbox " + checkbox.identifier + " was not checked");
            storage.dispatch(CheckboxActions.selectCheckbox(checkbox.identifier));
            this.checked = true;
        }

        //console.log(storage.getState());
    }

    setChecked(checked) {
        this.checked = checked;
    }

    render() {
        return (
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name={this.identifier}
                           onClick={this.updateCheckboxState.bind(this)}/>{' '}
                    {this.labelName}
                </Label>
            </FormGroup>
        );
    }
}

export default Checkbox;
