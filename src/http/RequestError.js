module.exports.RequestError = function(message, data, status){
    let response = null;
    let isObject = false;

    try {
        response = JSON.parse(data);
        isObject = true;
    } catch (e) {
        response = data;
    }

    this.response = response;
    this.message = message;
    this.status = status;

    this.toString = function () {
        return `${ this.message }\nResponse:\n${ isObject ? JSON.stringify(this.response, null, 2) : this.response }`;
    };
}