const express = require('express') // require the express npm module, needs to be added to the project using "yarn add" or "npm install"
const helmet = require('helmet');
const cors = require('cors');

// const authRouter = require('./auth/auth-router')
// const usersRouter = require('./users/users-router')

const server = express(); //creates an express application using the express module

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);


//configures our server to excute a function for ever GET request to '/'
//the second argument passed to the .get() method is the 'Route Handler function', which will run on every GET request to '/'
server.get('/', (req, res) => { 
    //express passes the request and response objects to this function
    //the .send on the response object can be used to send a response to the client
    res.send('Server up!')
})

module.exports = server;