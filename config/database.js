//Set up mongoose connection
console.log('mongo db connect');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/dataint_movies_rest_api';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/