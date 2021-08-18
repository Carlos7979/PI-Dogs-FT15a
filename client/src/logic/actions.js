import call from '../data/dogs-api';

const url = 'http://localhost:3001/api-dogs/';

export const ISLOG = 'ISLOG';
export const GETDOGS = 'GETDOGS';
export const SETPAGE = 'SETPAGE';
export const SEARCH = 'SEARCH';
export const TOGGLEFILTER = 'TOGGLEFILTER';
export const TOGGLEORDER = 'TOGGLEORDER';
export const SETFILTER = 'SETFILTER';
export const SETFILTERED = 'SETFILTERED';
export const HIDEOPTIONS = 'HIDEOPTIONS';
export const CLEANDOGS = 'CLEANDOGS';

export function isLog(payload) {
    return {
        type: ISLOG,
        payload
    }
}

export function setPage(payload) {
    return {
        type: SETPAGE,
        payload
    }
}

export function searchDogs(payload) {
    return {
        type: SEARCH,
        payload
    }
}

export function toggleFilter() {
    return {
        type: TOGGLEFILTER
    }
}

export function toggleOrder() {
    return {
        type: TOGGLEORDER
    }
}

export function setFilter(payload) {
    return {
        type: SETFILTER,
        payload
    }
}

export function setFiltered(payload) {
    return {
        type: SETFILTERED,
        payload
    }
}

export function hideOptions() {
    return {
        type: HIDEOPTIONS
    }
}

export function cleanDogs() {
    return {
        type: CLEANDOGS
    }
}

export function getDogs(name) {
    return async dispatch => {
        try {
            let path = '/dogs';
            if (name) path = path + `?name=${name}`;
            let dogs = await call(`${url}${path}`);
            if (dogs.status === 404) {
                dogs = [{
                    name: 'Not founded dog',
                    urlImage: 'https://cdn.dribbble.com/users/4308506/screenshots/7807480/media/aabcdbc8ede7a673512a6646ce815245.png'
                }];
            }
            dispatch({
                type: GETDOGS,
                payload: dogs
            })
        } catch (error) {
            console.log(error);
        }
    }
    
}

// export function getDogs() {
//     return function (dispatch) {
//         return call(`${url}/dogs`)
//             // .then(response => console.log(response))
//             .then(response => {
//                 dispatch({
//                     type: GETDOGS,
//                     payload: response
//                 })
//             })
//             .catch(error => console.log(error))
//     }
// }
