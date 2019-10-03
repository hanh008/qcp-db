const config = require('../knexfile').development
const db = require('knex')(config)

function getUsers() {
    return db('users').select()
        .then(item => {
            return item.map(newItem => {
                return newItem
        })
    })
}

module.exports = {
    getUsers
}