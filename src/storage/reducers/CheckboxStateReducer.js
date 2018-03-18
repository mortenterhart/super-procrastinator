import {CheckboxActions} from '../actions/CheckboxActions';

let initialState = {
    checkboxList: {
        checkboxList: []
    },
    redditAPI: {}
};

function updateCheckboxState(state = initialState, action) {
    console.log("Reducer state");
    console.log(state);
    console.log(action.checkboxList);
    const checkboxIndex = getCheckboxIndexByIdentifier(state.checkboxList.checkboxList, action.identifier);

    switch (action.type) {
        case CheckboxActions.initCheckboxListAction:
            return Object.assign({}, state, {
                ...state,
                checkboxList: {
                    checkboxList: action.checkboxList
                }
            });

        case CheckboxActions.selectCheckboxAction:
            state.checkboxList[checkboxIndex].props.checked = true;
            return Object.assign({}, state, {
                ...state,
                checkboxList: state.checkboxList
            });

        case CheckboxActions.deselectCheckboxAction:
            state.checkboxList[checkboxIndex].props.checked = false;
            return Object.assign({}, state, {
                ...state,
                checkboxList: state.checkboxList
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

    return -1;
}

export {updateCheckboxState};
