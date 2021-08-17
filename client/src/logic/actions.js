import call from '../data/dogs-api';

const url = 'http://localhost:3001/api-dogs/';

export const ISLOG = 'ISLOG';
export const GETALLDOGS = 'GETALLDOGS';
export const SETPAGE = 'SETPAGE';
export const SEARCH = 'SEARCH';

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
