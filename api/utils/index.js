const dogToSendFromApi = require('./dogToSendFromApi');
const dogToSendFromDB = require('./dogToSendFromDB');
const temperamentToSend = require('./temperamentToSend');
const middleware = require('./middleware');

module.exports = {
    dogToSendFromApi,
    dogToSendFromDB,
    temperamentToSend,
    middleware
}