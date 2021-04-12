// these reducers are just samples, feel free to change them for your needs
import { actionTypes } from 'store/actionTypes/actionTypes';

const sampleReducer1 = (state = false, action) => {
    switch (action.type) {
        case actionTypes.SET_DISABLED:
            return action.payload.isValid;
        default:
            return state;
    }
}

export default sampleReducer1;