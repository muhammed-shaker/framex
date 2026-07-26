const dotenv = require('dotenv');
dotenv.config();

const DEFAUTL_APP_PORT = 3000;
const APP_PORT = process.env.APP_PORT || DEFAUTL_APP_PORT;

const MONGO_URI = process.env.APP_PORT 


// validate env variables

module.exports = {
    APP_PORT
}