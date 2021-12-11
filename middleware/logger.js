const moment = require('moment');

// Every time you make a request in Postman, this will run
const logger = (req, res, next) => {
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl + ':' + moment().format());
    next();
}

module.exports = logger;