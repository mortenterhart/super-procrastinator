import {createStore} from 'redux';
import {updateCheckboxState} from './CheckboxStateReducer';

let storage = createStore(updateCheckboxState);

storage.subscribe(() =>
    console.log("State in storage changed!")
);

export {storage};
