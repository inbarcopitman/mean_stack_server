const express = require('express')
const bodyParser = require ('body-parser');
var cors = require('cors')

const usersRoute = require('../FullStackProject/Server/Route/usersRouth');

var app = express ();
app.use(cors());

require('../FullStackProject/Server/configs/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users' , usersRoute);

app.listen(8000);
