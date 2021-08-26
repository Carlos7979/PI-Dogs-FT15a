import { axios } from 'common';

const url = 'http://localhost:3001/api-dogs';

function call(url, options = {}) {
    const { method = 'GET', body } = options;
    // TODO validate
    let axiosCall = axios.get;
    if (method === 'POST') axiosCall = axios.post;
    return (async () => {
        try {
            const response = await axiosCall(url, body);
            return response.data;
        } catch (error) {
            if (error.code === 'ECONNREFUSED') return console.log('Cannot connect');
            if (error.response && error.response.status) {
                return {
                    message: error.response.statusText,
                    status: error.response.status
                }
            }
            return console.log('Error: ', error);
        }
    })();
}

const dogsApi = {
    
    getTemperaments() {
        let path = '/temperaments';
        return (async() => {
            const response = await call(`${url}${path}`);
            const temperaments = [];
            if (response.length > 0) {
                for (const temperament of response) {
                    if (temperament.temperament) {
                        temperaments.push(temperament.temperament);
                    }
                }
            }
            return temperaments.sort();
        })() 
    },

    postDog(body) {
        let path = '/dogs';
        return (async () => {
            return await call(`${url}${path}`, {method: 'POST', body});
        })()
    },

    getDogs(name) {
        let path = '/dogs';
        if (name) path = path + `?name=${name}`;
        return (async () => {
            let dogs = await call(`${url}${path}`);
            if (dogs.status === 404) {
                dogs = [{
                    name: 'Not founded dog',
                    urlImage: 'https://cdn.dribbble.com/users/4308506/screenshots/7807480/media/aabcdbc8ede7a673512a6646ce815245.png'
                }];
            }
            if (dogs[0].name !== 'Not founded dog') {
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
                    dog.weight = [parseInt(array[0]), parseInt(array[1])];
                    if (!dog.urlImage) dog.urlImage = "https://agencias.assist1.com.co/assets/images/no-image.png";
                    return dog;
                });
            }
            return dogs;
        })()
    },

    getDog(id) {
        let path = '/dogs';
        if (id) path = path + `/${id}`;
        return (async () => {
            let dog = await call(`${url}${path}`);
            if (dog.status === 404) {
                dog = {
                    id: 'Not founded dog',
                    urlImage: 'https://cdn.dribbble.com/users/4308506/screenshots/7807480/media/aabcdbc8ede7a673512a6646ce815245.png'
                };
            }
            if (dog.name === 'Smooth Fox Terrier') {
                dog.weight = '6 - 8';
            }
            if (dog.name === 'Olde English Bulldogge') {
                dog.weight = '20 - 30';
            }
            if (!dog.urlImage) dog.urlImage = "https://agencias.assist1.com.co/assets/images/no-image.png";
            return dog;
        })()
    }
}

export default dogsApi;
