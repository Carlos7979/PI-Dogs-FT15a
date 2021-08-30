import dogsApi from '../data/dogs-api';
const { getTemperaments, postDog, getDogs, getDog } = dogsApi

export const ISLOG = 'ISLOG';
export const SETDOGS = 'SETDOGS';
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
export const SETDOG = 'SETDOG';
export const SETBREED = 'SETBREED';
export const SETHEIGHT = 'SETHEIGHT';
export const SETWEIGHT = 'SETWEIGHT';
export const SETLIFESPAN = 'SETLIFESPAN';
export const SETURLIMAGE = 'SETURLIMAGE';
export const SETTEMPERAMENTSTOSELECT = 'SETTEMPERAMENTSTOSELECT';
export const SETSELECTEDTEMPERAMENTS = 'SETSELECTEDTEMPERAMENTS';
export const SETERRORS = 'SETERRORS';
export const SETBODY = 'SETBODY';
export const CREATEDOG = 'CREATEDOG';
export const CLEANCREATE = 'CLEANCREATE';
export const CLEANNEW = 'CLEANNEW';
export const UPDATEDOGS = 'UPDATEDOGS';

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

export function setBreed(payload) {
    return {
        type: SETBREED,
        payload
    }
}

export function setHeight(payload) {
    return {
        type: SETHEIGHT,
        payload
    }
}

export function setWeight(payload) {
    return {
        type: SETWEIGHT,
        payload
    }
}

export function setLifeSpan(payload) {
    return {
        type: SETLIFESPAN,
        payload
    }
}

export function setUrlImage(payload) {
    return {
        type: SETURLIMAGE,
        payload
    }
}

export function setSelectedTemperaments(payload) {
    return {
        type: SETSELECTEDTEMPERAMENTS,
        payload
    }
}

export function setErrors(payload) {
    return {
        type: SETERRORS,
        payload
    }
}

export function setBody(payload) {
    return {
        type: SETBODY,
        payload
    }
}

export function cleanCreate() {
    return {
        type: CLEANCREATE
    }
}

export function cleanNew() {
    return {
        type: CLEANNEW
    }
}

export function updateDogs(dogs, newDog, order) {
    if (!newDog.urlImage) newDog.urlImage = "https://agencias.assist1.com.co/assets/images/no-image.png";
    dogs.push(newDog);
    const action = orderDogs(dogs, order);
    return {
        type: UPDATEDOGS,
        payload: action.payload
    }
}

export function createDog(body) {
    return async dispatch => {
        try {
            const response = await postDog(body);
            if (body.name === response.name) {
                dispatch({
                    type: CREATEDOG,
                    payload: response
                })
            } else {
                dispatch({
                    type: SETERRORS,
                    payload: {
                        message: 'Breed name already exists'
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export function setTemperamentsToSelect() {
    return async dispatch => {
        try {
            const temperaments = await getTemperaments();
            dispatch({
                type: SETTEMPERAMENTSTOSELECT,
                payload: temperaments
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function setDogs(name, order) {
    return async dispatch => {
        try {
            const dogs = await getDogs(name);
            const action = orderDogs(dogs, order);
            dispatch({
                type: SETDOGS,
                payload: action.payload
            })
        } catch (error) {
            console.log(error);
        }
    }
    
}

export function setDog(id) {
    return async dispatch => {
        try {
            const dog = await getDog(id);
            dispatch({
                type: SETDOG,
                payload: dog
            })
        } catch (error) {
            console.log(error);
        }
    }
    
}
