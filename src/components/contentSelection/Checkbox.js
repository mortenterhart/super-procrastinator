import React, {Component} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import './ContentSelection.css';
import PropTypes from 'prop-types';
import {CheckboxActions} from "../../storage/actions/CheckboxActions";
import {storage} from '../../storage/ReduxStorage';
import {connect} from "react-redux";

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.identifier = props.identifier;
        this.labelName = props.labelName;
        this.checked = props.checked;

        this.updateCheckboxState = this.updateCheckboxState.bind(this);
    }

    updateCheckboxState() {
        if (this.props.checked) {
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
                           onClick={this.updateCheckboxState}/>{' '}
                    {this.labelName}
                </Label>
            </FormGroup>
        );
    }
}

Checkbox.propTypes = {
    identifier: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
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
            labelName: checkbox.props.labelName,
            checked: checkbox.props.checked
        };
    }

    return null;
};

export default connect(mapStateToProps)(Checkbox);
