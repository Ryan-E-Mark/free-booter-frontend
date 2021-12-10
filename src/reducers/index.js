import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
    product: [

    ],
    fetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                product: [],
                fetching: true,
                error: ''
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                product: action.payload,
                fetching: false,
                error: ''
            }
        case FETCH_FAIL: 
            return {
                ...state,
                product: [],
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;