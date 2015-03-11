/**
 * Created by harshavardhan on 15-02-18.
 */
var express = require('express')
var request = require('supertest')
var router = require('../../../controllers')

var app = express()
app.use(router)

module.exports = request(app)