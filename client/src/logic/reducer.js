import { ISLOG, GETDOGS, SETPAGE, SEARCH, TOGGLEFILTER, TOGGLEORDER, SETFILTER, SETFILTERED, HIDEOPTIONS, CLEANDOGS, SETORDER, ORDERDOGS, ORDERFILTERED, GETDOG } from './actions';

const initialState = {
    isLoggedIn: '',
    dogs: [],
    dog: {},
    page: 1,
    search: '',
    showFilter: false,
    showOrder: false,
    filter: 'all',
    filtered: [],
    order: ['name', 'upward']
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ISLOG:
            return { ...initialState, isLoggedIn: action.payload};

        case GETDOGS:
            return {...state, page: 1, filter: 'all', filtered: [], dogs: action.payload};

        case SETPAGE:
            return {...state, page: action.payload};

        case SEARCH:
            return {...state, search: action.payload};

        case TOGGLEFILTER:
            return {...state, showFilter: !state.showFilter};

        case TOGGLEORDER:
            return {...state, showOrder: !state.showOrder};

        case SETFILTER:
            return {...state, filter: action.payload};

        case SETFILTERED:
            return {...state, page: 1, filtered: action.payload};

        case HIDEOPTIONS:
            return {...state, showFilter: false, showOrder: false};  

        case CLEANDOGS:
            return {
                ...state, dogs: [],
                 page: 1,
                search: '',
                showFilter: false,
                showOrder: false,
                filter: 'all',
                filtered: [],
                order: ['name', 'upward']
            };

        case SETORDER:
            return {...state, order: action.payload};

        case ORDERDOGS:
            return {...state, dogs: action.payload};

        case ORDERFILTERED:
            return {...state, filtered: action.payload};   
            
        case GETDOG:
            return {...state, dog: action.payload};   

        default:
            return state;
    }
}

export default reducer;