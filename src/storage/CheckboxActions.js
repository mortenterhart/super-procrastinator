
class CheckboxActions {

    static checkboxActions = {
        selectCheckbox: 'SELECT_CHECKBOX',
        deselectCheckbox: 'DESELECT_CHECKBOX'
    };

    static selectCheckbox(identifier) {
        //console.log("Action " + this.checkboxActions.selectCheckbox + " was triggered");
        return {
            type: this.checkboxActions.selectCheckbox,
            identifier: identifier
        };
    }

    static deselectCheckbox(identifier) {
        //console.log("Action " + this.checkboxActions.deselectCheckbox + " was triggered");
        return {
            type: this.checkboxActions.deselectCheckbox,
            identifier: identifier
        };
    }
}

export {CheckboxActions};

