import { 
    ISLOG, GETDOGS, SETPAGE, SEARCH, TOGGLEFILTER, 
    TOGGLEORDER, SETFILTER, SETFILTERED, HIDEOPTIONS, 
    CLEANDOGS, SETORDER, ORDERDOGS, ORDERFILTERED, GETDOG, 
    SETBREED, SETHEIGHT, SETWEIGHT, SETLIFESPAN, SETURLIMAGE, 
    SETTEMPERAMENTSTOSELECT, SETSELECTEDTEMPERAMENTS, SETERRORS, 
    SETBODY, POSTDOG, CLEANCREATE, CLEANNEW
 } from './actions';

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
    order: ['name', 'upward'],
    breed: '', height: ['', ''], weight: ['', ''],
    lifeSpan: ['', ''], urlImage: '', temperamentsToSelect: [], selectedTemperaments: [],
    errors: {error: 0},
    body: {},
    new: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ISLOG:
            return { ...initialState, height: ['', ''], lifeSpan: ['', ''], weight: ['', ''], selectedTemperaments: [], isLoggedIn: action.payload};

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
                ...state,
                dogs: [],
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

        case SETTEMPERAMENTSTOSELECT:
            return {...state, temperamentsToSelect: action.payload};

        case SETSELECTEDTEMPERAMENTS:
            return {...state, selectedTemperaments: action.payload};
        
        case SETBREED:
            return {...state, breed: action.payload};
        
        case SETHEIGHT:
            return {...state, height: action.payload};

        case SETWEIGHT:
            return {...state, weight: action.payload};

        case SETLIFESPAN:
            return {...state, lifeSpan: action.payload};

        case SETURLIMAGE:
            return {...state, urlImage: action.payload};

        case SETERRORS:
            return {...state, errors: action.payload};

        case SETBODY:
            return {...state, body: action.payload};

        case POSTDOG:
            return {
                ...state, 
                new: action.payload,
                breed: '', 
                height: ['', ''], 
                weight: ['', ''],
                lifeSpan: ['', ''], 
                urlImage: '', 
                temperamentsToSelect: [], 
                selectedTemperaments: [],
                errors: {error: 0},
                body: {}
            };

        case CLEANCREATE:
            return {
                ...state, 
                breed: '', 
                height: ['', ''], 
                weight: ['', ''],
                lifeSpan: ['', ''], 
                urlImage: '', 
                temperamentsToSelect: [], 
                selectedTemperaments: [],
                errors: {error: 0},
                body: {}
            };

        case CLEANNEW:
            return {...state, new: {}};
        

        default:
            return state;
    }
}

export default reducer;