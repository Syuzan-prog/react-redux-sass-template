import { actionTypes } from 'store/actionTypes/actionTypes';

export const setDisabled = (disabled) => (dispatch) => {
    dispatch({
        type: actionTypes.SET_DISABLED,
        payload: { disabled }
    })
}