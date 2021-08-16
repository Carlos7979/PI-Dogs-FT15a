import { ISLOG } from './actions';

const initialState = {
    isLoggedIn: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ISLOG:
            
            return {...state, isLoggedIn: action.payload};
    
        default:
            return state;
    }
}

export default reducer;