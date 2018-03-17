import {CheckboxActions} from './CheckboxActions';

let initialState = {
    isAuthenticated: false,
    selected: false
};


function updateCheckboxState(state = initialState, action) {
    console.log("Reducer state input:");
    console.log(state);
    console.log("Reducer action:");
    console.log(action);
    console.log("Reducer checkboxList:");
    console.log(state.checkboxList);

    const checkbox = getCheckboxByIdentifier(state.checkboxList, action.identifier);

    switch (action.type) {
        case CheckboxActions.checkboxActions.selectCheckbox:
            checkbox.setChecked(true);
            return Object.assign({}, state, {
                isAuthenticated: false,
                selected: true
            });

        case CheckboxActions.checkboxActions.deselectCheckbox:
            checkbox.setChecked(false);
            return Object.assign({}, state, {
                isAuthenticated: false,
                selected: false
            });
        default:
            return state;
    }
}

function getCheckboxByIdentifier(checkboxList, identifier) {
    for (let checkbox in checkboxList) {
        if (checkbox.identifier === identifier) {
            return checkbox;
        }
    }
}

export {updateCheckboxState};
