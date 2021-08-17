import { ISLOG, GETALLDOGS, SETPAGE, SEARCH } from './actions';

const initialState = {
    isLoggedIn: '',
    dogs: [],
    dog: {},
    page: 1,
    search: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ISLOG:
            return {...state, isLoggedIn: action.payload, dogs: [], dog: {}, page: 1, search: ''};

        case GETALLDOGS:
            return {...state, page: 1, dogs: action.payload};

        case SETPAGE:
            return {...state, page: action.payload};

        case SEARCH:
            return {...state, search: action.payload};

        default:
            return state;
    }
}

export default reducer;