import { ISLOG, GETALLDOGS, SETPAGE } from './actions';

const initialState = {
    isLoggedIn: '',
    dogs: [],
    dog: {},
    page: 1,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ISLOG:
            return {...state, isLoggedIn: action.payload, dogs: [], dog: {}, page: 1};

        case GETALLDOGS:
            return {...state, dogs: action.payload};

        case SETPAGE:
            return {...state, page: action.payload};

        default:
            return state;
    }
}

export default reducer;