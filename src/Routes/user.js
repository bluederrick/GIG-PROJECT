const express = require('express')
const routes = express.Router();
const { signup, GetAllUsers } = require('../Controllers/user-controllers.js')

routes.route('/').get(GetAllUsers);

routes.post('/signup', signup);

// routes.get('/login', Login);

module.exports = routes;




