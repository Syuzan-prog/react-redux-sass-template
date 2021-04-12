// these reducers are just samples, feel free to change them for your needs
import { actionTypes } from 'store/actionTypes/actionTypes';

const sampleReducer2 = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.SET_COUNT:
            return action.payload.count;
        default:
            return state;
    }
}

export default sampleReducer2;