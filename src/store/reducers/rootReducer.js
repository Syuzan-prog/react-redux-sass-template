import { combineReducers } from 'redux';

import sampleReducer1 from './sampleReducer1';
import sampleReducer2 from './sampleReducer2';

export default combineReducers({
    isValid: sampleReducer1,
    count: sampleReducer2,
})