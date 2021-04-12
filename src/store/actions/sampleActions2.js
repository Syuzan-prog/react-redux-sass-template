import { actionTypes } from 'store/actionTypes/actionTypes';

export const increaseCount = () => (dispatch, getState) => {
    const { count } = getState();
    if (count >= 100) {
        return;
    }
    dispatch({
        type: actionTypes.SET_COUNT,
        payload: { count: count + 1 }
    })
}

export const decreaseCount = () => (dispatch, getState) => {
    const { count } = getState();
    if (count === 0) {
        return;
    }
    dispatch({
        type: actionTypes.SET_COUNT,
        payload: { count: count - 1 }
    })
}