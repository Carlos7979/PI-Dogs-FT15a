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
export const SETORDER = 'SETORDER';
export const ORDERDOGS = 'ORDERDOGS';
export const ORDERFILTERED = 'ORDERFILTERED';

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

export function setOrder(payload) {
    return {
        type: SETORDER,
        payload
    }
}

export function orderDogs(dogs, order) {
    if (dogs.length > 1) {
        dogs.sort((a, b) => {
            const type = order[0];
            const dir = order[1]
            if (type === 'name') {
                if (a[type] > b[type]) return dir === 'upward' ? 1 : -1;
                if (a[type] < b[type]) return dir === 'upward' ? -1 : 1;
                return 0;
            } else {
                if (a[type][0] === b[type][0]) {
                    return dir === 'upward' ?  a[type][1] - b[type][1] : b[type][1] - a[type][1];
                }
                return dir === 'upward' ? a[type][0] - b[type][0] : b[type][0] - a[type][0];
            }
        });
    }
    return {
        type: ORDERDOGS,
        payload: dogs
    }
}

export function orderFiltered(dogs, order) {
    const action = orderDogs(dogs, order);
    return {
        type: ORDERFILTERED,
        payload: action.payload
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
            if (dogs.length > 1) {
                dogs.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                });
            }
            dogs = dogs.map(dog => {
                if (dog.name === 'Smooth Fox Terrier') {
                    dog.weight = [6, 8];
                    return dog;
                }
                if (dog.name === 'Olde English Bulldogge') {
                    dog.weight = [20, 30];
                    return dog;
                }
                const array = dog.weight.split(' - ');
                dog.weight = [parseInt(array[0]), parseInt(array[1])]
                return dog;
            });
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
