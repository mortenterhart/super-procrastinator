
const checkboxActions = {
    selectCheckbox: 'SELECT_CHECKBOX',
    unselectCheckbox: 'UNSELECT_CHECKBOX'
};

export function selectCheckbox(identifier) {
    return {
        type: checkboxActions.selectCheckbox,
        identifier: identifier,
        isAuthenticated: false,
        selected: true
    };
}

export function unselectCheckbox(identifier) {
    return {
        type: checkboxActions.unselectCheckbox,
        identifier: identifier,
        isAuthenticated: false,
        selected: false
    };
}

