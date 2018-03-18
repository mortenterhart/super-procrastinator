import {CheckboxActions} from '../actions/CheckboxActions';

let initialState = {
    checkboxList: []
};


function updateCheckboxState(state = initialState, action) {
    console.log("Reducer state input:");
    console.log(state);
    console.log("Reducer action:");
    console.log(action);
    console.log("Reducer checkboxList:");
    console.log(state.checkboxList);

    const checkboxIndex = getCheckboxIndexByIdentifier(state.checkboxList, action.identifier);

    switch (action.type) {
        case CheckboxActions.initCheckboxListAction:
            return Object.assign({}, state, {
                checkboxList: action.checkboxList
            });

        case CheckboxActions.selectCheckboxAction:
            state.checkboxList[checkboxIndex].checked = true;
            return Object.assign({}, state, {
                checkboxList: state.checkboxList
            });

        case CheckboxActions.deselectCheckboxAction:
            state.checkboxList[checkboxIndex].checked = false;
            return Object.assign({}, state, {
                checkboxList: state.checkboxList,
            });
        default:
            return state;
    }
}

function getCheckboxIndexByIdentifier(checkboxList, identifier) {
    let index = 0;
    for (const checkbox of checkboxList) {
        if (checkbox.identifier === identifier) {
            return index;
        }
        index++;
    }

    return null;
}

export {updateCheckboxState};
