import {CheckboxActions} from '../actions/CheckboxActions';

let initialState = {
    checkboxList: []
};

function updateCheckboxState(state = initialState, action) {
    //console.log("Reducer state: ");
    //console.log(state);
    let checkboxIndex = -1;
    if (action.type.match(/^checkbox:(de)?selectCheckbox$/)) {
        //console.log("state.checkboxList");
        //console.log(state.checkboxList);
        checkboxIndex = getCheckboxIndexByIdentifier(state.checkboxList, action.identifier);
    }

    switch (action.type) {
        case CheckboxActions.initCheckboxListAction:
            console.log("action " + CheckboxActions.initCheckboxListAction);
            return Object.assign({}, state, {
                checkboxList:  action.checkboxList
            });

        case CheckboxActions.selectCheckboxAction:
            console.log("action " + CheckboxActions.selectCheckboxAction);
            return Object.assign({}, state, {
                checkboxList: copyCheckboxListWithDifferentValue(state.checkboxList, checkboxIndex, true)
            });

        case CheckboxActions.deselectCheckboxAction:
            console.log("action " + CheckboxActions.deselectCheckboxAction);
            return Object.assign({}, state, {
                checkboxList: copyCheckboxListWithDifferentValue(state.checkboxList, checkboxIndex, false)
            });
        default:
            return state;
    }
}

function copyCheckboxListWithDifferentValue(checkboxList, index, checked) {
    const copiedCheckboxList = Object.assign({}, checkboxList, {});

    let i = 0;
    while (copiedCheckboxList[i] !== undefined) {
        const checkbox = copiedCheckboxList[i];
        if (i === index) {
            copiedCheckboxList[i] = Object.assign({}, checkbox, {
                props: {
                    ...checkbox.props,
                    checked: checked
                }
            });
            break;
        }
        i++;
    }

    return copiedCheckboxList;
}

function getCheckboxIndexByIdentifier(checkboxList, identifier) {
    let index = 0;
    while (checkboxList[index] !== undefined) {
        const checkbox = checkboxList[index];
        if (checkbox.props.identifier === identifier) {
            return index;
        }
        index++;
    }

    return -1;
}

export {updateCheckboxState};
