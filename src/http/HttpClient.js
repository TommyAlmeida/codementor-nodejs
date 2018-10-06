const RequestError = require('./RequestError');
const API_URL = "https://dev.codementor.io/api/";

let HttpClient = {};

HttpClient.makeRequest = (path, data = {}) => {

    const apiKey = data.apiKey;
    const options = {
        ...data,

        headers: {
            "x-codementor-api-key": apiKey
        },
    };

    const url = `${ API_URL }/${ path }`;

    if (options.body && typeof options.body === 'object') {
        options.body = JSON.stringify(options.body);
    }

    let response = null;

    return fetch(url, options)
        .then(responseObject => {
            response = responseObject;

            if (response.status === 401) {
                throw new RequestError('Your API key is wrong.', null, 401)
            }

            if (response.status < 200 || response.status >= 300) {
                return response.text();
            }

            return response.json();
        })
        .then(parsedResponse => {
            if (response.status < 200 || response.status >= 300) {
                throw parsedResponse;
            }

            return parsedResponse;
        })
        .catch(error => {
            if (response) {
                throw new RequestError(`Request failed with status ${ response.status }.`, error, response.status);
            } else {
                throw new RequestError(error.toString(), null, 500);
            }
        });
};

module.exports.HttpClient = HttpClient;