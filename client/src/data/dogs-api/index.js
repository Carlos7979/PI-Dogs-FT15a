import { axios } from 'common';

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

export default call;
