import call from '../data/dogs-api';
// const call = require('../data/dogs-api');

export const ISLOG = 'ISLOG';

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
