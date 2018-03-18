import React, {Component} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import './ContentSelection.css';
import {CheckboxActions} from "../../storage/actions/CheckboxActions";
import {storage} from '../../storage/ReduxStorage';

class Checkbox extends Component {

    constructor(identifier, labelName, checked) {
        super();
        this.identifier = identifier;
        this.labelName = labelName;
        this.checked = checked;
        this.setChecked = function(checked) {
            this.checked = checked;
        }
    }

    updateCheckboxState() {
        if (this.checked) {
            storage.dispatch(CheckboxActions.deselectCheckbox(this.identifier));
        } else {
            storage.dispatch(CheckboxActions.selectCheckbox(this.identifier));
        }
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
