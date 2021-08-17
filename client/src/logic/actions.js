import call from '../data/dogs-api';
// const call = require('../data/dogs-api');

const url = 'http://localhost:3001/api-dogs/';

export const ISLOG = 'ISLOG';
export const GETALLDOGS = 'GETALLDOGS';
export const SETPAGE = 'SETPAGE';

// (async () => {
//     const result = await call('http://localhost:3001/api-dogs/temperaments');
//     console.log(result);
// })();

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

export function getDogs() {
    return async dispatch => {
        try {
            const dogs = await call(`${url}/dogs`);
            // console.log(dogs)
            dispatch({
                type: GETALLDOGS,
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
//                     type: GETALLDOGS,
//                     payload: response
//                 })
//             })
//             .catch(error => console.log(error))
//     }
// }
