const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/user', (req, res) => {
    db.getUsers()
    .then(info => {
        res.json(info)
    })
})

modules.exports = router