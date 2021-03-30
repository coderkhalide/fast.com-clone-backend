const express = require('express')
const speedTest = require('../routers/speedTest')

module.exports = function(app){
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use('/api/speed-test', speedTest)
}
