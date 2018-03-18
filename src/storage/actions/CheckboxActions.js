
class CheckboxActions {

    static initCheckboxListAction = 'checkbox:initCheckboxList';
    static selectCheckboxAction = 'checkbox:selectCheckbox';
    static deselectCheckboxAction = 'checkbox:deselectCheckbox';

    static initCheckboxList(checkboxList) {
        return {
            type: this.initCheckboxListAction,
            checkboxList: checkboxList
        };
    }

    static selectCheckbox(identifier) {
        return {
            type: this.selectCheckboxAction,
            identifier: identifier
        };
    }

    static deselectCheckbox(identifier) {
        return {
            type: this.deselectCheckboxAction,
            identifier: identifier
        };
    }
}

export {CheckboxActions};

