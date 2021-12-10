import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchProducts = () => {
    return (dispatch => {
        dispatch(fetchStart());
        axios.get('')
            .then(resp => {
                dispatch(fetchSuccess(resp.data));
            })
            .catch(err => {
                dispatch(fetchFail(err))
            })
    })
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = () => {
    return({type: FETCH_SUCCESS});
}

export const fetchFail = () => {
    return({type: FETCH_FAIL})
}