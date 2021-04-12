import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const initialState = {
    isValid: false,
    count: 5,
}

const store = createStore(rootReducer, initialState, applyMiddleware(reduxThunk));

export default store;